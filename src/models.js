import ko from "knockout";

let gmap = ko.observable();

let favorites = [
  {lat: 33.808605, lng: 10.990073, title: 'Pizza A L\'italienne بيتزا الذوق الرفيع', type: 'restaurant'},
  {lat: 33.787294, lng: 11.057749, title: 'Salle de sport Maison des Jeunes Midoun', type: 'gym'},
  {lat: 33.804022, lng: 10.991228, title: 'Essaguia beach', type: 'beach'},
  {lat: 33.886705, lng: 10.857537, title: 'Marina Djerba', type: 'beach'},
  {lat: 33.724279, lng: 10.975052, title: 'Ras el Kastil (Kastil stronghold)', type: 'culture'},
  {lat: 33.732550, lng: 10.865716, title: 'Guellala Museum', type: 'culture'}
];


module.exports = {
  gmap: gmap,
  favorites: favorites
};
