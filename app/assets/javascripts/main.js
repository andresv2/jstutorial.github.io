geoIPs = {
  "ues": [40.773321, -73.955530],
  "uws": [40.771443,-73.982980],
  "chelsea": [40.746500,-74.001374],
  "westvillage": [40.735781,-74.003571],
  "eastvillage": [40.726477,-73.981534],
  "les": [40.715033,-73.984272],
  "flatiron": [40.741061,-73.989699],
  "tribeca" : [40.720061,-74.009766],
  "brooklyn": [40.717439,-73.960699]
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

  $('#' + oldSelection).removeClass('animated flash');
  $('#' + element.id).addClass('animated flash');
  oldSelection = element.id
}


// var zoom = 16;
// var center = [40.779165,-73.962928];
// var map = L.map('map').setView(center, zoom);
