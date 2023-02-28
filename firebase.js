import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv1eUIwVmXiTkKU8hv1wsagx-XwjwFrfA",
  authDomain: "whatsapp-2-cc063.firebaseapp.com",
  projectId: "whatsapp-2-cc063",
  storageBucket: "whatsapp-2-cc063.appspot.com",
  messagingSenderId: "404554300070",
  appId: "1:404554300070:web:f1406d8615400d49915267",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
