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

	handlePlaceKey = (venue, event) => {
		if(event.key === "Enter"){
			const marker = this.state.places.find(marker => marker.id === venue.id)
			if(marker.getAnimation() !== null) {
				marker.setAnimation(null)
				marker.info.close()
			} else {
				marker.setAnimation(window.google.maps.Animation.BOUNCE)
				marker.info.open(window.google.maps.Map, marker)
			}
		}
	}

	queryChange = (query) => {
		this.setState({query: query}, this.filterList)
	}

	filterList = () => {
		const placeList = []
		this.state.places.forEach(place => {
			//Since we already rendered allthe marker by default,
			//hide all markers once filtering starts
			place.setMap(null)
			//placeList is empty every time queryChange is called so making
			//the array take in only the ones that gets filtered
			if(place.name.toLowerCase().includes(this.state.query.toLowerCase())){
				placeList.push(place)
			}
		})

		placeList.forEach((list)=>{
			list.setMap(this.state.map)
		})
		this.setState({
			filteredPlaces: placeList
		})
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
			//to get a instance of the map
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
		}).catch(error => {
			console.log(error)
			console.log("There was a problem loading the page")
		})
	}
	
	render(){
		return (
			<div>
				<NavBar city={this.state.city} interest={this.state.interest}/>
				<section tabIndex="-1" className="places" style={{visibility: "hidden"}}>
					<div>
						<p className="filterTitle">Filter by Name</p>
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
							handlePlaceKey={this.handlePlaceKey}
						/>
					))}
				</section>
				<main>
					<div role="application" aria-hidden="true" id="map"></div>
				</main>

			</div>
		)
	}
}

export default Map;