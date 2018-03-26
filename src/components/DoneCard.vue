<template>
  <div class='tile'>
      <div class='tile-title' id='doner'> Done </div>
        <div class='item' v-for='(done, i) in showdone' :key='i'>
          <div class='title'> {{ done.title }}</div>
          <div class='description'>{{ done.description }}</div>
            <div class="details">
            <button class ="rad-button warning flat" id="rad-button" @click='moveipc(done, i)' style="font-size:12px;"> inprocess </button>
            <button class ="rad-button good flat" id="rad-button"  @click='deletedone(i)'> delete </button>
          </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'DoneCard',
  computed: {
    ...mapGetters({
      showdone: 'getdone'
    })
  },
  methods: {
    moveipc: function (done, id) {
      this.$store.dispatch('addTask', {
        status: 'ipc',
        title: done.title,
        description: done.description
      })
      this.deletedone(id)
    },
    deletedone: function (id) {
      let database = firebase.database()
      let ref = database.ref(`/done/${id}`)
      ref.remove()
    }
  },
  created () {
    this.$store.dispatch('updates')
  }
}
</script>
<style>
#doner {
  background-color: rgba(24, 255, 63, 0.562)
}
</style>
