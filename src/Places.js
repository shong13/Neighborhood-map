import React, { Component } from 'react';

class Places extends Component {

	render() {
		const { name, venue } = this.props.places
		const address = `${venue.location.address}`
		const address2 = `${venue.location.city}, ${venue.location.state} ${venue.location.postalCode}`
		return (
			<div className="venueInfo">
				<h2 className="venueName">{name}</h2>
				<p>add image here</p>
				<p>{address}</p>
				<p>{address2}</p>
				<p>operating hours (if there is any)</p>
			</div>
		)
	}
}

export default Places;