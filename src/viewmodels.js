import ko from "knockout";

import {gmap, filters} from './models';
import {getPlace, updateMarkers} from './service';
import {toggleFilter, filterLocations, searchLocations} from './helpers';


let LocationVM = function() {
  let self = this;

  self.locations = ko.observableArray(gmap.locations);
  self.activeLocations = ko.observableArray(gmap.locations);

  // Adding an active state value to the filter, its only used by the view and VM.
  self.filters = ko.observableArray(
    // ES7 object spread: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator
    filters.map((filter) => ({...filter, active: false}))
  );
  self.activeFilters = ko.observableArray();

  self.searchTerm = ko.observable('');

  self.toggleFilter = function(filter){
    // Get the index of the clicked filter
    const filterIndex = self.activeFilters.indexOf(filter.text);
    let currentFilter = self.activeFilters()[filterIndex] || filter;
    currentFilter = toggleFilter(filter);

    if ( filterIndex === -1) {
      self.activeFilters.push(filter.text);
    } else {
      self.activeFilters.remove(filter.text);
    }

    const newLocations = filterLocations(self.locations(), self.activeFilters());
    self.activeLocations(newLocations);
    updateMarkers(self.activeLocations, gmap.markers);
  };
  self.isActive = function(text) {
    return (true ? self.activeFilters.indexOf(text) !== -1: false);
  };

  self.search = ko.computed(function() {
    if (self.searchTerm().length === 0) {
      const newLocations = filterLocations(self.locations(), self.activeFilters());
      self.activeLocations(newLocations);
    } else {
      const newLocations = searchLocations(self.activeLocations(), self.searchTerm());
      self.activeLocations(newLocations);
    }
    updateMarkers(self.activeLocations, gmap.markers);
  });
  self.showPlace = function(location) {
    getPlace(location);
  };
  self.hidePlace = function() {
  };
};

module.exports = {
  LocationVM: LocationVM
};
