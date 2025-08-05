// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs3LHGZA_8spAwQ5kgULiqcZmKqcIvZiI",
  authDomain: "bfc-vip.firebaseapp.com",
  projectId: "bfc-vip",
  storageBucket: "bfc-vip.firebasestorage.app",
  messagingSenderId: "92211995630",
  appId: "1:92211995630:web:186a26085329fc607724ff",
  measurementId: "G-1EBPP36F59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
