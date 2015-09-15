function onBackClick(){ location.href="offers_details.html"; }
var offer = JSON.parse(sessionStorage.selOffer);

$(function(){
	document.addEventListener("deviceready",deviceready1,false);
});
function deviceready1(){
	$("#t_text span").html("Directions");
	$("#fromstore").html("<strong>From : </strong>"+offer.ADDRESS);
	$("#tostore").html("<strong>To : </strong>"+sessionStorage.address);
}

var origin,dest;
function initMap() {
	var afterDec = 10;
	var slat = offer.LATITUDE; slat = slat.substring(0,afterDec); slat = parseFloat(slat);
	var slng = offer.LONGITUDE; slng = slng.substring(0,afterDec); slng = parseFloat(slng);

	/* current location */
	var clat = sessionStorage.latval; clat = clat.substring(0,afterDec); clat = parseFloat(clat);
	var clng = sessionStorage.longval; clng = clng.substring(0,afterDec); clng = parseFloat(clng);
	
	origin = clat+","+clng;   dest = slat+","+slng;
	//origin = "17.4314909,78.4467763";  dest = "17.4354162,78.3827308";
	
	  var directionsService = new google.maps.DirectionsService;
	  var directionsDisplay = new google.maps.DirectionsRenderer;
	  var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 7,
	    center: {lat: clat, lng: clng}
	  });
	  directionsDisplay.setMap(map);
	  calculateAndDisplayRoute(directionsService,directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	  directionsService.route({
	    origin: origin,
	    destination: dest,
	    travelMode: google.maps.TravelMode.DRIVING
	  }, function(response, status) {
	    if (status === google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	    } else {
	      window.alert('Directions request failed due to ' + status);
	    }
	  });
}