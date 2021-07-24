import Vue from 'vue'
import Vuex from 'vuex'

import messages from '@/store/messages'
import rooms from '@/store/rooms'
import user from '@/store/user'
import utils from '@/store/utils'

import { auth } from './../firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth ({ commit }) {
      auth.onAuthStateChanged(function (user) {
        commit('user/SET_USER', user)
      })
    }
  },
  modules: {
    messages,
    rooms,
    user,
    utils
  }
})

export default store

// Initial load
store.dispatch('checkAuth')
