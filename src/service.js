import {gmap} from './models';
import {toggleBounce} from './helpers';

let InitMap = function() {
  const midoun = {lat: 33.807279, lng: 10.991097};

  gmap.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: midoun,
    mapTypeId: 'satellite',
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
    },
  });

  gmap.locations.forEach((coords) => {
    let latLng = new google.maps.LatLng(coords.lat, coords.lng);
    let marker = new google.maps.Marker({
      position: latLng,
    });
    marker.setMap(gmap.map);
    marker.addListener('click', toggleBounce);
  });
};

let getPlace = function(location) {
  const coords = new google.maps.LatLng(location.lat, location.lng);
  let service = new google.maps.places.PlacesService(gmap.map);

  service.nearbySearch({
    location: coords,
    radius: '1',
    type: [location.type]
  }, function(response){
    console.log(response);
  });
};

module.exports = {
  InitMap: InitMap,
  getPlace: getPlace
};
