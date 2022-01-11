import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCPPDaiTEohe7eKKAbq3DHn8K56SjcylbQ",
  authDomain: "facebook-clone-cf14e.firebaseapp.com",
  projectId: "facebook-clone-cf14e",
  storageBucket: "facebook-clone-cf14e.appspot.com",
  messagingSenderId: "663591297841",
  appId: "1:663591297841:web:d8cfd2ddc706ef0a0a8610",
  measurementId: "G-1KYJLFKCPJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;