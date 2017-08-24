import ko from "knockout";

import {LocationVM} from "./viewmodels";
import {InitMap} from "./service";

InitMap();

ko.options.useOnlyNativeEvents = true;
ko.applyBindings(new LocationVM());
