
<script>
window.fbAsyncInit = function () {
  FB.init({
    appId: import.meta.env.VITE_FACEBOOK_CLIENT_ID,
    cookie: true,
    xfbml: true,
    version: 'v15.0'
  });

  FB.AppEvents.logPageView();

};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<template>
<div>
  <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
  </fb:login-button>
</div>
</template>
