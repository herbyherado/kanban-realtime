<template>
<div>
  <div class='header animated fadeIn'>
    <h1>K A N B A N</h1>
  </div>
  <div class='body animated fadeIn'>
    <div class='board-container'>
      <div class='board'>
        <log-card></log-card>
      </div>
      <div class='board'>
        <todo-card></todo-card>
      </div>
      <div class='board'>
        <inprocess-card></inprocess-card>
      </div>
      <div class='board' id="done">
        <done-card></done-card>
      </div>
    </div>
  </div>
  <!-- add modal -->
  <button id="newTask" @click='addbutton' style="position:absolute;right:7%;top:5%;background-color:rgb(49,49,49);font-size:15px;"> + </button>
  <!-- modal -->
  <div class="modal" id="addmodal">
    <div class="form">
      <h2>Task Form</h2><span style="float:right;cursor:pointer;margin-top:-4em" @click='closemodal'>&times;</span>
      <p type="Title">
        <input v-validate="'required'" name="title" id="input-title" v-model='title' placeholder="Write your task title here..">
        <span style="color:red;font-size:10px;" v-show="errors.has('title')" class="help is-danger">{{ errors.first('title') }}</span>
      </p>
      <p type="Description">
        <input v-validate="'required'" name="description" id="input-description" v-model='description' placeholder="Enter your description here..">
        <span style="color:red;font-size:10px;" v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
      </p>
      <div class="buttons">
        <button @click='assignTask'>Add</button>
        <button @click='closemodal' style="float:left">Cancel</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import LogCard from '@/components/LogCard'
import TodoCard from '@/components/TodoCard'
import InprocessCard from '@/components/InprocessCard'
import DoneCard from '@/components/DoneCard'

export default {
  name: 'Dashboard',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  components: {
    LogCard: LogCard,
    TodoCard: TodoCard,
    InprocessCard: InprocessCard,
    DoneCard: DoneCard
  },
  methods: {
    addbutton: function () {
      var modal = document.getElementById('addmodal')
      modal.style.display = 'block'
    },
    closemodal: function () {
      var modal = document.getElementById('addmodal')
      modal.style.display = 'none'
    },
    showdetail: function () {
      var detail = document.getElementById('detailmodal')
      detail.style.display = 'block'
    },
    closedetail: function () {
      var detail = document.getElementById('detailmodal')
      detail.style.display = 'none'
    },
    assignTask: function () {
      this.$store.dispatch('addTask', {
        status: 'log',
        title: this.title,
        description: this.description
      })
      this.title = ''
      this.description = ''
      this.closemodal()
    }
  },
  computed: {
    ...mapGetters({
      showlog: 'getlog',
      showtodo: 'gettodo',
      showipc: 'getipc',
      showdone: 'getdone'
    })
  },
  created () {
    this.$store.dispatch('updates')
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');
@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import url('https://fonts.googleapis.com/css?family=Montserrat');

* {
  text-align:center;
  /* overflow-x: scroll; */
}
.header{
  width:100%;
  font-family: 'Quicksand', Arial, Helvetica, sans-serif;
  font-weight: lighter;
  color: white;
  font-size: 25px;
}

.body {
  /* height: 100%; */
  /* overflow: scroll; */
}

/* for each tile */
.board-container {
  margin: 0 5em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 2em;
}

@media all and (max-width: 1000px){
  .board-container {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}

@media all and (max-width: 600px){
  .board-container {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
}

.board {

  margin: 0 10px;
  border-radius: 5px 5px 5px 5px;
  transition: all .3s ease-in-out;
}
.board:hover {
  transform: scale(1.02);
}
/*----------------- modal */

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: scroll; 
  /*Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.form {
  width: 340px;
  height: 350px;
  background: #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  margin: 15% auto;
  padding: 20px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  position: relative;
}
h2 {
  margin: 10px 0;
  padding-bottom: 10px;
  width: 180px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
}
input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  font-family: "Montserrat", sans-serif;
  transition: all 0.3s;
  border-bottom: 2px solid #bebed2;
}
input:focus {
  border-bottom: 2px solid #78788c;
}
p:before {
  content: attr(type);
  display: block;
  margin: 28px 0 0;
  font-size: 14px;
  color: #5a5a5a;
}
button {
  float: right;
  padding: 8px 12px;
  margin: 8px 0 0;
  font-family: "Montserrat", sans-serif;
  border: 2px solid #78788c;
  background: 0;
  color: #5a5a6e;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background: #78788c;
  color: #fff;
}
.foot {
  content: "Hi";
  position: absolute;
  bottom: -15px;
  right: -20px;
  background: #50505a;
  color: #fff;
  width: 320px;
  padding: 16px 4px 16px 0;
  border-radius: 6px;
  font-size: 13px;
  box-shadow: 10px 10px 40px -14px #000;
}
span {
  margin: 0 5px 0 15px;
}

.detailed {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  /* overflow: scroll;  */
  /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

</style>
