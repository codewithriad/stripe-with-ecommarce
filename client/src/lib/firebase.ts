// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMSZg8-9NqiOirADW0pQtZzowMb_80aco",
  authDomain: "stripe-ecommarce-app.firebaseapp.com",
  projectId: "stripe-ecommarce-app",
  storageBucket: "stripe-ecommarce-app.firebasestorage.app",
  messagingSenderId: "864713445753",
  appId: "1:864713445753:web:2f0948dc1ffa763e571fa8",
  measurementId: "G-3T2WL495Q5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
// const analytics = getAnalytics(app);
