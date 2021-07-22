<template>
  <div class="home">
    <div class="container mx-auto">
      <button v-if="!user" @click="doLogin" class="">Login with Google</button>
      <template v-else>
        <button @click="doLogout" class="">Logout</button>
      </template>
    </div>
  </div>
</template>

<script>
import { fb, auth } from '@/firebase'

export default {
  name: 'Home',
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
        console.error(error)
      }
    },
    async doLogout () {
      try {
        await auth.signOut()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
