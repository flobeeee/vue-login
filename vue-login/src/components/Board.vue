<script>
export default {
  data() {
    return {
      idx: 1,
      boards: [
        { id: 1, name: 'lee', title: 'stella', createdAt: '2022-11-11' },
        { id: 2, name: 'kim', title: 'corona', createdAt: '2022-11-12' },
        { id: 3, name: 'oh', title: 'terra', createdAt: '2022-11-13' },
        { id: 4, name: 'bae', title: 'kgb', createdAt: '2022-11-14' }
      ]
    }
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
            <th>id</th>
            <th>관리자</th>
            <th>프로젝트 명</th>
            <th>생성일시</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="board in boards" :key="board.id">
            <td>{{idx ++}}</td>
            <td>{{board.name}}</td>
            <td>{{board.title}}</td>
            <td>{{board.createdAt}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.mainBox {
  display: flex;
  flex-direction: row;
  height: 90vh;
}.manu {
  background-color: rgb(237, 248, 206);
  flex: 1 1 auto;
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