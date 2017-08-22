import ko from "knockout";

import {markerVM} from "./viewmodels";
import {initMap} from "./map";

let map = initMap();

ko.applyBindings(new markerVM());
