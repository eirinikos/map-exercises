function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 34.050, lng: -118.255},
    zoom: 8
  });
}

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapDiv = document.getElementById("map");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapDiv.style.width = '100%';
    mapDiv.style.height = '100%';
  } else {
    mapDiv.style.width = '600px';
    mapDiv.style.height = '800px';
  }
}