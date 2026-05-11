// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA12QrqiVyOQ5KhGe_C6rUCpIzuToBm5bc",
  authDomain: "sariq-bola-pizza-university.firebaseapp.com",
  projectId: "sariq-bola-pizza-university",
  storageBucket: "sariq-bola-pizza-university.firebasestorage.app",
  messagingSenderId: "653909022624",
  appId: "1:653909022624:web:33589a64a09471223476c5",
  measurementId: "G-00EYH6H8XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
