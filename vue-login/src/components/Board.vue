<script>
import axios from 'axios'
import Modal from './Modal.vue'

export default {
  components: { Modal },
  data() {
    return {
      metaData: { current_page: 1, per_page: 0, last_page: 0 },
      currentPage: 1,
      boards: [
        { id: 1, managerUserId: '5', title: 'stella', createdAt: '2022-11-11' },
        { id: 2, managerUserId: '4', title: 'corona', createdAt: '2022-11-12' },
        { id: 3, managerUserId: '7', title: 'terra', createdAt: '2022-11-13' },
        { id: 4, managerUserId: '23', title: 'kgb', createdAt: '2022-11-14' }
      ],
      modal: false,
      body: 'body'
    }
  },
  async mounted() {
    this.getBoardData()
  },
  watch: {
    currentPage() {
      this.getBoardData()
    }
  },
  methods: {
    async getBoardData() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/notices?page=${this.currentPage}`)
      this.boards = res.data.data
      this.metaData = res.data.meta
      this.currentPage = res.data.meta.current_page
    },
    showModal() {
      show('test msg').then(c => {
        console.log(c);
      })
    },
    openModal(body) {
      this.body = body
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    doSend() {
      if (this.message.length > 0) {
        alert(this.message)
        this.message = ''
        this.closeModal()
      } else {
        alert('메시지를 입력해주세요.')
      }
    }
  }
}
</script>

<template>
  <div class="mainBox">
    <div class="manu">manu</div>
    <div class="boardBox">
      <span>총 {{metaData ? metaData.total : 0}} 건</span>
      <table class="board">
        <thead>
          <tr>
            <th>idx</th>
            <th>관리자 id</th>
            <th>title</th>
            <th>생성일시</th>
          </tr>
        </thead>
        <tbody >
          <tr class="boardTitle" v-for="board in boards" :key="board.id">
            <td width="100px">{{board.id}}</td>
            <td width="100px">{{board.managerUserId}}</td>
            <td  @click="openModal(board.body)" color="blue" style="cursor:pointer">{{board.title}}</td>
            <td width="100px">{{ board.createdAt.split('T')[0] }}</td>
          </tr>
        </tbody>
        <div></div>
      </table>
      <div class="pageInfo">
        <span @click="currentPage--" style="cursor:pointer">{{ (metaData.current_page === 1) ? '' : '◀' }}</span>
        <span>[ {{ metaData ? metaData.current_page : 0}} / {{ metaData ? metaData.last_page : 0}} ] </span>
        <span  @click="currentPage++" style="cursor:pointer"> {{ (metaData.current_page === metaData.last_page) ? '' : '▶' }}</span>
        <span> <small>(페이지 당: {{ metaData ? metaData.per_page: 0}} 건 )</small></span>
      </div>
    </div>
      <Modal @close="closeModal" v-if="modal" :body=body>
      </Modal>
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

.pageInfo {
  text-align:center;
}

.boardTitle:hover{
  background-color: pink;
}
</style>