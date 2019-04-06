//Implementation of map and venues from youtube tutorial https://www.youtube.com/watch?v=LvQe7xrUh7I

export function load_google_maps() {
	return new Promise((resolve, reject) => {
		window.resolveGoogleMapsPromise = () => {
			resolve(window.google);
			delete window.resolveGoogleMapsPromise;
		}

		const script = document.createElement("script");
		const API_KEY = "AIzaSyD_xQ1cjjaHmbHkOpfjwUT27o4DFdKYBZs";
		script.async = true;
		script.defer = true;
		script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;

		document.body.appendChild(script);
	})
}

export function load_places(city, query) {
	let place = city
	let interest = query
	var apiURL = `https://api.foursquare.com/v2/venues/search?client_id=OAJ2HTHSU3WUSS4EXRZYVLZAHF4ALQNKPUCM0MQ0IIZYPEVI&client_secret=XP5QLAM0PPKAHZQT4CIGCPUBSW0QG1ZB5U4A2R4C5GIK1E0J&v=20180323&limit=20&near=${place}&query=${interest}`
	return fetch(apiURL).then((res) => res.json())
}
