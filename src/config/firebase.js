import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxTsUQz1zB9pbWqIAeipBuwwRqCMJg3eQ",
  authDomain: "ecommerce-portfolio-868d5.firebaseapp.com",
  projectId: "ecommerce-portfolio-868d5",
  storageBucket: "ecommerce-portfolio-868d5.appspot.com",
  messagingSenderId: "446781617531",
  appId: "1:446781617531:web:a2338ea63109a98a7cf9de",
  measurementId: "G-0QZ91YED41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
