// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB41WTPD6Gw7HUugoNihDJ59rIpE7yzHI",
  authDomain: "gaming-a6194.firebaseapp.com",
  projectId: "gaming-a6194",
  storageBucket: "gaming-a6194.appspot.com",
  messagingSenderId: "579847737911",
  appId: "1:579847737911:web:acc11dceebabf45d3be5b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);