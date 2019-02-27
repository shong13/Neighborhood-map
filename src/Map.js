import React, { Component } from 'react';
import { load_google_maps, load_places} from './utils';
import Places from './Places';
import NavBar from './NavBar';

class Map extends Component {
	state = {
		places: [],
		city: 'San Luis Obispo',
		interest: 'restaurant',
		query: '',
		filteredPlaces: [],
		map: ""
	}
	
	/*when name of the place is clicked on the side bar, the marker will bounce and show info*/
	handlePlaceClick = (venue) => {
		const marker = this.state.places.find(marker => marker.id === venue.id)
		if(marker.getAnimation() !== null) {
			marker.setAnimation(null)
			marker.info.close()
		} else {
			marker.setAnimation(window.google.maps.Animation.BOUNCE)
			marker.info.open(window.google.maps.Map, marker)
		}
		console.log(marker)
	}

	queryChange = (query) => {
		this.setState({query: query}, this.filterList)
	}

	filterList = () => {
		const placeList = []
		this.state.places.forEach(place => {
			place.setMap(null)
			if(place.name.toLowerCase().includes(this.state.query.toLowerCase())){
				console.log(place.name)
				placeList.push(place)
			}
		})
		console.log(placeList)
		placeList.forEach(list=>{
			list.setMap(this.state.map)
		})
		this.setState({
			filteredPlaces: placeList
		})
		
		console.log("done")
	}


	// Implementation of map and venues from youtube tutorial https://www.youtube.com/watch?v=LvQe7xrUh7I
	componentDidMount() {
		let googleMapsPromise = load_google_maps()
		let placesPromise = load_places(this.state.city, this.state.interest)

		Promise.all([
			googleMapsPromise, 
			placesPromise
			
		]).then(values => {
			let google = values[0]
			let venues = values[1].response.venues
			
			this.google = google
			this.markers = []
			this.map = new google.maps.Map(document.getElementById('map'), {
				zoom: 13,
				scrollwheel: true,
				center: { lat: venues[0].location.lat, lng: venues[0].location.lng }
			})
			this.setState({
				map: this.map
			})

			venues.forEach(venue => {
				let marker = new google.maps.Marker({
					position: { lat: venue.location.lat, lng: venue.location.lng },
					map: this.map,
					venue: venue,
					id: venue.id,
					name: venue.name,
					animation: google.maps.Animation.DROP
				})
			
				let infowindow = new google.maps.InfoWindow({
					content: `${venue.name} <br/> ${venue.location.address ? venue.location.address : "Address unavailable"}`
				})

				marker.info=infowindow

				marker.addListener('click', () => {
					if(marker.getAnimation() !== null) {
						marker.setAnimation(null)
						marker.info.close()
					} else {
						marker.setAnimation(google.maps.Animation.BOUNCE)
						marker.info.open(this.map, marker)
					}
				})

				this.markers.push(marker)	
			})
			this.setState({
				places: this.markers,
				filteredPlaces: this.markers
			})
		})
	}
	
	render(){
		return (
			<div>
				<NavBar city={this.state.city} interest={this.state.interest}/>
				<main id="map"></main>
				<div className="places" style={{visibility: "hidden"}}>
					<div>
						<p>Filter by Name</p>
						<input 
							id="placesFilter" 
							type="text" 
							placeholder="Restaurant Name" 
							value={this.state.query} 
							onChange={(event) => this.queryChange(event.target.value)}
						/>
					</div>
					{this.state.filteredPlaces.map((place) => (
						<Places 
							key={place.venue.id} 
							places={place} 
							handlePlaceClick={this.handlePlaceClick}
						/>
					))}
				</div>

			</div>
		)
	}
}

export default Map;