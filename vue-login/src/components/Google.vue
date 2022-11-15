<script>
import { decodeCredential } from "vue3-google-login"

export default {
  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child')
  },
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