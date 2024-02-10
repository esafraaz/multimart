import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCToRcg5OtYFEfcKfCIDFk8MHYI9Fj_jrY",
  authDomain: "martrade-795ea.firebaseapp.com",
  projectId: "martrade-795ea",
  storageBucket: "martrade-795ea.appspot.com",
  messagingSenderId: "750905647268",
  appId: "1:750905647268:web:52fd38c831073451a80631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
