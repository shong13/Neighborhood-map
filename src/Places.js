import React, { Component } from 'react';

class Places extends Component {

	render() {
		const { name, venue } = this.props.places
		const address = `${venue.location.address ? venue.location.address : ""}`
		const address2 = `${venue.location.city ? venue.location.city : ""}, 
						${venue.location.state ? venue.location.state : ""} 
						${venue.location.postalCode ? venue.location.postalCode : ""}`
		
		return (
			<div className="venueInfo" onClick={()=> this.props.handlePlaceClick(this.props.places)}>
				<h2 className="venueName">{name ? name : ''}</h2>
				<p>{address} <br/> {address2}</p>
			</div>
		)
	}
}

export default Places;