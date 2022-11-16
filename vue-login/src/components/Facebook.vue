
<script >
import axios from 'axios';

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


// var finished_rendering = function () {
//   console.log("finished rendering plugins");
//   var spinner = document.getElementById("spinner");
//   spinner.removeAttribute("style");
//   spinner.removeChild(spinner.childNodes[0]);
// }
// FB.Event.subscribe('xfbml.render', finished_rendering);


export default {
  data() {
    return {
      facebookUserInfo: null,
    }
  },
  mounted() {
    FB.getLoginStatus(async function (response) {
      await this.getFacebookData(response.authResponse.accessToken)
    }); 
  },
  methods: {
    async getFacebookData(accessToken) {
      const info = await axios.get(`https://graph.facebook.com/me?access_token=${accessToken}`)
      if (info && info.data) {
        this.facebookUserInfo = data
      }
    }
  }
}

</script>

<template>
  <div>
    {{ facebookUserInfo }}
    <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
    </fb:login-button>
    <div id="spinner" style="
            background: #4267b2;
            border-radius: 5px;
            color: white;
            height: 40px;
            text-align: center;
            width: 250px;">
      Loading
      <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with"
        data-use-continue-as="true"></div>
    </div>
  </div>
</template>
