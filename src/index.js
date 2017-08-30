import ko from "knockout";

import {LocationVM} from "./viewmodels";
import {initDOM} from "./service";

initDOM();

ko.options.useOnlyNativeEvents = true;
ko.applyBindings(new LocationVM());
