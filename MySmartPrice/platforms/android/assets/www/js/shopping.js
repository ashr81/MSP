/* ------------ Develop By Anuj Harshe ------------ */
$(function(){	
	document.addEventListener("deviceready",deviceready1,false);
});
function deviceready1(){
	$("#t_text span").html("MySmartPrice Shop");
	createCategory();
}
/*--------------- ON BACK BUTTON -------------*/
function onBackClick(){ location.href="index.html"; }

var result = [
              {img:"img/cat/dealsandoffers.png",name:"Deals & Offers",desc:"Top Deals & Offers across 100+ Stores"},
              {img:"img/cat/menfashion.png",name:"Men Fashion",desc:"Clothing, Shoes, Watches, Bags, Accessories, Fragranc"},
              {img:"img/cat/bookmedia.png",name:"Books & Media",desc:"Best Sellers, New Releases, Upcoming, Indian Authors"},
              {img:"img/cat/tv.png",name:"TV & Entertainment Devices",desc:"LED / LCD TVs, iPods, Home Theaters, DVD Players"},
              {img:"img/cat/babykids.png",name:"Baby & Kids",desc:"Toys, Clothing, Shoes, Accessories, Bags & Furniture"},
              {img:"img/cat/mobiletablet.png",name:"Mobile, Tablets & Accessories",desc:"Mobiles, Tablets, Memory Cards, Headphones"},
              {img:"img/cat/womanfash.png",name:"Women Fashion",desc:"Clothing, Shoes, Jewellery, Watches, Bags, Fragrances"},
              {img:"img/cat/personal-health.png",name:"Personal & Health Devices",desc:"Trimmers, Shavers, Hair Dryers, BP Monitors, Glucom"},
              {img:"img/cat/cameras.png",name:"Cameras, DSLRs & Accessories",desc:"Digital Cameras, DSLRs, Lenses, Filters, Tripods"},
              {img:"img/cat/beauty.png",name:"Beauty",desc:"Kajal, Nail Polish & Deos"}
             ];

function createCategory(){
	var len = result.length;
	for(var i=0;i<len;i++){
		$("#appenddiv").before(
			'<div id="" class="catcontainer" onclick="onCatClick('+i+')">'
				+'<div class="category">'
					+'<div class="pimg"><img src="'+result[i].img+'"></div>'
					+'<div class="pdetails">'
						+'<div class="pname m"><span>'+result[i].name+'</span></div>'
						+'<div class="pdesc es"><span>'+result[i].desc+'</span></div>'
					+'</div>'
				+'</div>'
			+'</div>'
		);
	}
	$(".m").css("font-size",(dw+dh)/60+"px"); 
	$(".es").css("font-size",(dw+dh)/70+"px");
}
/*------------- ON CLICK PRODUCT ------------*/
function onCatClick(cid){
	//alert(cid);
}