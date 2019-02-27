import React, { Component } from 'react';

class NavBar extends Component {
//when side bar has been toggled, shift the focus to the places div
	clickHandler = () => {
		const sideBar = document.querySelector(".places")

		if(sideBar.style.visibility === "hidden"){
			sideBar.style.visibility = "visible"
			sideBar.focus()
		} else {
		 	sideBar.style.visibility = "hidden"
		}
		
	}

	keyHandler = (event) => {
		const code = event.keyCode
		if(code === 13) {
			this.clickHandler()
		}
	}

	render() {
		return(
			<div id='navbar'>
				<button className="sideBarToggle" onKeyPress={(event)=>this.keyHandler} onClick={this.clickHandler}> Side Bar </button>
				<h1 className='title'>Neighborhood Map: {this.props.city}</h1>
			</div>
		)
	}
}

export default NavBar;