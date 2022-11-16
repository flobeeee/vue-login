<script>
import Home from './components/Home.vue'
import Google from './components/Google.vue'
import Facebook from './components/Facebook.vue'
import Board from './components/Board.vue'
import Unauthorized from './components/Unauthorized.vue'

const routes = {
  '/': Home,
  '/google': Google,
  '/facebook': Facebook,
  '/board': Board,
  '/unauthorized': Unauthorized
}

export default {
  data() {
    return {
      currentPath: window.location.hash,
      isLogin: false
    }
  },
  computed: {
    // 페이지 이동
    currentView() {
      if (!this.isLogin) {
        if (this.currentPath.slice(1) === '/board') {
          return routes['/unauthorized']
        }
      }
      return routes[this.currentPath.slice(1) || '/'] 
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
  components: {
    Facebook,
    Google,
    Unauthorized
  },
  methods: {
    changeLoginStat() {
      this.isLogin = true
    }
  }
}
</script>

<template>
  <div>
    <a href="#/">Home</a> |
    <a href="#/board">Board</a>
  <div class="mainBox">
    <div class="manu">
      <h4>
        *로그인*
      </h4>
      <!-- <<a  href="#/google">Google</a>> -->
      <Google @update:isLogin="changeLoginStat()"></Google>
      <div>-</div>
      <a href="#/facebook">Facebook</a>
    </div>
    <div class="boardBox">
      <component :is="currentView" />
  <div>
  </div>
  </div>
  </div>
  </div>
</template>

<style scoped>
.mainBox {
  padding-top: 5%;
  display: flex;
  flex-direction: row;
}.manu {
  background-color: rgb(237, 248, 206);
  flex: 1 1 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.boardBox {
  flex: 4 1 auto;
}

.google{
  display: hidden;
}
</style>