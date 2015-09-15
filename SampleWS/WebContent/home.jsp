
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  xmlns:f="http://java.sun.com/jsf/core">
<head>
<!--META-->
<title>New Offer</title>
<!--STYLESHEETS-->
<link href="css/home_style.css" rel="stylesheet" type="text/css" />
<!--SCRIPTS-->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js"></script>
<!--Slider-in icons-->
<script type="text/javascript">
$(document).ready(function() {
        $(".username").focus(function() {
                $(".user-icon").css("left","-48px");
        });
        $(".username").blur(function() {
                $(".user-icon").css("left","0px");
        });

        $(".password").focus(function() {
                $(".pass-icon").css("left","-48px");
        });
        $(".password").blur(function() {
                $(".pass-icon").css("left","0px");
        });
});
</script>
<style>

#action123  {
        background-color: #f3f3f3;
        margin-top: 18px;
        border-radius: 5px;
        text-align: center;
        color: #F00;
        padding: 10px 0px;
        font-weight: bold;
        width: 323px;
        font-size: 14px;
        list-style:none;
}
</style>
</head>

<body>
<!--WRAPPER-->
<div style="height:85px; width:100%; background-color: #F3F3F3; border-radius: 6px; text-align: center;">
	<h1 style= "padding-top: 22px; font-weight: bold; color: #1E85B2;"> MySmartPrice </h1>
	<a href = "login.jsp" style = "float: right; margin-top: -60px; margin-right: 31px"> Logout </a>
	<p style="float: right; margin-top: -26px; margin-right: 11px;"> Welcome <%= request.getParameter("username") %> </p>
</div>
<div id="wrapper">
        <!--SLIDE-IN ICONS-->
    <!--END SLIDE-IN ICONS-->

<!--LOGIN FORM-->
<form name="login-form" class="login-form" action="offer" method="post">

        <!--HEADER-->
    <div class="header">
    
    <!--TITLE--><h1 style= "color: #1E85B2;">Offer Form</h1><!--END TITLE-->
    </div>
    <!--END HEADER-->

        <!--CONTENT-->
    <div class="content">
        <!--USERNAME--><input name="store" type="text" class="input username" value="Store" onfocus="this.value=''"/><f:validateRequired/><!--END USERNAME-->
    <!--PASSWORD--><input name="product" type="text" class="input username" value="Product" onfocus="this.value=''" /><!--END PASSWORD-->
    <input name="description" type="text" class="input username" value="Description" onfocus="this.value=''" />
    <input name="link" type="text" class="input username" value="link" onfocus="this.value=''" />
    <input type = "hidden" name = "username" value = "<%= request.getParameter("username") %>"/>
    </div>
    <!--END CONTENT-->

    <!--FOOTER-->
    <div class="footer">
    <!--LOGIN BUTTON--><input type="submit" value="Submit" class="button" /><!--END LOGIN BUTTON-->
    </div>
    <!--END FOOTER-->
</form>
<!--END LOGIN FORM-->
                     
</div>
<!--END WRAPPER-->

</body>
</html>



