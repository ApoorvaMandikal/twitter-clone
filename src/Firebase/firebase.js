// Import the functions you need from the SDKs you need

import { initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDA1GwCtrIMwaiOWDbC9PYa8rknGgHU6Eg",
    authDomain: "twitter-clone-b6c50.firebaseapp.com",
    projectId: "twitter-clone-b6c50",
    storageBucket: "twitter-clone-b6c50.appspot.com",
    messagingSenderId: "1061781405590",
    appId: "1:1061781405590:web:da59d8c2038ac76791a7b7",
    measurementId: "G-RT43VB48RJ"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

