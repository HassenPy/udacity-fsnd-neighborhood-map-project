import ko from 'knockout';

const icon_base = '/udacity-fsnd-neighborhood-map-project/dist/assets/icons/';

let menuState = ko.observable(false);
let statusState = ko.observable(false);
let locationsListState = ko.observable(true);

let locationInfoState = ko.observable(false);

let locationInfo = ko.observable();

let gmap = {
  map: null,
  markers: [],
  activeMarker: null,
  locations: [
    {
      lat: 33.808605,
      lng: 10.990073,
      title: 'Pizza A L\'italienne بيتزا الذوق الرفيع',
      type: 'restaurant',
      filter: 'restaurant'
    }, {
      lat: 33.784321,
      lng: 11.057903,
      title: 'Essaguia beach',
      type: 'point_of_interest',
      filter: 'beach'
    }, {
      lat: 33.724279,
      lng: 10.975052,
      title: 'Ras el Kastil (Kastil stronghold)',
      type: 'monument',
      filter: 'monument'
    }, {
      lat: 33.879801,
      lng: 10.862366,
      title: 'Djerbian cultural heritage museum',
      type: 'museum',
      filter: 'museum'
    }, {
      lat: 33.880294,
      lng: 10.856733,
      title: 'Pappagallo italian restaurant',
      type: 'restaurant',
      filter: 'restaurant'
    }, {
      lat: 33.814457,
      lng: 11.054762,
      title: 'Yéti beach',
      type: 'point_of_interest',
      filter: 'beach'
    }, {
      lat: 33.732550,
      lng: 10.865716,
      title: 'Guellala Museum',
      type: 'museum',
      filter: 'museum'
    }, {
      lat: 33.632006,
      lng: 10.909170,
      title: 'Borj El Akrab',
      type: 'monument',
      filter: 'monument'
    }, {
      lat: 33.819763,
      lng: 11.045033,
      title: 'Lalla Hadria Museum',
      type: 'museum',
      filter: 'museum'
    }, {
      lat: 33.821267,
      lng: 10.854319,
      title: 'Djerbahood',
      type: 'museum',
      filter: 'museum'
    }
  ]
};

const icons = {
  beach: icon_base + 'beach.svg',
  restaurant: icon_base + 'lunch.svg',
  monument: icon_base + 'monument.svg',
  museum: icon_base + 'museum.svg'
};

const filters = [
  {
    icon: icons.beach,
    text: 'beach',
    types: ['beach']
  }, {
    icon: icons.restaurant,
    text: 'restaurant',
    types: ['restaurant']
  }, {
    icon: icons.monument,
    text: 'monument',
    types: ['Fortress', 'monument']
  }, {
    icon: icons.museum,
    text: 'museum',
    types: ['museum', 'point_of_interest']
  }
];

module.exports = {
  gmap: gmap,
  icons: icons,
  menuState: menuState,
  filters: filters,
  statusState: statusState,
  locationsListState: locationsListState,
  locationInfo: locationInfo,
  locationInfoState: locationInfoState
};
