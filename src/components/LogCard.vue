<template>
  <div class='tile'>
      <div class='tile-title' id='log' > log </div>
        <div class='item' v-for='(log, i) in showlog' :key='i'>
          <div class='title'> {{ log.title }}</div>
          <div class='description'>{{ log.description }}</div>
            <div class="details">
            <button class ="rad-button danger flat" id="rad-button" @click='deletelog(i)'> delete </button>
            <button class ="rad-button good flat" id="rad-button"  @click='movetodo(log, i)'>  todo </button>
          </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'LogCard',
  computed: {
    ...mapGetters({
      showlog: 'getlog'
    })
  },
  methods: {
    movetodo: function (log, id) {
      this.$store.dispatch('addTask', {
        status: 'todo',
        title: log.title,
        description: log.description
      })
      this.deletelog(id)
    },
    deletelog: function (id) {
      let database = firebase.database()
      let ref = database.ref(`/log/${id}`)
      ref.remove()
    }
  },
  created () {
    this.$store.dispatch('updates')
  }
}
</script>
<style>
#log {
  background-color: rgba(126, 9, 9, 0.562)
}
</style>
