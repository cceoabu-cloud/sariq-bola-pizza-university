// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA12QrqiVyQQ5KhGe_C6rUCpIzuToBm5bc",
  authDomain: "sariq-bola-pizza-university.firebaseapp.com",
  projectId: "sariq-bola-pizza-university",
  storageBucket: "sariq-bola-pizza-university.appspot.com",
  messagingSenderId: "653909202624",
  appId: "1:653909202624:web:33589a64a09471223476c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
