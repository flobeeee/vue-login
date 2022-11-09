<script>
import { decodeCredential } from "vue3-google-login"
import Facebook from './components/Facebook.vue'

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
  },
  components: {
    Facebook
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
  <div>
    <Facebook />
  </div>
  </div>
</template>