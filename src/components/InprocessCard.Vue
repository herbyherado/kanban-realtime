<template>
  <div class='tile'>
      <div class='tile-title' id='ipc'> In Process </div>
        <div class='item' v-for='(ipc, i) in showipc' :key='i'>
          <div class='title'> {{ ipc.title }}</div>
          <div class='description'>{{ ipc.description }}</div>
            <div class="details">
            <button class ="rad-button warning flat" id="rad-button" @click='movetodo(ipc, i)'> todo </button>
            <button class ="rad-button danger flat" id="rad-button" @click='deleteipc(i)'> delete </button>
            <button class ="rad-button good flat" id="rad-button" @click='movedone(ipc, i)'>  done </button>
          </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'InprocessCard',
  computed: {
    ...mapGetters({
      showipc: 'getipc'
    })
  },
  methods: {
    movedone: function (ipc, id) {
      this.$store.dispatch('addTask', {
        status: 'done',
        title: ipc.title,
        description: ipc.description
      })
      this.deleteipc(id)
    },
    movetodo: function (ipc, id) {
      this.$store.dispatch('addTask', {
        status: 'todo',
        title: ipc.title,
        description: ipc.description
      })
      this.deleteipc(id)
    },
    deleteipc: function (id) {
      let database = firebase.database()
      let ref = database.ref(`/ipc/${id}`)
      ref.remove()
    }
  },
  created () {
    this.$store.dispatch('updates')
  }
}
</script>
<style >
.tile {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: white;
}
.tile-title{
  padding: 15px 0;
  border-radius: 3px 3px 3px 3px;
  background-color: rgb(75, 75, 75);

}
.item {
  margin: 20px 2px;
  transition: all .3s ease-in-out;
  display: grid;
  grid-template-columns: auto;
  padding: 2px 10px;
}
.item:hover {
  transform: scale(1.03);
  background-color: rgb(175, 175, 175);
  border-radius: 5px 5px 5px 5px;
}

.title {
  padding: 10px 0;
  border-bottom: 0.5px solid white;
  text-shadow: 2px 2px rgba(255, 255, 255, 0.466);
}

.description {
  font-size: 16px;
  color: rgb(255, 250, 250);
  padding: 20px 15px;
  text-align: left;
}

.details {
  padding-bottom: 10px;
}
/* buttons */
.rad-button {
  white-space: nowrap;
  top: 0px;
  border-radius: 4px;
  position: relative;
  border: none;
  background: none;
  font-family: "Roboto", sans-serif;
  width: 200px;
  height: 50px;
  cursor: pointer;
  transition: 0.1s all ease;
  font-size: 16px;
  font-weight: 300;
  color: #777;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 0px 0px 0px #b8b8b8;
}
#rad-button {
  width:70px;
  height: 30px;
}
.rad-button:focus {
  outline: 0;
}
.rad-button:hover {
  background-color: #f5f5f5;
  top: -2px;
  height: 52px;
  border-bottom: 4px solid #ccc;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
}
.rad-button:hover.static {
  top: 0px;
  height: 50px;
}
.rad-button:active {
  top: 0px;
  height: 50px;
  border: 1px solid #ccc;
  background-color: #ededed;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.15);
}

.rad-button.good {
  background-color: #b9e9ce;
  color: #759f87;
  border-bottom: 1px solid #759f87;
}
.rad-button.good:hover {
  background-color: #caf3db;
  top: -2px;
  border-bottom: 4px solid #759f87;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}
.rad-button.good:active {
  top: 0px;
  border: 1px solid #759f87;
  background-color: #a5dabc;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.rad-button.danger {
  background-color: #e7a796;
  color: #7b5348;
  border-bottom: 1px solid #7b5348;
}
.rad-button.danger:hover {
  background-color: #f2beb1;
  top: -2px;
  border-bottom: 4px solid #7b5348;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}
.rad-button.danger:active {
  top: 0px;
  border: 1px solid #7b5348;
  background-color: #d69280;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.rad-button.warning {
  background-color: #f3eac5;
  color: #bd8d32;
  border-bottom: 1px solid #bcb496;
}
.rad-button.warning:hover {
  background-color: #faf5df;
  top: -2px;
  border-bottom: 4px solid #bcb496;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
}
.rad-button.warning:active {
  top: 0px;
  border: 1px solid #bcb496;
  background-color: #e6dcb5;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
}

#ipc {
  background-color: rgba(255, 118, 38, 0.562)
}

</style>
