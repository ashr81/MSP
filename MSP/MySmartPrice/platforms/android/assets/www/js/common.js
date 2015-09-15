/* ------------ Develop By Anuj Harshe ------------ */
$(function(){
	//$("body").hide();
	document.addEventListener("deviceready",deviceready,false);
});

//var commonurl = "http://192.168.1.102:8080/SampleWS/hack/test/";
var commonurl = "http://192.168.1.18:8080/SampleWS/hack/test/";
var imgserverpath = "";
var uploadURL = "";

/*--------------- DEVICE READY ------------------*/
var dw,dh;
function deviceready(){
	//$("body").show(500);
	if(device.platform == "Android"){
		document.addEventListener("backbutton", onBackClick, false);
	}
	dh = window.innerHeight; dw = window.innerWidth;	
	createAssets();
	setSize();	
}

/*------------- CREATE ASSETS ------------------*/
function createAssets(){
	/*$('body').append('<div id="bg"><img src="img/bgb.png"></div>');*/
	$('body').append(
		'<div id="menu">'
			+'<div class="submenu m" onclick="submenu1()"><span>ATMs Near Me</span></div>'
			+'<div class="submenu m" onclick="submenu2()"><span>Stores Near Me</span></div>'
			+'<div class="submenu m" onclick="submenu3()"><span>Regular Shop</span></div>'
			+'<div class="submenu m" onclick="submenu4()"><span>Smart Shop</span></div>'
			+'<div class="submenu m" onclick="submenu5()"><span>Facebook</span></div>'
			+'<div class="submenu m" onclick="submenu6()"><span>Customer Support</span></div>'
		+'</div>');
	$('body').append('<div id="header" class="h_color">'
			+'<div id="hleft" onclick="location.href=\'index.html\'"><img src="img/logo.png"></div>'
			+'<div id="hmid"></div>'
			+'<div id="hright" onclick="toggleMenu()"><img src="img/menu.png"></div>'
		+'</div>');
	$('body').append('<div id="loader"><img src="img/loading.gif"></div>');
	$('#hspace').after(
		'<div id="title" class="o2_color l">'
			+'<div id="t_img" onclick="onBackClick()"><img src="img/backarrow1.png"></div>'
			+'<div id="t_text"><span></span></div>'
		+'</div>');
}
/*-------------- SUBMENU ------------------------*/
function submenu1(){ location.href="atms.html"; }
function submenu2(){  location.href="stores.html"; }
function submenu3(){  location.href="shopping.html"; }
function submenu4(){ window.open("http://www.mysmartprice.com/",'_blank','location=no','closebuttoncaption=back'); }
function submenu5(){  window.open("https://www.facebook.com/mysmartprice",'_blank','location=no','closebuttoncaption=back'); }
function submenu6(){  location.href="#"; }
/*-------------- SET SIZE -----------------------*/
function setSize(){
	var hh = (10*dh)/100;
	$("#header,#hspace").css("height",hh+"px");
//	$("#bg").css({"width":dw,"height":dh});
	$("#menu").css("height",(dh-hh)+'px');
	$("#menu").css("margin-top",hh+'px');
	//document.getElementById('header').style.height = hh+"px";  		
	//document.getElementById('hspace').style.height = hh+'px';
	//document.getElementById('menu').style.height = (dh-hh)+'px';
	//document.getElementById('menu').style.marginTop = hh+'px';
	$("input,select").css("height",((7*dh)/100)+"px");
	$(".bstyle").css("height",((7*dh)/100)+"px");
	//$(".eel").css("font-size",(dw+dh)/25+"px");
	//$(".el").css("font-size",(dw+dh)/30+"px"); 
	$(".l").css("font-size",(dw+dh)/40+"px"); 
	$(".m").css("font-size",(dw+dh)/60+"px"); 
	$(".es").css("font-size",(dw+dh)/70+"px");
	$(".s").css("font-size",(dw+dh)/80+"px"); 
	$("input,select,textarea").css("font-size",(dw+dh)/60+"px"); 
	//$(".es").css("font-size",(dw+dh)/100+"px");
}
/*------------ MENU -------------------*/
function showMenu(){/*$("#menu").show(500);*/ $("#menu").slideDown();}
function hideMenu(){/*$("#menu").hide(500);*/  $("#menu").slideUp();}
function toggleMenu(){ if($("#menu").is(":hidden")){showMenu();}else{hideMenu();} }
/*----------- LOADING ----------------*/
function startLoading(){ if($("#loader").is(":hidden")){ $("#loader").show(); } }
function stopLoading(){ if($("#loader").is(":visible")){ $("#loader").hide(); } }

/*------------- SET IMAGE SIZE -----------*/
function setImgSizeByID(id){
	var w = $("#"+id).width(); var h = $("#"+id).height();
	if(w>h){ w=h; }else{ h=w; }  $("#"+id+" img").css({"width":w,"height":h});
}
function setImgSizeByClass(classname){
	var w = $("."+classname).width(); var h = $("."+classname).height();
	if(w>h){ w=h; }else{ h=w; } $("."+classname+" img").css({"width":w,"height":h});
}
/*------------ SELECT PLACEHOLDER ---------*/
function onSelect(id){
	$("#"+id).change(function () {
	    if($(this).val() == $("#"+id+" option").eq(0).val()) 
	    {$(this).addClass('selectplaceholder'); } 
	    else { $(this).removeClass('selectplaceholder'); }
	});
	$("#"+id).change();
}