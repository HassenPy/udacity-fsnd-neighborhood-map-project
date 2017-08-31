import ko from "knockout";

import {LocationVM} from "./viewmodels";
import {initDOM} from "./service";


let VM = new LocationVM();
ko.options.useOnlyNativeEvents = true;

function googleError() {
  alert("Couldn't load the goole map, make sure you're using a stable internet connection!");
}

window.callMe = initDOM;
window.googleError = googleError;

document.addEventListener('DOMContentLoaded', function(){
  ko.applyBindings(VM);
}, false);


module.exports = {
  VM: VM
};
