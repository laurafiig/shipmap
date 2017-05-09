var locations = []

///////////////////////////////////////////////

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 37.09024, lng: -95.712891}
  });

  var labels = 'X';

  var image = 'https://maps.gstatic.com/mapfiles/ms2/micons/marina.png';
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      icon: image
    });
  });

  var markerCluster = new MarkerClusterer(map, markers,
  {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}

///////////////////////////////////////////////////

$.get("/api/all", function(data) {
  //console.log(data)

  for (var i = 0; i < data.length; i++) {

    loc = data[i].location
    console.log(i + ": " + loc)
    
    var queryGeoURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+loc+"&key=AIzaSyCKTgmslJgWpFoDM3m2EFgCNv043keJJTA"
    console.log("where??" + queryGeoURL)

    $.ajax({url: queryGeoURL, method: 'GET'})
    .then(function(geoResponse) {

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
  
}).then(function(){
  
  initMap()

})
