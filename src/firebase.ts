import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const firebaseApp:any = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = (firebase as any).auth();
const provider = new (firebase as any).auth.GoogleAuthProvider();

export { auth, provider };
export default db;
