import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBErfNGLmY1aYaQq-xYRdnVXPhB9513oko",
  authDomain: "messenger-clone-7bb55.firebaseapp.com",
  projectId: "messenger-clone-7bb55",
  storageBucket: "messenger-clone-7bb55.appspot.com",
  messagingSenderId: "692651163519",
  appId: "1:692651163519:web:fd620a81860c2f2311244a",
  measurementId: "G-NXHM9EB1P9",
});

const db = firebaseApp.firestore();

export default db;
