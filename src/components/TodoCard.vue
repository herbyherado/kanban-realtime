<template>
  <div class='tile'>
      <div class='tile-title' id='todo' > Todo </div>
        <div class='item' v-for='(todo, i) in showtodo' :key='i'>
          <div class='title'> {{ todo.title }}</div>
          <div class='description'>{{ todo.description }}</div>
            <div class="details">
            <button class ="rad-button warning flat" id="rad-button"  @click='movelog(todo, i)'> log </button>
            <button class ="rad-button danger flat" id="rad-button" @click='deletetodo(i)'> delete </button>
            <button class ="rad-button good flat" id="rad-button" @click='moveinprocess(todo, i)' style="font-size:12px">  in process </button>
          </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'TodoCard',
  computed: {
    ...mapGetters({
      showtodo: 'gettodo'
    })
  },
  methods: {
    movelog: function (todo, id) {
      this.$store.dispatch('addTask', {
        status: 'log',
        title: todo.title,
        description: todo.description
      })
      this.deletetodo(id)
    },
    moveinprocess: function (todo, id) {
      this.$store.dispatch('addTask', {
        status: 'ipc',
        title: todo.title,
        description: todo.description
      })
      this.deletetodo(id)
    },
    deletetodo: function (id) {
      let database = firebase.database()
      let ref = database.ref(`/todo/${id}`)
      ref.remove()
    }
  },
  created () {
    this.$store.dispatch('updates')
  }
}
</script>
<style>
#todo {
  background-color: rgba(255, 195, 30, 0.644)
}
</style>
