// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB24D8PM6FqmrJc8bccuAP3rHn10wUucr4",
  authDomain: "share-and-care-a0a4a.firebaseapp.com",
  projectId: "share-and-care-a0a4a",
  storageBucket: "share-and-care-a0a4a.firebasestorage.app",
  messagingSenderId: "701463859476",
  appId: "1:701463859476:web:a02718287b3b61fa143201"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);