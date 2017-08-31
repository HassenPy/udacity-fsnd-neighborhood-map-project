import ko from "knockout";
import {
  gmap,
  filters,
  menuState,
  statusState,
  locationsListState,
  locationInfoState,
  locationInfo
} from './models';
import {updateMarkers, showPlace, hidePlace} from './service';
import {toggleFilter, filterLocations, searchLocations, getMarker} from './helpers';

let LocationVM = function() {
  let self = this;

  self.menuState = menuState;
  self.statusState = statusState;
  self.locationsListState = locationsListState;
  self.locationInfoState = locationInfoState;

  self.locationInfo = locationInfo;
  self.locations = ko.observableArray(gmap.locations);
  self.activeLocations = ko.observableArray(gmap.locations);

  // Adding an initial active state to the filter.
  self.filters = ko.observableArray(
    filters.map(filter => ({...filter, active: false}))
  );
  self.activeFilters = ko.observableArray();

  self.searchTerm = ko.observable('');

  self.toggleMenu = function() {
    self.menuState(!self.menuState());
  };

  self.toggleFilter = function(filter) {
    // Get the index of the clicked filter
    const filterIndex = self.activeFilters.indexOf(filter.text);
    let currentFilter = self.activeFilters()[filterIndex] || filter;
    toggleFilter(filter);

    if (filterIndex === -1) {
      self.activeFilters.push(filter.text);
    } else {
      self.activeFilters.remove(filter.text);
    }

    // set the filtered locations and update markers.
    const newLocations = filterLocations(self.locations(), self.activeFilters());
    self.activeLocations(newLocations);
    updateMarkers(self.activeLocations);
  };

  // check if a filter is active.
  self.isActive = function(text) {
    return (true
      ? self.activeFilters.indexOf(text) !== -1
      : false);
  };

  self.search = function() {
    if (self.searchTerm().length === 0) {
      const newLocations = filterLocations(self.locations(), self.activeFilters());
      self.activeLocations(newLocations);
    } else {
      // we won't search activeLocation since its being updated with every search,
      // so using the full filtered locations will make it able to display locations when
      // a user is removing characters from the searchTerm, else the activeLocations list will
      // keep shrinking until the user removes the full searchTerm keyword.
      let newLocations = filterLocations(self.locations(), self.activeFilters());
      newLocations = searchLocations(newLocations, self.searchTerm());
      self.activeLocations(newLocations);
    }
    updateMarkers(self.activeLocations);
  };

  self.showPlace = function(location) {
    const marker = getMarker(location, gmap.markers);
    const fn = showPlace.bind(marker);
    fn();
  };
  self.hidePlace = function() {
    // not making hidePlace an explicit function for this viewmodel since its getting used
    // by other functions outside the viewmodel.
    hidePlace();
  };
};

module.exports = {
  LocationVM: LocationVM
};
