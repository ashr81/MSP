/* ------------ Develop By Anuj Harshe ------------ */
$(function(){		
	$("#hspace").hide();
	document.addEventListener("deviceready",deviceready1,false);
});
function deviceready1(){
	getLocation();
	//getLocName(); // uncomment for emulator check
	
	setEvents();	
}
/*----------- ANIMATE MENU -------------------*/
var isMenu=false;
function animateMenu(){
	$("#upper,#lower").show();
	if(isMenu === false){
		isMenu = true;
		$("#upper").animate({left:"1%"},700);
		$("#lower").animate({left:"1%"},700);
	}else{
		var callback = function(){ $("#upper,#lower").hide(); };
		isMenu = false;
		$("#upper").animate({left:"-100%"},700,callback);
		$("#lower").animate({left:"100%"},700,callback);
	}
	
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
	
	var u1 = document.getElementById('u1');
	u1.addEventListener("touchstart",function(){$('#u1').transition({scale:1.1},100);});
	u1.addEventListener("touchend",function(){$('#u1').transition({scale:1.0},u1m);});
	
	var u2 = document.getElementById('u2');
	u2.addEventListener("touchstart",function(){$('#u2').transition({scale:1.1},100);});
	u2.addEventListener("touchend",function(){$('#u2').transition({scale:1.0},u2m);});
	
	var u3 = document.getElementById('u3');
	u3.addEventListener("touchstart",function(){$('#u3').transition({scale:1.1},100);});
	u3.addEventListener("touchend",function(){$('#u3').transition({scale:1.0},u3m);});
	
	var l1 = document.getElementById('l1');
	l1.addEventListener("touchstart",function(){$('#l1').transition({scale:1.1},100);});
	l1.addEventListener("touchend",function(){$('#l1').transition({scale:1.0},l1m);});
	
	var l2 = document.getElementById('l2');
	l2.addEventListener("touchstart",function(){$('#l2').transition({scale:1.1},100);});
	l2.addEventListener("touchend",function(){$('#l2').transition({scale:1.0},l2m);});
	
	var l3 = document.getElementById('l3');
	l3.addEventListener("touchstart",function(){$('#l3').transition({scale:1.1},100);});
	l3.addEventListener("touchend",function(){$('#l3').transition({scale:1.0},l3m);});
}
/*------------------ ON LOGIN -----------------*/
function onLogin(){ location.href="offers.html"; }

/*-------------------- ON MENU ------------------*/
function u1m(){ location.href = "atms.html"; }
function u2m(){ location.href = "stores.html"; }
function u3m(){ location.href = "shopping.html"; }

function l1m(){ location.href = "#"; }
function l2m(){ window.open("http://www.mysmartprice.com/",'_blank','location=no','closebuttoncaption=back'); }
function l3m(){ window.open("https://www.facebook.com/mysmartprice",'_blank','location=no','closebuttoncaption=back'); }

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



