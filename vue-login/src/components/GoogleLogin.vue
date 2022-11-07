<script lang="ts">
export default {
  props: {
    socialName: String
  },
  methods: {
    login() {
      console.log('click login')
    }
  }
}
</script>

<template>
  <div>
    <button v-on:click="login">{{ socialName }} login</button>
  </div>
</template>