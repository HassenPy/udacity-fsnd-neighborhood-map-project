import {gmap, activeMarker, icons} from './models';
import {toggleBounce} from './helpers';
import axios from 'axios';
let _ = require('lodash');


const initDOM = function() {
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
    marker.location = location;
    marker.addListener('click', showPlace);
    gmap.markers.push(marker);
    let newLocation = {...location, marker: marker};
    return newLocation;
  });
  gmap.places = new google.maps.places.PlacesService(gmap.map);

  document.querySelector("#hidePlace").addEventListener("click", hidePlace);
};

const hidePlace = function() {
  const placeEl = document.querySelector(".place");
  const nav = document.querySelector("#locations");
  const status = document.querySelector(".status");
  placeEl.style.display = "none";
  nav.style.display = "block";
  status.style.display = "none";
  toggleBounce(activeMarker, gmap);
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


const showPlace = function() {
  const self = this;
  const coords = new google.maps.LatLng(this.location.lat, this.location.lng);
  const service = new google.maps.places.PlacesService(gmap.map);

  toggleBounce(this, gmap);

  let place = {};
  place.title = this.location.title;
  place.lat = this.location.lat;
  place.lng = this.location.lng;

  showStatus("Please wait while we fetch location info ...");
  service.nearbySearch({
    location: coords,
    type: [self.location.type],
    keywords: self.location.title,
    radius: 5,
    rankby: "distance"
  }, function(response){
    if (!response[0]) {
      showStatus("an error occured! make sure you're connected to the internet ...");
      return;
    }
    gmap.places.getDetails({
      placeId: response[0].place_id
    }, function(response){
      if (!response.formatted_address) {
        showStatus("an error occured! make sure you're connected to the internet ...");
        return;
      }
      place.address = response.formatted_address;
      place.types = response.types;
      place.photo = {};
      place.photo.url = response.photos[0].getUrl({maxWidth: 500});
      place.photo.attribution = response.photos[0].html_attributions[0];
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
          place.summary = {};
          if (wikiResponse.data.query.pages['-1']) {
            place.summary.text = null;
            place.summary.attribution = '';
          } else {
            const pages = wikiResponse.data.query.pages;
            const page = pages[Object.keys(pages)[0]];
            place.summary.text = page.extract;
            place.summary.attribution = 'https://en.wikipedia.org/?curid=' + page.pageid;
          }
          renderPlace(place);
        })
      .catch(function(response){
        showStatus("an error occured! make sure you're connected to the internet ...");
      });
    });
  });
};


const showStatus = function(message) {
  const el = document.querySelector(".status");
  const locations = document.querySelector("#locations");
  el.style.display = "block";
  el.innerText = message;
  locations.style.display = "none";
};

const renderPlace = function(place) {
  const placeEl = document.querySelector(".place");
  const nav = document.querySelector(".map-nav");
  const status = document.querySelector(".status");
  const btnShow = document.querySelector(".show");
  status.style.display = "none";
  placeEl.style.display = "block";
  nav.style.display = "block";
  btnShow.style.display = "none";

  placeEl.querySelector(".place-title").innerText = place.title;
  placeEl.querySelector(".place-address").innerText = place.address;
  placeEl.querySelector(".place-picture").src = place.photo.url;
  placeEl.querySelector(".place-picture__attribution").href = place.photo.attribution;

  let el = document.createElement("span");
  el.innerText = place.lat + ', ' + place.lng;
  placeEl.querySelector(".place-coords").innerHTML = "";
  placeEl.querySelector(".place-coords").appendChild(el);

  placeEl.querySelector(".place-types").innerHTML = "";
  place.types.forEach((type) => {
    let el = document.createElement("span");
    el.innerText = type;
    placeEl.querySelector(".place-types").appendChild(el);
  });
  if (place.summary.text) {
    placeEl.querySelector(".place-summary").style.display = "block";
    placeEl.querySelector(".place-summary p").innerHTML = place.summary.text;
    placeEl.querySelector(".place-summary__attribution").href = place.summary.attribution;
  } else {
    placeEl.querySelector(".place-summary").style.display = "none";
  }
};

module.exports = {
  initDOM: initDOM,
  updateMarkers: updateMarkers,
  showPlace: showPlace
};
