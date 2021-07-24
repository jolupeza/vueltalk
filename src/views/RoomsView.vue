<template>
  <div class="home">
    <section class="section">
      <div class="container has-text-centered">
        <button v-if="!user" @click="doLogin" class="button">Login with Google</button>
        <template v-else>
          <h1 class="title hast-text-centered">Hi {{ user.displayName }}</h1>
          <button @click="doLogout" class="button">Logout</button>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import { fb, auth } from '@/firebase'

export default {
  name: 'RoomsView',
  data () {
    return {
      user: null
    }
  },
  methods: {
    async doLogin () {
      try {
        const provider = new fb.auth.GoogleAuthProvider()
        const user = await auth.signInWithPopup(provider)
        this.user = user.user
      } catch (error) {
        console.error(error.message)
      }
    },
    async doLogout () {
      try {
        await auth.signOut()
        this.user = null
      } catch (error) {
        console.error(error.message)
      }
    }
  }
}
</script>
