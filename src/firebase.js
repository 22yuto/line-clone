import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC5JstzswrrXJjORLW2TYMhKca9OMUTsGU",
  authDomain: "line-clone-26761.firebaseapp.com",
  projectId: "line-clone-26761",
  storageBucket: "line-clone-26761.appspot.com",
  messagingSenderId: "50063555264",
  appId: "1:50063555264:web:c2de2f127d6859f583cb25"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };