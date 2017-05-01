var locations = []

///////////////////////////////////////////////

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 37.09024, lng: -95.712891}
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'X';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var image = 'https://maps.gstatic.com/mapfiles/ms2/micons/marina.png';
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      icon: image
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

///////////////////////////////////////////////////
/*
function geocode(){
loc =  data.location
//lat/lon info from google
var queryGeoURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&key=AIzaSyCKTgmslJgWpFoDM3m2EFgCNv043keJJTA"
console.log(queryGeoURL)

$.ajax({url: queryGeoURL, method: 'GET'})
      //create object
      .done(function(geoResponse) {

console.log(geoResponse)

var lat = geoResponse.results[0].geometry.location.lat;
var lng = geoResponse.results[0].geometry.location.lng;

var latlng = {lat: lat, lng: lng}
console.log("RESULT")
console.log(latlng);

});

}*/

// When the page loads, grab all of our locations
$.get("/api/all", function(data) {
  console.log(data)
  
  for (var i = 0; i < data.length; i++) {

    //geocode()
    
    loc =  data[i].location
    console.log(i + ": " + loc)
    //lat/lon info from google
    var queryGeoURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&key=AIzaSyCKTgmslJgWpFoDM3m2EFgCNv043keJJTA"
    console.log("where??" + queryGeoURL)
    $.ajax({url: queryGeoURL, method: 'GET'})
    
    .done(function(geoResponse) {
    console.log(geoResponse)
    var lat = geoResponse.results[0].geometry.location.lat;
    var lng = geoResponse.results[0].geometry.location.lng;
    var latlng = {lat: lat, lng: lng}
    console.log("RESULT")
    console.log(latlng);
    locations.push(latlng);
    console.log(locations)
    });
    

  }

  initMap()



});
