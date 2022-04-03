import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2sPxmUgGsYLO-zbov63gCAt4sfsX17ow",
  authDomain: "snapchat-clone-44c62.firebaseapp.com",
  projectId: "snapchat-clone-44c62",
  storageBucket: "snapchat-clone-44c62.appspot.com",
  messagingSenderId: "150110163142",
  appId: "1:150110163142:web:2c9df0a1863fb3b39607c7",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
