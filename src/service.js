import {gmap} from './models';
import {toggleBounce} from './helpers';
var _ = require('lodash');

const initMap = function() {
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
    gmap.markers.push(marker);
  });
};

const getPlace = function(location) {
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

const updateMarkers = function(activeLocations, markers) {
  markers.map((marker) => {
    let found = false;
    activeLocations().find((location) => {
      // Find if location coords are equal to the marker coords.
      if (_.round(marker.position.lat(), 6) === location.lat && _.round(marker.position.lng(), 6) === location.lng){
        found = true;
      }
    });

    let newMarker = null;
    if (!found) newMarker = marker.setMap(null);
    if (found) newMarker = marker.setMap(gmap.map);
    return newMarker;
  });
};

module.exports = {
  initMap: initMap,
  getPlace: getPlace,
  updateMarkers: updateMarkers
};
