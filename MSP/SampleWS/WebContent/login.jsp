
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html  xmlns:f="http://java.sun.com/jsf/core">
<head>
<!--META-->
<title>Login Form</title>
<!--STYLESHEETS-->
<link href="css/login_style.css" rel="stylesheet" type="text/css" />
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
<div id="wrapper">

        <!--SLIDE-IN ICONS-->
    <div class="user-icon"></div>
    <div class="pass-icon"></div>
    <!--END SLIDE-IN ICONS-->

<!--LOGIN FORM-->
<form name="login-form" class="login-form" action="login" method="post">

        <!--HEADER-->
    <div class="header">
    <!--TITLE--><h1>Login Form</h1><!--END TITLE-->
    </div>
    <!--END HEADER-->

        <!--CONTENT-->
    <div class="content">
        <!--USERNAME--><input name="username" type="text" class="input username" value="Username" onfocus="this.value=''"/><f:validateRequired/><!--END USERNAME-->
    <!--PASSWORD--><input name="password" type="password" class="input password" value="Password" onfocus="this.value=''" /><!--END PASSWORD-->
    </div>
    <!--END CONTENT-->

    <!--FOOTER-->
    <div class="footer">
    <!--LOGIN BUTTON--><input type="submit" value="Login" class="button" /><!--END LOGIN BUTTON-->
    </div>
    <!--END FOOTER-->
</form>
<!--END LOGIN FORM-->
                                <div id='action123' class="generate">
                     				<a href = "/SampleWS/Registration.jsp"> New Registration </a>
                                </div>
                     
</div>
<!--END WRAPPER-->

</body>
</html>



