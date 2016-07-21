// googleMap 
function initialize() {
  var latlng = new google.maps.LatLng(35.681, 139.766);
  var mapOptions = {
    zoom: 15,
    center: latlng
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({position: latlng, title: 'Stationary SAMPLE', map: map});

  marker.setMap(map);  
}

google.maps.event.addDomListener(window, 'load', initialize);

