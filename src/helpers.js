const animateMarker = function(marker, gmap) {
  marker.setAnimation(google.maps.Animation.BOUNCE);
  gmap.map.panTo(marker.position);
  gmap.map.setZoom(16);
  gmap.activeMarker = marker;
};
const deanimateMarker = function(marker, gmap) {
  marker.setAnimation(null);
  gmap.map.panTo(gmap.center);
  gmap.map.setZoom(12);
  gmap.activeMarker = marker;
};

const toggleFilter = (filter) => ({
  ...filter,
  active: !filter.active
});

const filterLocations = (locations, filters) => {
  if (filters.length == 0)
    return locations;

  const newLocations = locations.filter(location => filters.indexOf(location.filter) !== -1);
  return newLocations;
}

const searchLocations = (locations, searchTerm) => {
  const newLocations = locations.filter(location => location.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  return newLocations;
}

module.exports = {
  animateMarker: animateMarker,
  deanimateMarker: deanimateMarker,
  toggleFilter: toggleFilter,
  filterLocations: filterLocations,
  searchLocations: searchLocations
};
