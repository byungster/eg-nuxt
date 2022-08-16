// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyAOlGhvA1RktMkUaShPHjil0PWneemonZk",
    authDomain: "eg-nuxt-firebase.firebaseapp.com",
    projectId: "eg-nuxt-firebase",
    storageBucket: "eg-nuxt-firebase.appspot.com",
    messagingSenderId: "121876348035",
    appId: "1:121876348035:web:6c000ae8e5a2959ba4efb6",
    measurementId: "G-FRKE8YTYSC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


export default db