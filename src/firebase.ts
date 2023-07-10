// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBszDhSVBnAw4a0LJx6ytyv7ghkjMRpkSs",
  authDomain: "restaurant-290ac.firebaseapp.com",
  projectId: "restaurant-290ac",
  storageBucket: "restaurant-290ac.appspot.com",
  messagingSenderId: "815081696363",
  appId: "1:815081696363:web:67b82c9adc93af18c0552e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default getFirestore;
