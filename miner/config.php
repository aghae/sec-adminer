<?php
$CONFIG_THEME = 'konya';

//Enable login for password-less database like sqlite
$CONFIG_LOGIN_PASSWORD_LESS = '123qwe';

$CONFIG_LOGIN_OTP = array(
    "enable"    => false , 
    "secret_code"=>"3ekrEtKii"
    /*
        generate new sekret key : 
            https://www.authenticatorApi.com/pair.aspx?AppName=seminer&AppInfo=root&SecretCode=3ekrEtKii
        and scan it with google authenticator :
             https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US
    */
);




