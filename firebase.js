import firebase from "firebase/app";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBXQQAsOMEjvYueANevM7ppRXm64P01bqQ",
  authDomain: "facebook-2-yt-dc624.firebaseapp.com",
  projectId: "facebook-2-yt-dc624",
  storageBucket: "facebook-2-yt-dc624.appspot.com",
  messagingSenderId: "780893288559",
  appId: "1:780893288559:web:97da2589821fa75780f59a",
  measurementId: "G-2TP00JWNKY",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export {
  db,
  storage,
  };
