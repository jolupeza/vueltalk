import { auth } from './../firebase'

const state = {
  user: null
}

const getters = {}

const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

const actions = {
  getCurrentUser () {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(
        user => {
          unsubscribe()
          resolve(user)
        },
        () => {
          reject(new Error('User unathenticated'))
        }
      )
    })
  },
  async updateProfile ({ commit }, { name, email, password }) {
    const user = auth.currentUser

    if (name) {
      await user.updateProfile({ displayName: name })
    }

    if (email) {
      await user.updateEmail(email)
    }

    if (password) {
      await user.updatePassword(password)
    }

    commit('SET_USER', user)
  },
  async doLogin ({ commit }, { email, password }) {
    await auth.signInWithEmailAndPassword(email, password)
    commit('SET_USER', auth.currentUser)
  },
  async doRegister ({ commit }, { name, email, password }) {
    await auth.createUserWithEmailAndPassword(email, password)
    const user = auth.currentUser
    await user.updateProfile({
      displayName: name
    })
    commit('SET_USER', user)
  },
  async doLogout ({ commit }) {
    await auth.signOut()
    commit('SET_USER', null)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
