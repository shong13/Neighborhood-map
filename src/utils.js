export function load_google_maps() {
	return new Promise((resolve, reject) => {
		window.resolveGoogleMapsPromise = () => {
			resolve(window.google);
			delete window.resolveGoogleMapsPromise;
		}

		const script = document.createElement("script");
		const API_KEY = 'AIzaSyD-dmBFJdqCcuK3-t5VKYtUi19LH8iSV3Q';
		script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
		script.async = true;
		document.body.appendChild(script);
	})
}

export function load_places(city, query) {
	let place = city
	let interest = query
	var apiURL = `https://api.foursquare.com/v2/venues/search?client_id=OAJ2HTHSU3WUSS4EXRZYVLZAHF4ALQNKPUCM0MQ0IIZYPEVI&client_secret=SEVVF2CXXOICNGRVQ41FOEYOJVENVSNEGK02YYYY4FMYAYBJ&v=20180323&limit=5&near=${place}&query=${interest}`
	return fetch(apiURL).then(res => res.json())  
}
