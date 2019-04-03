(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(14),n(1)),l=n(2),s=n(4),u=n(3),d=n(5);n(16);var p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.places,n=t.name,a=t.venue,i="".concat(a.location.address?a.location.address:""),r="".concat(a.location.city?a.location.city:"",", \n\t\t\t\t\t\t").concat(a.location.state?a.location.state:""," \n\t\t\t\t\t\t").concat(a.location.postalCode?a.location.postalCode:"");return o.a.createElement("div",{tabIndex:"0",className:"venueInfo",onClick:function(){return e.props.handlePlaceClick(e.props.places)},onKeyPress:function(t){return e.props.handlePlaceKey(e.props.places,t)}},o.a.createElement("h2",{className:"venueName"},n||""),o.a.createElement("p",null,i," ",o.a.createElement("br",null)," ",r))}}]),t}(a.Component),m=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).clickHandler=function(){var e=document.querySelector(".places");"hidden"===e.style.visibility?(e.style.visibility="visible",e.focus()):e.style.visibility="hidden"},n.keyHandler=function(e){13===e.keyCode&&n.clickHandler()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{id:"navbar"},o.a.createElement("button",{className:"sideBarToggle",onKeyPress:function(t){return e.keyHandler},onClick:this.clickHandler}," Side Bar "),o.a.createElement("h1",{className:"title"},"Neighborhood Map: ",this.props.city))}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={places:[],city:"San Luis Obispo",interest:"restaurant",query:"",filteredPlaces:[],map:""},n.handlePlaceClick=function(e){var t=n.state.places.find(function(t){return t.id===e.id});null!==t.getAnimation()?(t.setAnimation(null),t.info.close()):(t.setAnimation(window.google.maps.Animation.BOUNCE),t.info.open(window.google.maps.Map,t)),console.log(t)},n.handlePlaceKey=function(e,t){if("Enter"===t.key){var a=n.state.places.find(function(t){return t.id===e.id});null!==a.getAnimation()?(a.setAnimation(null),a.info.close()):(a.setAnimation(window.google.maps.Animation.BOUNCE),a.info.open(window.google.maps.Map,a))}},n.queryChange=function(e){n.setState({query:e},n.filterList)},n.filterList=function(){var e=[];n.state.places.forEach(function(t){t.setMap(null),t.name.toLowerCase().includes(n.state.query.toLowerCase())&&e.push(t)}),e.forEach(function(e){e.setMap(n.state.map)}),n.setState({filteredPlaces:e})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new Promise(function(e,t){window.resolveGoogleMapsPromise=function(){e(window.google),delete window.resolveGoogleMapsPromise};var n=document.createElement("script");n.async=!0,n.defer=!0,n.src="https://maps.googleapis.com/maps/api/js?libraries=places&key=".concat("YOUR API KEY","&callback=resolveGoogleMapsPromise"),document.body.appendChild(n)}),n=function(e,t){var n=t,a="https://api.foursquare.com/v2/venues/search?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&v=20180323&limit=20&near=".concat(e,"&query=").concat(n);return fetch(a).then(function(e){return e.json()})}(this.state.city,this.state.interest);Promise.all([t,n]).then(function(t){var n=t[0],a=t[1].response.venues;e.google=n,e.markers=[],e.map=new n.maps.Map(document.getElementById("map"),{zoom:13,scrollwheel:!0,center:{lat:a[0].location.lat,lng:a[0].location.lng}}),e.setState({map:e.map}),a.forEach(function(t){var a=new n.maps.Marker({position:{lat:t.location.lat,lng:t.location.lng},map:e.map,venue:t,id:t.id,name:t.name,animation:n.maps.Animation.DROP}),o=new n.maps.InfoWindow({content:"".concat(t.name," <br/> ").concat(t.location.address?t.location.address:"Address unavailable")});a.info=o,a.addListener("click",function(){null!==a.getAnimation()?(a.setAnimation(null),a.info.close()):(a.setAnimation(n.maps.Animation.BOUNCE),a.info.open(e.map,a))}),e.markers.push(a)}),e.setState({places:e.markers,filteredPlaces:e.markers})}).catch(function(e){window.alert("Sorry, something went wrong! Map cannot load")})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m,{city:this.state.city,interest:this.state.interest}),o.a.createElement("section",{tabIndex:"-1",className:"places",style:{visibility:"hidden"}},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"filterByName",className:"filterTitle"},"Filter by Name"),o.a.createElement("input",{"aria-label":"Filter",id:"placesFilter",type:"text",placeholder:"Restaurant Name",value:this.state.query,onChange:function(t){return e.queryChange(t.target.value)}})),this.state.filteredPlaces.map(function(t){return o.a.createElement(p,{key:t.venue.id,places:t,handlePlaceClick:e.handlePlaceClick,handlePlaceKey:e.handlePlaceKey})})),o.a.createElement("main",null,o.a.createElement("div",{role:"application","aria-hidden":"true",id:"map"})))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={error:null,errorInfo:null},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?o.a.createElement("div",null,o.a.createElement("h2",null,"Something went wrong!"),o.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),o.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{tabIndex:"-1"},o.a.createElement(f,null,o.a.createElement(h,null)))}}]),t}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Neighborhood-map",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Neighborhood-map","/service-worker.js");g?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(t,e)})}}()},8:function(e,t,n){e.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.00593131.chunk.js.map