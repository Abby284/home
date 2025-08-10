
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnawuUn4uRnyCeIPyB-tGxcPzvOffSbP0",
  authDomain: "swipeflix-7aefa.firebaseapp.com",
  projectId: "swipeflix-7aefa",
  storageBucket: "swipeflix-7aefa.firebasestorage.app",
  messagingSenderId: "735573489927",
  appId: "1:735573489927:web:dbe369898166b2ad766da2",
  measurementId: "G-6LDEVQGBD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);
