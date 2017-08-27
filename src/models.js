import ko from "knockout";

const icon_base = '/dist/assets/icons/';

let gmap = {
  map: null,
  markers: [],
  locations: [
    {
      lat: 33.808605,
      lng: 10.990073,
      title: 'Pizza A L\'italienne بيتزا الذوق الرفيع',
      type: 'restaurant',
      filter: 'restaurant'
    },
    {
      lat: 33.784321,
      lng: 11.057903,
      title: 'Essaguia beach',
      type: 'point_of_interest',
      filter: 'beach'
    },
    {
      lat: 33.724279,
      lng: 10.975052,
      title: 'Ras el Kastil (Kastil stronghold)',
      type: 'monument',
      filter: 'monument'
    },
    {
      lat: 33.879801,
      lng: 10.862366,
      title: 'Djerbian cultural heritage museum',
      type: 'museum',
      filter: 'museum'
    },
    {
      lat: 33.880294,
      lng: 10.856733,
      title: 'Pappagallo italian restaurant',
      type: 'restaurant',
      filter: 'restaurant'
    },
    {
      lat: 33.886705,
      lng: 10.857537,
      title: 'Marina Djerba',
      type: 'point_of_interest',
      filter: 'beach'
    },
    {
      lat: 33.732550,
      lng: 10.865716,
      title: 'Guellala Museum',
      type: 'museum',
      filter: 'museum'
    },
    {
      lat: 33.884048,
      lng: 10.860582,
      title: 'Ghazi Mustapha Tower',
      type: 'Fortress',
      filter: 'monument'
    },
    {
      lat: 33.819763,
      lng: 11.045033,
      title: 'Lalla Hadria Museum',
      type: 'museum',
      filter: 'monument'
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
  },
  {
    icon: icons.restaurant,
    text: 'restaurant',
    types: ['restaurant']
  },
  {
    icon: icons.monument,
    text: 'monument',
    types: ['Fortress', 'monument']
  },
  {
    icon: icons.museum,
    text: 'museum',
    types: ['museum', 'point_of_interest']
  }
];

module.exports = {
  gmap: gmap,
  filters: filters,
  icons: icons
};
