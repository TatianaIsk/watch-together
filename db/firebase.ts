// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD8kbv-baqFIiJXvisyQSiLA-LfuiOPdA",
  authDomain: "watch-together-7644d.firebaseapp.com",
  projectId: "watch-together-7644d",
  storageBucket: "watch-together-7644d.appspot.com",
  messagingSenderId: "454790268593",
  appId: "1:454790268593:web:069bdfb482676f6ee5c490",
  measurementId: "G-LKRKXR9743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);