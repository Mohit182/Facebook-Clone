import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
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
// console.log(process.env.REACT_APP_NOT_SECRET_CODE)
// Use these for db & auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
