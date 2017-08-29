import {gmap, icons} from './models';
import {toggleBounce} from './helpers';
import axios from 'axios';
let _ = require('lodash');


const initMap = function() {
  const midoun = {lat: 33.807279, lng: 10.991097};
  gmap.center = midoun;
  gmap.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: midoun,
    mapTypeId: 'satellite',
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
    },
  });

  gmap.locations = gmap.locations.map((location) => {
    let latLng = new google.maps.LatLng(location.lat, location.lng);
    let icon = {
      url: icons[location.filter],
      size: new google.maps.Size(48, 48),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    let marker = new google.maps.Marker({
      position: latLng,
      icon: icon
    });
    marker.setMap(gmap.map);
    marker.setAnimation(null);
    marker.addListener('click', toggleBounce);
    gmap.markers.push(marker);
    let newLocation = {...location, marker: marker};
    return newLocation;
  });
  gmap.places = new google.maps.places.PlacesService(gmap.map);
};


const updateMarkers = function(activeLocations, markers) {
  markers.find((marker) => {
    let found = false;
    activeLocations().find((location) => {
      // Find if location coords are equal to the marker coords.
      if (_.round(marker.position.lat(), 6) === location.lat && _.round(marker.position.lng(), 6) === location.lng){
        found = true;
        return;
      }
    });

    let newMarker = null;
    if (!found) {
      newMarker = marker.setMap(null);
      return;
    } else {
      newMarker = marker.setMap(gmap.map);
      return;
    }
  });
};


const getPlace = function(location, context) {
  const coords = new google.maps.LatLng(location.lat, location.lng);
  let service = new google.maps.places.PlacesService(gmap.map);

  service.nearbySearch({
    location: coords,
    type: [location.type],
    keywords: location.title,
    radius: 5,
    rankby: "distance"
  }, function(response){
    gmap.places.getDetails({
      placeId: response[0].place_id
    }, function(response){
      axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          origin: '*',
          action: 'query',
          titles: response.name,
          prop: 'extracts',
          inprop: 'url',
          exintro: 'explaintext',
          format: 'json'
        }
      })
        .then(function(wikiResponse){
          if (wikiResponse.data.query.pages['-1']) {
            response.summary = null;
            response.wikiLink = '';
            response.wikiText = '';
          } else {
            const pages = wikiResponse.data.query.pages;
            const page = pages[Object.keys(pages)[0]];
            response.summary = page.extract;
            response.wikiLink = 'https://en.wikipedia.org/?curid=' + page.pageid;
            response.wikiText = 'more on wikipedia';
          }

          let coords = {};
          coords.lat = _.round(response.geometry.location.lat(), 6);
          coords.lng = _.round(response.geometry.location.lng(), 6);
          response.coords = coords;

          context.locationProfile(response);
          context.requestStatus('');
        })
      .catch(function(response){
        context.requestStatus('an error has occured while fetching the location info!');
      });
    });
  });
};


const zoomMarker = function(lat, lng, marker) {
  const latLng = new google.maps.LatLng(lat, lng);
  const clickEvent = toggleBounce.bind(marker);
  clickEvent();
  gmap.map.setZoom(17);
  gmap.map.panTo(latLng);
}
const resetZoom = function(marker) {
  const clickEvent = toggleBounce.bind(marker);
  clickEvent();
  gmap.map.setZoom(12);
  gmap.map.panTo(gmap.center);

}

module.exports = {
  initMap: initMap,
  updateMarkers: updateMarkers,
  getPlace: getPlace,
  zoomMarker: zoomMarker,
  resetZoom: resetZoom
};
