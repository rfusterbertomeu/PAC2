import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
    apiKey: "AIzaSyDoXC9ryiZUDjDpIrfDOegtTapMpYxPaNM",
    version:"weekly",
    libraries:["places"],
    language:"es",
    region:"ES"
});
const mapOptions = {
    center: { 
        lat: 38.92338, 
        lng: -0.11310 
    },
    zoom: 4
}

loader.loadCallback(e => {
    if (e) {
      console.log(e);
    } else {
      console.log( new google.maps.Map(document.getElementById("map"), mapOptions));  
      new google.maps.Map(document.getElementById("map"), mapOptions);
    }
  });