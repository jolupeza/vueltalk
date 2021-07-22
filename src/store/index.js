import Vue from 'vue'
import Vuex from 'vuex'

import messages from '@/store/messages'
import rooms from '@/store/rooms'
import user from '@/store/user'
import utils from '@/store/utils'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    checkAuth () {

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
