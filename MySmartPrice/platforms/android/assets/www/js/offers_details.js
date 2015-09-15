/* ------------ Develop By Anuj Harshe ------------ */
var offer;
$(function(){
	offer = JSON.parse(sessionStorage.selOffer);
	document.addEventListener("deviceready",deviceready1,false);
});
function deviceready1(){
	$("#t_text span").html("Offer Details");
	setEvents();	
	displayOffer();
}
/*--------------- ON BACK BUTTON -------------*/
function onBackClick(){ location.href="offers.html"; }

/*--------------- Display Offers -------------*/
function displayOffer(){
	$("#storename span").html(offer.STORE);
	$("#productname span").html("Product :"+offer.PRODUCT);
	$("#desc span").html("Offer : "+offer.DESCRIPTION);
	$("#addr span").html("Address : "+offer.ADDRESS);
	//$("#link span").html("GoTo Deal : "+offer.LINK);
}
function onLink(){
	 window.open(offer.LINK,'_blank','location=no','closebuttoncaption=back');
}
/*---------------- SET CLICK EVENT -----------*/
function setEvents(){
	var showdirection = document.getElementById('showdirection');
	showdirection.addEventListener("touchstart",function(){$('#showdirection').transition({scale:1.1},100);});
	showdirection.addEventListener("touchend",function(){$('#showdirection').transition({scale:1.0},onShowDirection);});
	
	var share = document.getElementById('share');
	share.addEventListener("touchstart",function(){$('#share').transition({scale:1.1},100);});
	share.addEventListener("touchend",function(){$('#share').transition({scale:1.0},onShare);});
	
	var gotostore = document.getElementById('gotostore');
	gotostore.addEventListener("touchstart",function(){$('#gotostore').transition({scale:1.1},100);});
	gotostore.addEventListener("touchend",function(){$('#gotostore').transition({scale:1.0},onGoToStore);});
}

/*--------------- onShowDirection -------------*/
function onShowDirection(){
	location.href="show_directions.html";
}
/*--------------- On GO TO STORE  -------------*/
function onGoToStore(){
	window.open(offer.LINK,'_blank','location=no','closebuttoncaption=back');
}
/*--------------- On SHARE  -------------*/
function onShare(){
	window.plugins.socialsharing.share(offer.STORE+"-"+offer.DESCRIPTION, null, null, offer.LINK);
}
var map;
function initMap() {
	var lat = sessionStorage.latval; lat = lat.substring(0,7); lat = parseFloat(lat);
	var lng = sessionStorage.longval; lng = lng.substring(0,7); lng = parseFloat(lng);
	
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: lng},
    zoom: 15
  });
  
  var marker1 = new google.maps.Marker({
	  position: {lat: lat, lng: lng},
	  map: map,
	  title: offer.STORE
  });

}