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
				<p className='title'>Neighborhood Map {this.props.interest}</p>
			</div>
		)
	}
}

export default NavBar;