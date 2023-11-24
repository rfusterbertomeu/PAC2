//import {Loader, LoaderOptions} from 'google-maps';
const {Loader} = require('google-maps');
const options = {"language":"es","region":"ES"};
const loader = new Loader('AIzaSyDoXC9ryiZUDjDpIrfDOegtTapMpYxPaNM', options);
 
loader.load().then(function (google) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
    });
});