// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQXg6sTTJMefrc_ee6Pm3yuRy2fpG-igE",
  authDomain: "todo-app-d1a39.firebaseapp.com",
  projectId: "todo-app-d1a39",
  storageBucket: "todo-app-d1a39.appspot.com",
  messagingSenderId: "756737371777",
  appId: "1:756737371777:web:9a8e5f770804b72543a780",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
