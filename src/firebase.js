import firebase from "firebase";

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyC8yC09wEE3Zydr2wcC33etLJ2onU5teWQ",
    authDomain: "pet-app-43a74.firebaseapp.com",
    databaseURL: "https://pet-app-43a74-default-rtdb.firebaseio.com",
    projectId: "pet-app-43a74",
    storageBucket: "pet-app-43a74.appspot.com",
    messagingSenderId: "217479578462",
    appId: "1:217479578462:web:9bfc5428f8aaad6d8705cf"
  });

  const db= firebaseConfig.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};