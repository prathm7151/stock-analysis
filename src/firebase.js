// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-q9U585jAkKz0aCPw3gm87dpO5fnEhk8",
    authDomain: "stock-analysis-1c842.firebaseapp.com",
    projectId: "stock-analysis-1c842",
    storageBucket: "stock-analysis-1c842.firebasestorage.app",
    messagingSenderId: "632079957271",
    appId: "1:632079957271:web:5523da2c7816d041174b52",
    databaseURL: "https://stock-analysis-1c842-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
