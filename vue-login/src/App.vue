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
      this.userInfo = userData
    }
  }
}
</script>

<template>
  <div>
    <GoogleLogin :callback="callback" prompt auto-login />
    <div v-if="!userInfo"></div>
    <div v-else>
      <img :src="userInfo.picture">
      <div>uid : {{ userInfo.sub }}</div>
      <div>name : {{ userInfo.name }}</div>
      <div>email : {{ userInfo.email }}</div>
  </div> 
  </div>
</template>