//Implementation of map and venues from youtube tutorial https://www.youtube.com/watch?v=LvQe7xrUh7I

export function load_google_maps() {
	return new Promise((resolve, reject) => {
		window.resolveGoogleMapsPromise = () => {
			resolve(window.google);
			delete window.resolveGoogleMapsPromise;
		}

		const script = document.createElement("script");
		const API_KEY = "YOUR API KEY";
		script.async = true;
		script.defer = true;
		script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;

		document.body.appendChild(script);
	})
}

export function load_places(city, query) {
	let place = city
	let interest = query
	var apiURL = `https://api.foursquare.com/v2/venues/search?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&v=20180323&limit=20&near=${place}&query=${interest}`
	return fetch(apiURL).then((res) => res.json())
}
