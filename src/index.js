import ko from "knockout";

import {LocationVM} from "./viewmodels";
import {initMap} from "./service";

initMap();

ko.options.useOnlyNativeEvents = true;
ko.applyBindings(new LocationVM());
