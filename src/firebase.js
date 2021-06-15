// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7AYlERsf5dISRTkEa0ggWu3du1YyL6Ks",
  authDomain: "todo-app-react-e770a.firebaseapp.com",
  projectId: "todo-app-react-e770a",
  storageBucket: "todo-app-react-e770a.appspot.com",
  messagingSenderId: "607395845880",
  appId: "1:607395845880:web:3da73daebc0be60bd08d0d",
  measurementId: "G-55T7S0ZW9Y"

})
const db=firebaseApp.firestore();

export default db;