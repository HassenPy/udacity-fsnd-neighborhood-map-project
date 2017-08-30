/**
 * update the active state on a filter.
 * @param {Object} filter - the filter to update its active state.
 */
const toggleFilter = (filter) => ({...filter, active: !filter.active});

/**
 * add an active state the filter.
 * @param {Array} locations - all the locations unfiltred.
 * @param {Array} filters - the filters to apply.
 */
const filterLocations = (locations, filters) => {
  if (filters.length == 0)
    return locations;

  // Check if the location.filter value is present the filters array.
  const newLocations = locations.filter(location => filters.indexOf(location.filter) !== -1);
  return newLocations;
}

/**
 * search a string in the given locations.
 * @param {Array} activeLocations - active locations to search.
 * @param {String} searchTerm - text to search.
 */
const searchLocations = (activeLocations, searchTerm) => {
  const newLocations = activeLocations.filter(location => location.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  return newLocations;
}

module.exports = {
  toggleFilter: toggleFilter,
  filterLocations: filterLocations,
  searchLocations: searchLocations
};
