let initMap = function() {
  const midoun = {lat: 33.807279, lng: 10.991097};
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: midoun
  });
  const marker = new google.maps.Marker({
    position: midoun,
    map: map
  });
  return map;
};

module.exports = {
  initMap: initMap,
};
