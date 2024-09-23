// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIwMcR_MFsgUhUk-KFChh4A-8gC5M8d5o",
  authDomain: "orcamentobrendho-9cf01.firebaseapp.com",
  projectId: "orcamentobrendho-9cf01",
  storageBucket: "orcamentobrendho-9cf01.appspot.com",
  messagingSenderId: "749468063014",
  appId: "1:749468063014:web:a4e6dafc7412dadb965de7",
  measurementId: "G-X759W408KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the necessary components
export { auth, googleProvider, signInWithPopup };
