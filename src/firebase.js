import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBPv91bgCJ-bs4kq-oOGICqBrB3Bswy9dM',
  authDomain: 'vuetalk-62d47.firebaseapp.com',
  projectId: 'vuetalk-62d47',
  storageBucket: 'vuetalk-62d47.appspot.com',
  messagingSenderId: '676147577120',
  appId: '1:676147577120:web:54b70c16a3245fc0991745'
}

firebase.initializeApp(firebaseConfig)

export const fb = firebase
export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
