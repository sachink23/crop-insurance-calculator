function onLodFunction() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition);
    }
}

function savePosition(position) {
	var lattitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
  } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET","save.php?lat="+lattitude+"&long="+longitude,true);
  xmlhttp.send();
}
