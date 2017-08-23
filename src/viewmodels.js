import ko from "knockout";

import {gmap, favorites} from './models';


let InitMapVM = function() {
  const midoun = {lat: 33.807279, lng: 10.991097};

  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: midoun,
    mapTypeId: 'satellite',
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_CENTER
    },
  });

  // set the map model.
  gmap(map);
};


let MarkerVM = function() {
  this.favorites = ko.observableArray(favorites);

  this.favorites().forEach((coords) => {
    let latLng = new google.maps.LatLng(coords.lat, coords.lng);
    let marker = new google.maps.Marker({
      position: latLng,
    });
    marker.setMap(gmap());
    marker.addListener('click', toggleBounce);
  });
};

function toggleBounce() {
  if (this.getAnimation() !== null) {
    this.setAnimation(null);
  } else {
    this.setAnimation(google.maps.Animation.BOUNCE);
  }
}

module.exports = {
  InitMapVM: InitMapVM,
  MarkerVM: MarkerVM
};
