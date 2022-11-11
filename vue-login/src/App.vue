<script>
import Home from './components/Home.vue'
import Google from './components/Google.vue'
import Facebook from './components/Facebook.vue'
import Board from './components/Board.vue'

const routes = {
  '/': Home,
  '/google': Google,
  '/facebook': Facebook,
  '/board': Board
}

export default {
  data() {
    return {
      currentPath: window.location.hash,
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
  components: {
    Facebook,
    Google
  }
}
</script>

<template>
  <div>
      <a href="#/">Home</a> |
      <a href="#/google">Google</a> |
      <a href="#/facebook">Facebook</a> |
      <a href="#/board">Board</a>
      <component :is="currentView" />
  </div>
</template>