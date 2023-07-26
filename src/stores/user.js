import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase.js'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCredencials = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      )
      await usersCollection.doc(userCredencials.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await usersCollection.user.updateProfile({
        displayName: values.name
      })

      this.userLoggedIn = true
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)

      this.userLoggedIn = true
    },
    async signOut() {
      await auth.signOut();
      this.userLoggedIn = false
    }
  }
})
