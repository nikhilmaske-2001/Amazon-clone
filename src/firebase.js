import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7EKIXovtChwx_K_YH6wpGytm5lqvMkHw",
  authDomain: "clone-ea57e.firebaseapp.com",
  projectId: "clone-ea57e",
  storageBucket: "clone-ea57e.appspot.com",
  messagingSenderId: "93173779250",
  appId: "1:93173779250:web:9cba5272c8474e3c57252b",
  measurementId: "G-22F5C268TD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };