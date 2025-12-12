// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPxZNC_cZ0b5XMw3ydvm_89sZTkqHJKVA",
  authDomain: "authentication-project1-8c06a.firebaseapp.com",
  projectId: "authentication-project1-8c06a",
  storageBucket: "authentication-project1-8c06a.firebasestorage.app",
  messagingSenderId: "1046478929078",
  appId: "1:1046478929078:web:3c50341c580c3176c77a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth 