import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class SimpleMap extends Component {
	static defaultProps = {
		center: {
			lat: 35.2827524,
			lng: -120.6596156
		},
		zoom: 14
	}

	render() {
		return (
			<div style={{ height: '50vh', width: '50%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyD-dmBFJdqCcuK3-t5VKYtUi19LH8iSV3Q' }}
					defaultCenter={ this.props.center }
					defaultZoom={ this.props.zoom }
					onClick={(e)=>{
						console.log(e.lat)
					}}
				/>
			</div>
		)
	}
}

export default SimpleMap