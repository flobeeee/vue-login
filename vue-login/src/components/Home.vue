<script>
import JSConfetti from 'js-confetti'

let id = 0
const confetti = new JSConfetti()


export default {
  data() {
    return {
      newTodo: '',
      todos: [
        { id: id++, text: 'Learn HTML' },
        { id: id++, text: 'Learn JavaScript' },
        { id: id++, text: 'Learn Vue' }
      ]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todos = this.todos.filter(el => {
        return el.id !== todo.id
      })
    },
    showConfetti() {
      confetti.addConfetti({
        // emojis: ['🥳', '🎁', '🎄', '✨', '💫', '🌟'],
      })
    }
  },
  mounted() {
    this.showConfetti()
  }
}
</script>

<template>
  <div>
  <h1 @click="showConfetti">환영합니다.</h1>
  <p>
    <iframe class="lotti" src="https://embed.lottiefiles.com/animation/76486"></iframe>
  </p>
  </div>
</template>

<style scoped>
#mainBox {
  margin-top: 2rem;
  display: flex;
}
#menuBox {
  background-color: aquamarine;
  margin-top: 2rem;
  display: flex;
}
#boardBox {
  margin-top: 2rem;
  display: flex;
}

h1{
  text-align: center;
  cursor: pointer;
}

.lotti{
  border: 1px ;
  align-items: center;
}
</style>
