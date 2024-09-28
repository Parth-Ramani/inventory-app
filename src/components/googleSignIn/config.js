// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDPuW0rme8JWSWJ8mtaMaIQpYNhdf45a88",
  authDomain: "inventory-app-30e25.firebaseapp.com",
  projectId: "inventory-app-30e25",
  storageBucket: "inventory-app-30e25.appspot.com",
  messagingSenderId: "66284892984",
  appId: "1:66284892984:web:d99f8210b7c5cfcaa347cd",
  measurementId: "G-H1XHJM92G6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
