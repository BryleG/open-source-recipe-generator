// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4bhCOSW0gOjpaGruxXx4OS-2Pe81sh2Y",
  authDomain: "recipe-generator-login.firebaseapp.com",
  projectId: "recipe-generator-login",
  storageBucket: "recipe-generator-login.appspot.com",
  messagingSenderId: "680827562259",
  appId: "1:680827562259:web:25d1df3913c340755b12e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();