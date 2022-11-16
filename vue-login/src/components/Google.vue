<script>
import { decodeCredential } from "vue3-google-login"

export default {
  emits: ['update:isLogin'],
  data() {
    return {
      googleUserInfo: null
    }
  },
  methods: {
    // 로그인 콜백
    async callback(response) {
      try {
        const userData = decodeCredential(response.credential)
        this.googleUserInfo = userData
        this.$emit('update:isLogin')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<template>
  <div>
  <GoogleLogin v-if="!googleUserInfo" :callback="callback" />
  <!-- <GoogleLogin v-if="!googleUserInfo" :callback="callback" prompt auto-login /> 즉시로그인 -->
    <div v-else>
        <img :src="googleUserInfo.picture">
        <div>uid : {{ googleUserInfo.sub }}</div>
        <div>name : {{ googleUserInfo.name }}</div>
        <div>email : {{ googleUserInfo.email }}</div>
    </div> 
    </div>
</template>