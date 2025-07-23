import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAeYYxrATpRGF4lN1tD0iZNbAwYKhgsaE8",
  authDomain: "ceksitus-fb5e6.firebaseapp.com",
  projectId: "ceksitus-fb5e6",
  storageBucket: "ceksitus-fb5e6.firebasestorage.app",
  messagingSenderId: "440560019732",
  appId: "1:440560019732:web:9c1cbbdc0d5fa3b5ce7a01",
  databaseURL: "https://ceksitus-fb5e6-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
