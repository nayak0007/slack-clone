import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp:any = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = (firebase as any).auth();
const provider = new (firebase as any).auth.GoogleAuthProvider();

export { auth, provider };
export default db;
