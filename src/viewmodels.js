import ko from "knockout";

import {favorites} from './models';


function markerVM() {
  this.favorites = favorites;

  this.favorites.forEach((coords) => {
    let latLng = new google.maps.LatLng(coords[1],coords[0]);
    console.log('adding coords');
    let marker = new google.maps.Marker({
      position: latLng,
    }).setMap(map);
  });
}

module.exports = {
  markerVM: markerVM,
};
