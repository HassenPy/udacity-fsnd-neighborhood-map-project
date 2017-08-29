const toggleBounce = function() {
  console.log(this);
  if (this.getAnimation() !== null) {
    this.setAnimation(null);
  } else {
    this.setAnimation(google.maps.Animation.BOUNCE);
  }
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
