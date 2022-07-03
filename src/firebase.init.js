// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD5-xfYJN6JLp8yVXvIOTlgsCX08tr0jU",
  authDomain: "react-it-4dbca.firebaseapp.com",
  projectId: "react-it-4dbca",
  storageBucket: "react-it-4dbca.appspot.com",
  messagingSenderId: "245403657738",
  appId: "1:245403657738:web:4f5ca6cbbd4efd2be361f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;