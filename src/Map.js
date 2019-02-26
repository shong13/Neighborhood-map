import React, { Component } from 'react';
import { load_google_maps, load_places } from './utils';
import Places from './Places';
import NavBar from './NavBar';

class Map extends Component {
	state = {
		places: [],
		city: 'San Luis Obispo',
		interest: 'restaurant'
	}

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

			venues.forEach(venue => {
				let marker = new google.maps.Marker({
					position: { lat: venue.location.lat, lng: venue.location.lng },
					map: this.map,
					venue: venue,
					id: venue.id,
					name: venue.name,
					animation: google.maps.Animation.DROP
				})
				this.markers.push(marker)	
			})
			this.setState({
				places: this.markers
			})
		})
	}
	
	render(){
		return (
			<div>
				<NavBar updateCity={this.updateCity} city={this.state.city} interest={this.state.interest}/>
				<main id="map"></main>
				<div className="places" style={{visibility: "hidden"}}>
					{this.state.places.map((place) => (
						<Places key={place.venue.id} places={place}/>
					))}
				</div>

			</div>
		)
	}
}

export default Map;