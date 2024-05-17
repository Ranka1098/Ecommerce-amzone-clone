// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwIlLXT-ylUiJBvwWFEw7kwinJv8dVffw",
  authDomain: "colne-91c7d.firebaseapp.com",
  projectId: "colne-91c7d",
  storageBucket: "colne-91c7d.appspot.com",
  messagingSenderId: "320578042945",
  appId: "1:320578042945:web:3891afe0374004f0b19ac0",
  measurementId: "G-DXYSXNDKX5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth in central place

export const auth = getAuth();
