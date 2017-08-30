const toggleBounce = function(marker, gmap) {
  if (gmap.activeMarker) gmap.activeMarker.setAnimation(null);

  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
  gmap.activeMarker = marker;
};

const toggleFilter = (filter) => ({...filter, active: !filter.active});

const filterLocations = (locations, filters) => {
  if (filters.length == 0) return locations;

  const newLocations = locations.filter(location => filters.indexOf(location.filter) !== -1);
  return newLocations;
}

const searchLocations = (locations, searchTerm) => {
  const newLocations = locations.filter(location => location.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  return newLocations;
}

module.exports = {
  toggleBounce: toggleBounce,
  toggleFilter: toggleFilter,
  filterLocations: filterLocations,
  searchLocations: searchLocations
};
