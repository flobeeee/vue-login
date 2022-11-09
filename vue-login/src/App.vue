<script>
import { decodeCredential } from "vue3-google-login"

export default {
  data() {
    return {
      userInfo: null
    }
  },
  methods: {
    async callback(response) {
      const userData = decodeCredential(response.credential)
      console.log("Handle the userData", userData)
      this.userInfo = userData
    }
  }
}
</script>

<template>
  <div>
    <GoogleLogin :callback="callback" prompt auto-login />
    <div>
      {{ userInfo}} 
    </div>
  </div>
</template>