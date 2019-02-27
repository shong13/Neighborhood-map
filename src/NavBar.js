import React, { Component } from 'react';

class NavBar extends Component {

	test = () => {
		const test = document.querySelector(".places")
		if(test.style.visibility === "hidden"){
			test.style.visibility = "visible"
		} else {
			test.style.visibility = "hidden"
		}
	}

	render() {
		return(
			<div id='navbar'>
				<button onClick={this.test}> test </button>
				<h1 className='title'>Neighborhood Map: {this.props.city}</h1>
			</div>
		)
	}
}

export default NavBar;