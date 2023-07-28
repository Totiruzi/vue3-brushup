import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALlUIAPuFto-9Tz1wrsMG9R6lO_pa_rLo',
  authDomain: 'chris-music-3062a.firebaseapp.com',
  projectId: 'chris-music-3062a',
  storageBucket: 'chris-music-3062a.appspot.com',
  appId: '1:272049887180:web:b00d2c5b46591f93852f69'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const database = firebase.firestore();
const storage = firebase.storage();
const usersCollection = database.collection('users');
export { auth, database, usersCollection, storage };