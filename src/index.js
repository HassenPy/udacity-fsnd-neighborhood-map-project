import ko from "knockout";

import {InitMapVM, MarkerVM} from "./viewmodels";

var VMs = {
  mapVM: new InitMapVM(),
  markerVM: new MarkerVM()
};

ko.applyBindings(VMs);
