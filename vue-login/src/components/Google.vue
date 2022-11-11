<script>
import { decodeCredential } from "vue3-google-login"

export default {
  data() {
    return {
      googleUserInfo: null
    }
  },
  methods: {
    async callback(response) {
      const userData = decodeCredential(response.credential)
      this.googleUserInfo = userData
    }
  }
}
</script>

<template>
  <div>
  <GoogleLogin :callback="callback" prompt auto-login />
  <div v-if="!googleUserInfo"></div>
  <div v-else>
        <img :src="googleUserInfo.picture">
        <div>uid : {{ googleUserInfo.sub }}</div>
  <div>name : {{ googleUserInfo.name }}</div>
  <div>email : {{ googleUserInfo.email }}</div>
    </div> 
    </div>
</template>