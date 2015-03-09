geoIPs = {
  "ues": [40.773321, -73.955530],
  "uws": [40.771443,-73.982980],
  "chelsea": [40.746500,-74.001374],
  "westvillage": [],
  "eastvillage": [],
  "les": [],
  "flatiron": [],
  "brooklyn": []
};

ourMap = null;
mapInitialized = false;
oldSelection = '';

$(document).ready(function(){
  // Provide your access token
  L.mapbox.accessToken = 'pk.eyJ1IjoiYXZyZXMwMyIsImEiOiJzNWE3SDdZIn0.YQR58MWexEblFOztOGK0ig';
  // Create a map in the div #map
  // L.mapbox.map('map', 'avres03.lcm6deo9').setView([40.771443,-73.982980], 16);

  //  L.mapbox.map('ues-map', 'avres03.lcm6deo9').setView([40.773321,-73.955530], 16);

})


handleClick = function(element){
  console.log(geoIPs[element.id]);
  if(!mapInitialized) {
    ourMap = L.mapbox.map('map', 'avres03.lcm6deo9');
    mapInitialized = true;
  }
  ourMap.setView(geoIPs[element.id], 16);

  $('#' + oldSelection).removeClass('animated pulse infinite');
  $('#' + element.id).addClass('animated pulse infinite');
  oldSelection = element.id
}


// var zoom = 16;
// var center = [40.779165,-73.962928];
// var map = L.map('map').setView(center, zoom);
