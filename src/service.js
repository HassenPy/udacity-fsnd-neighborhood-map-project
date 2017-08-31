import {gmap, icons, menuState, statusState, locationsListState, locationInfoState, locationInfo} from './models';
import axios from 'axios';


const initDOM = function() {
  // Initialize the map with a center;
  const midoun = new google.maps.LatLng(33.807279, 10.991097);
  gmap.center = midoun;
  gmap.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: midoun,
    mapTypeId: 'satellite',
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    }
  });

  // create markers with custom icons for the locations.
  gmap.locations = gmap.locations.map((location) => {
    let latLng = new google.maps.LatLng(location.lat, location.lng);
    let icon = {
      url: icons[location.filter],
      size: new google.maps.Size(48, 48),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    let marker = new google.maps.Marker({position: latLng, icon: icon});
    marker.setMap(gmap.map);
    marker.setAnimation(null);
    marker.addListener('click', showPlace);
    // keep a location reference in the marker object, this was done to make
    // displaying the location info when clicking a marker on the map easier.
    marker.location = location;

    // keep a reference of all the markers.
    gmap.markers.push(marker);

    // keep a marker reference in the location object so that the ko view can
    // pass it along when calling showPlace.
    // NOTE: initially, the marker is unaware of the location object which holds the location info
    //       also the location object is unaware of the marker being created for it, storing a reference
    //       to each one is the only way i could think of.
    // the ... syntax is a ES7 spread which represents all the object attributes.
    let newLocation = {
      ...location,
      marker: marker
    };
    return newLocation;
  });
  // replace the locations object by the newly created one which holds the marker references.
  gmap.places = new google.maps.places.PlacesService(gmap.map);
};

const hidePlace = function() {
  // Hide the place info.
  locationInfoState(false);
  locationInfo(null);

  // Display locations list.
  locationsListState(true)
  statusState(false);

  deanimateMarker(gmap.activeMarker);
};

/**
 * Request a location info from both google maps places api and wikipedia.
 * this function is dynamically bound, it was made so that it can be used by both
 * the map and knockout.
 */
const showPlace = function() {
  const self = this;
  const coords = new google.maps.LatLng(this.location.lat, this.location.lng);
  const service = new google.maps.places.PlacesService(gmap.map);

  animateMarker(this);

  // initialize the place info with what we already have.
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
  }, function(response) {
    // google maps nearbySearch api returns an empty array when connection is lost.
    if (response.length === 0) {
      showStatus("connection lost, make sure you have a stable internet connection ...");
      return;
    }
    gmap.places.getDetails({
      placeId: response[0].place_id
    }, function(response) {
      // google maps getDetails api returns an empty array when connection is lost.
      if (typeof(response) === typeof([]) && response.length === 0) {
        showStatus("connection lost, make sure you have a stable internet connection ...");
        return;
      }
      // add the received info from google maps places api to the place object.
      console.log(response);
      place.address = response.formatted_address;
      place.types = response.types;
      place.photo = {};
      place.photo.url = response.photos[0].getUrl({maxWidth: 500});
      // regext matching thanks to https://stackoverflow.com/a/17488655/4724196
      let href = response.photos[0].html_attributions[0].match(/href="([^"]*)/)[1];;
      place.photo.attribution = href;

      // fetch info from wikipedia, using an 'extracts' prop to get just the summary of the article.
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
      }).then(function(wikiResponse) {
        place.summary = {};
        // wikipedia returns a pages with and id of -1 if there's no result.
        if (wikiResponse.data.query.pages['-1']) {
          place.summary.text = null;
          place.summary.attribution = '';
        } else {
          const pages = wikiResponse.data.query.pages;
          const page = pages[Object.keys(pages)[0]];
          place.summary.text = page.extract;
          place.summary.attribution = 'https://en.wikipedia.org/?curid=' + page.pageid;
        }

        // render the place object.
        renderPlace(place);
      }).catch(function(response) {
        showStatus("connection lost, make sure you have a stable internet connection ...");
      });
    });
  });
};

/**
 * renders a status message.
 * @param {string} message - message to show.
 */
const showStatus = function(message) {
  statusState(message);

  // display the status block.
  locationsListState(false);

  // show the navigation menu in case it was already hidden.
  menuState(true);
};

/**
 * renders the location.
 * @param {Object} place - an object that holds the place info.
 */
const renderPlace = function(place) {
  locationInfoState(true);
  statusState(false);
  locationInfo(place);
};


/**
 * updates the markers visibility based on the provided active locations,
 * this is used by the menu filters and search autocomplete.
 *
 * @param {Object} activeLocations - the active locations to filter against.
 */
const updateMarkers = function(activeLocations) {
  let found = false;
  gmap.markers.forEach((marker) => {
    found = activeLocations().find((location) => {
      // Find if location coords are equal to the marker coords.
      // uses the location reference in a marker.
      if (marker.location.lat === location.lat && marker.location.lng === location.lng) {
        return true;
      }
    });

    if (!found) {
      // hide the place block if its being shown.
      if (marker === gmap.activeMarker) {
        hidePlace();
      }
      marker.setMap(null);
    } else {
      // applying setMap on the active marker would disable its bounce animation.
      if (marker === gmap.activeMarker)
        return;
      marker.setMap(gmap.map);
    }
  });
};

/**
 * bounce and zoom on a marker.
 * @param {Object} marker - the marker to apply animation on.
 */
const animateMarker = function(marker) {
  marker.setAnimation(google.maps.Animation.BOUNCE);
  gmap.map.panTo(marker.position);
  gmap.map.setZoom(16);
  gmap.activeMarker = marker;
};

/**
 * remove bounce animation from marker and reset initial zoom.
 * @param {Object} marker - the marker to deanimate.
 */
const deanimateMarker = function(marker) {
  marker.setAnimation(null);
  gmap.map.panTo(gmap.center);
  gmap.map.setZoom(12);
  gmap.activeMarker = marker;
};

module.exports = {
  initDOM: initDOM,
  updateMarkers: updateMarkers,
  showPlace: showPlace,
  hidePlace: hidePlace
};
