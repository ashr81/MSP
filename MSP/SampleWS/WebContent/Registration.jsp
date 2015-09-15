<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="../../favicon.ico">
<title>Register in Smartprice</title>
<!-- Bootstrap core CSS -->
<link href="http://getbootstrap.com/dist/css/bootstrap.min.css"
	rel="stylesheet">

<!-- Custom styles for this template -->
<link href="signin.css" rel="stylesheet">

<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script
	src="http://getbootstrap.com/assets/js/ie-emulation-modes-warning.js"></script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<style>
.form-control {
	text-align: center;
	margin-top: 6px;
}

.container-fluid {
	height: 76px;
}
</style>

<body>
	<?php?>
	<div class="container">
		<nav class="navbar navbar-default">
		<div class="container-fluid">

			<a class="navbar-brand" href="#"> <img alt="Brand"
				src="images/brand_logo.png" style="height: 45px; width: 140px;">
			</a>

		</div>
		</nav>
		<form class="form-signin" method="post" action="register"
			style="width: 50%; text-align: center; margin-left: 282px;">
			<h2 class="form-signin-heading">Please Register here</h2>
			<label for="inputCompanyName" class="sr-only">Company Name:</label> <input
				name="company" type="text" id="inputCompanyName"
				class="form-control" placeholder="Company Name" required> <label
				for="inputOwnerName" class="sr-only">Owner Name:</label> <input
				name="owner" type="text" id="inputOwnerName" class="form-control"
				placeholder="Owner Name " required> <label for="inputEmail"
				class="sr-only">Email address</label> <input name="email"
				type="email" id="inputEmail" class="form-control"
				placeholder="Email address" required autofocus> <label
				for="inputWebsite" class="sr-only">Website</label> <input
				name="website" type="text" id="inputWebsite" class="form-control"
				placeholder="Website" required> <label for="inputAddress"
				class="sr-only">Address</label> <input name="address" type="text"
				id="inputAddress" class="form-control" placeholder="Address"
				readonly>
			<button onclick="getLocation()" id="location" style= "margin-top: 7px;">Set Location</button>
			<label for="inputPassword" class="sr-only">Password</label> <input
				name="password" type="password" id="inputPassword"
				class="form-control" placeholder="Password" required> <label
				for="inputPassword" class="sr-only">Password</label> <input
				name="password2" type="password" id="inputPassword"
				class="form-control" placeholder="Re-Enter Password" required>
			<input type="hidden" name="lat" id="lat" /> <input type="hidden"
				name="lng" id="lng" /> <input type="hidden" name="area" id="area" />
			<button class="btn btn-lg btn-primary btn-block" type="submit"
				style="background-color: #cc0000; margin-top: 5px;">Register Here</button>
			<p>
				Registered Member <a href="login.jsp">Signin Here</a>
			</p>
		</form>

	</div>
	<!-- /container -->


	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script
		src="http://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
	<script type="text/javascript"
		src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script>
		var x = document.getElementById("location");

		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else {
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}
		function showPosition(position) {
			/*x.innerHTML = "Latitude: " + position.coords.latitude + 
			"<br>Longitude: " + position.coords.longitude;*/
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			document.getElementById("lat").value = lat;
			document.getElementById("lng").value = lng;

			getLocName(lat, lng);
			var latlng = new google.maps.LatLng(lat, lng);
			var geocoder = geocoder = new google.maps.Geocoder();
			geocoder.geocode({
				'latLng' : latlng
			}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					if (results[1]) {
						var loc = document.getElementById("inputAddress");
						loc.value = results[1].formatted_address;
						/*alert("Location: " + results[1].formatted_address);*/
					}
				}
			});
		}
		function getLocName(latval, longval) {
			/*alert(latval+" - "+longval);*/

			//latval="17.4417";
			//longval="78.3917";
			var url = "https://maps.googleapis.com/maps/api/geocode/json";
			$
					.ajax({
						type : "GET",
						url : url,
						cache : false,
						data : {
							latlng : latval + "," + longval,
							location_type : "ROOFTOP",
							result_type : "street_address",
							key : "AIzaSyARlNZvSWv1oN-aGN_wM-KKCkOV0vep2qs"
						},
						success : function(response) {
							/*var fulladd = response.results[0].formatted_address;
							alert(fulladd);*/
							var areaname = getAreaName(response,
									"sublocality_level_1");
							document.getElementById("area").value = areaname;

						},
						error : function(e) {
							alert("Error to get Location");
						}
					});
		}

		// type- sublocality_level_1
		function getAreaName(result, type) {
			var len = result.results[0].address_components.length;
			var obj = result.results[0].address_components;
			for (var i = 0; i < len; i++) {
				if (obj[i].types[0] == type) {
					return obj[i].long_name;
				}
			}
			return;
		}
	</script>
</body>
</html>