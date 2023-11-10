// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDa3XcnEqqh3LMUmbXV9W8CTtpEDpfo6LQ",
  authDomain: "blog-7ce8a.firebaseapp.com",
  projectId: "blog-7ce8a",
  storageBucket: "blog-7ce8a.appspot.com",
  messagingSenderId: "927335067837",
  appId: "1:927335067837:web:80dcf78f0a019ef53dc7d4",
  measurementId: "G-ME4QKRZSZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();

