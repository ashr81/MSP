/* ------------ Develop By Anuj Harshe ------------ */
$(function(){		
	$("#hspace").hide();
	document.addEventListener("deviceready",deviceready1,false);
});
function deviceready1(){
	getLocation();
	getLocName(); // uncomment for emulator check
	setEvents();	
}
/*--------------- ON BACK BUTTON -------------*/
function onBackClick(){ exitApp(); }

/*---------------- EXIT APP --------------*/
function exitApp(){
	navigator.notification.confirm(
		'Are You Sure\nDo You Want To Exit?',
	    function(index){
			if(index =="1"){
				sessionStorage.clear();
	    		navigator.app.exitApp();
	        }	
	    }, 'MySmartPrice',  'Yes,No'
	);
}

/*---------------- SET CLICK EVENT -----------*/
function setEvents(){
	var login = document.getElementById('login');
	login.addEventListener("touchstart",function(){$('#login').transition({scale:1.1},100);});
	login.addEventListener("touchend",function(){$('#login').transition({scale:1.0},onLogin);});	
}
/*------------------ ON LOGIN -----------------*/
function onLogin(){
	location.href="offers.html";
}

/* ------------------- GET LOCATION ----------------------*/
function getLocation(){
	var onSuccess = function(position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;
		getLocName(lat,long);
	};
	function onError(error) { //alert(error.code+" "+error.message);
		if(error.code==2){
			alert("Please enable your location from mobile Settings");
		}else{ alert("Error : "+error.message); }
		window.location.href="index.html";
	}
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
/*---------------- GET ADDRESS ---------------------------*/
function getLocName(latval,longval){
	if(latval == undefined && longval == undefined){ latval="17.450494499"; longval="78.3856697"; }
	
	sessionStorage.latval = latval;
	sessionStorage.longval = longval;
	
	var url = "https://maps.googleapis.com/maps/api/geocode/json";
	$.ajax({
		type : "GET",
		url : url,
		cache: false,
		data:{
			latlng : latval+","+longval,
			location_type : "ROOFTOP",
			result_type : "street_address",
			key : "AIzaSyARlNZvSWv1oN-aGN_wM-KKCkOV0vep2qs"
		},
		success : function(response) {
			var fulladd = response.results[0].formatted_address;
			var areaname = getAreaName(response,"sublocality_level_1");
			sessionStorage.address = fulladd;
			sessionStorage.areaname = areaname;
		},
		error : function(e) { alert("Error to get Location");  location.href= "index.html"; }
	});
}

// type- sublocality_level_1
function getAreaName(result,type){
	var len = result.results[0].address_components.length;
	var obj = result.results[0].address_components;
	for(var i=0;i<len;i++){ if(obj[i].types[0] == type){ return obj[i].long_name; }} return;
}



