

import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVGcnJiOtVlN-pTirmaPbJP7BSJ0lbrgg",
  authDomain: "assignment-9-a729b.firebaseapp.com",
  projectId: "assignment-9-a729b",
  storageBucket: "assignment-9-a729b.firebasestorage.app",
  messagingSenderId: "567259003229",
  appId: "1:567259003229:web:ab2047dc632c79988ed0b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);