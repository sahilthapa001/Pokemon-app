// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW9kTTAEqNnmpOCOadE2aMVpH4ZXkNKPI",
  authDomain: "pokemon-b8b18.firebaseapp.com",
  projectId: "pokemon-b8b18",
  storageBucket: "pokemon-b8b18.appspot.com",
  messagingSenderId: "540700402902",
  appId: "1:540700402902:web:dfa4d08d274bc994389577",
  measurementId: "G-YK57C4Q8KC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
