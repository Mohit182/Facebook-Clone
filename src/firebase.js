import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_WEATHER_API_KEY,
  authDomain: "facebook-clone-cf14e.firebaseapp.com",
  projectId: "facebook-clone-cf14e",
  storageBucket: "facebook-clone-cf14e.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
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
