// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDOVUwSkl242Y9ILNl6tmNh5LERKObM8iQ",
  authDomain: "typescrip-redux.firebaseapp.com",
  projectId: "typescrip-redux",
  storageBucket: "typescrip-redux.appspot.com",
  messagingSenderId: "685632004112",
  appId: "1:685632004112:web:50655090777b76d4cf2a95",
  measurementId: "G-DLKNMQ3MV0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
