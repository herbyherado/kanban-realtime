import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    log: null,
    todo: null,
    ipc: null,
    done: null
  },
  getters: {
    getlog: (state) => state.log,
    gettodo: (state) => state.todo,
    getipc: (state) => state.ipc,
    getdone: (state) => state.done
  },
  mutations: {
    setlog (state, payload) {
      state.log = payload
    },
    settodo (state, payload) {
      state.todo = payload
    },
    setipc (state, payload) {
      state.ipc = payload
    },
    setdone (state, payload) {
      state.done = payload
    },
    setnull (state) {
      state.log = null
      state.todo = null
      state.ipc = null
      state.done = null
    }
  },
  actions: {
    addTask (context, payload) {
      let task = {
        title: payload.title,
        description: payload.description
      }
      console.log(payload)
      console.log(context)
      firebase.database().ref().child(`${payload.status}/`).push(task)
    },
    updates (context) {
      var database = firebase.database()
      var ref = database.ref().child('/')
      ref.on('value', (gotdata) => {
        console.log(gotdata.val().log)
        context.commit('setlog', gotdata.val().log)
        context.commit('settodo', gotdata.val().todo)
        context.commit('setipc', gotdata.val().ipc)
        context.commit('setdone', gotdata.val().done)
      }, (errdata) => {
        console.log(errdata)
      })
    }
  }
})

export default store
