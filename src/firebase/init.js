// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfRSh_ws3rusM9ocJV50wrULdVF_tu3IE",
  authDomain: "fire-base-basics-fes.firebaseapp.com",
  projectId: "fire-base-basics-fes",
  storageBucket: "fire-base-basics-fes.appspot.com",
  messagingSenderId: "105953239455",
  appId: "1:105953239455:web:09e75f5416d24833f39daa",
  measurementId: "G-VPDSGCRK8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();