
<?php
include "./config.php";

function adminer_object() {
	include_once "./plugins/plugin.php";
	include_once "./plugins/login-password-less.php";
	include_once "./plugins/tinymce.php";

	if($GLOBALS['CONFIG_OTP']['enable']){
		include_once include_once "./plugins/login-otp.php";
		$otp = new AdminerLoginOtp(base64_decode(base64_encode($GLOBALS['CONFIG_OTP']['secret_code'])));
	}
	return new AdminerPlugin(array(
		// TODO: inline the result of password_hash() so that the password is not visible in source codes
		new AdminerLoginPasswordLess(password_hash($GLOBALS['CONFIG_LOGIN_PASSWORD_LESS'], PASSWORD_DEFAULT)),
		$otp,
		new AdminerTinymce(),
		
	));

	
}

include "./adminer.php";