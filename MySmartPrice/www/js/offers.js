/* ------------ Develop By Anuj Harshe ------------ */
$(function(){
	document.addEventListener("deviceready",deviceready1,false);
});
function deviceready1(){
	$("#t_text span").html("Offers Near Me");
	getAreas();
	getOffers(sessionStorage.areaname);
	//alert(sessionStorage.latval);
	//alert(sessionStorage.longval);
	//alert(sessionStorage.address);
	//alert(sessionStorage.areaname);
}
function getAreas(){
	startLoading();
	var url = commonurl + "getAreas";
	$.ajax({
		type : "GET",
		url : url,
		cache: false,
		data : {
			
		},
		success : function(response) {
			stopLoading();
			var result = JSON.parse(response);
			if(result.data[0].result != "true"){ return false; }
			var len = result.data.length;
			for(var i=0;i<len;i++){
				$("#areas").append('<option>'+result.data[i].AREA+'</option>');
			}
		},
		error : function(e) { stopLoading();  alert("Error connecting to server"); }
	});	
	
}

/*--------------- ON SELECT AREA ------------------*/
function onSelArea(){
	var areaname = $("#areas").val();
	if(areaname=="no"){ areaname = sessionStorage.areaname; }
	getOffers(areaname);
}

/*--------------- ON BACK BUTTON -------------*/
function onBackClick(){ location.href="index.html"; }

var result;
function getOffers(areaname){
	startLoading();
	var url = commonurl + "getStoreData";
	$.ajax({
		type : "GET",
		url : url,
		cache: false,
		data : {
			area: areaname
		},
		success : function(response) {
			stopLoading();
			result = JSON.parse(response);
			displayOffers();
		},
		error : function(e) { stopLoading();  alert("Error connecting to server"); }
	});			
}

/*----------- DISPLAY OFFERS ----------------*/
function displayOffers(){
	$(".offer").remove(); 
	var len = result.data.length;
	for(var i=0;i<len;i++){
		$("#appenddiv").before(
			'<div class="offer" onclick="onSelectOffer('+i+')">'
				+'<div class="brand m"><span>'+result.data[i].STORE+'</span></div>'
				+'<div class="product es"><span>'+result.data[i].PRODUCT+'</span></div>'
				+'<div class="desc es"><span>'+result.data[i].DESCRIPTION+'</span></div>'
			+'</div>'	
		);
	}
	$(".m").css("font-size",(dw+dh)/60+"px"); 
	$(".es").css("font-size",(dw+dh)/70+"px");
}

/*-------------- ON OFFER SELECT ---------------*/
function onSelectOffer(cid){
	sessionStorage.selOffer = JSON.stringify(result.data[cid]);
	window.location.href = "offers_details.html";
}



