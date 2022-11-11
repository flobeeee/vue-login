<script>
import axios from 'axios'
export default {
  data() {
    return {
      metaData: null,
      boards: [
        { id: 1, name: 'lee', title: 'stella', createdAt: '2022-11-11' },
        { id: 2, name: 'kim', title: 'corona', createdAt: '2022-11-12' },
        { id: 3, name: 'oh', title: 'terra', createdAt: '2022-11-13' },
        { id: 4, name: 'bae', title: 'kgb', createdAt: '2022-11-14' }
      ]
    }
  },
  async mounted() {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/notices`)
    console.log(res)
    this.boards = res.data.data
    this.metaData = res.data.meta
  }
}
</script>

<template>
  <div class="mainBox">
    <div class="manu">manu</div>
    <div class="boardBox">
      <table class="board">
        <thead>
          <tr>
            <th>idx</th>
            <th>관리자 id</th>
            <th>title</th>
            <th>생성일시</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="board in boards" :key="board.id">
            <td>{{board.id}}</td>
            <td>{{board.managerUserId}}</td>
            <td>{{board.title}}</td>
            <td>{{board.createdAt}}</td>
          </tr>
          <div class="pageInfo">
            <span>Total: {{metaData ? metaData.total : 0}}</span>
            <span>perPage: {{ metaData ? metaData.per_page: 0}}</span>
            <span>Page: {{ metaData ? metaData.current_page : 0}}</span>
          </div>
        </tbody>
        <div></div>
      </table>
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
}
.board {
  width: 100%;
}
.boardBox{
  background-color: rgb(236, 222, 247);
  flex: 5 1 auto;
  flex-direction: row;
}

table {
  width: 100%;
  border-top: 1px solid #444444;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #444444;
  border-left: 1px solid #444444;
  padding: 10px;
  text-align: center;
}

th:first-child,
td:first-child {
  border-left: none;
}
</style>