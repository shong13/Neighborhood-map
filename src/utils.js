export function load_google_maps() {
	return new Promise(function(resolve, reject) {
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