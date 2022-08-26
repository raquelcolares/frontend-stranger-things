
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebaseConfig from './config.js'
const firebaseConfig = {
    apiKey: "AIzaSyB42NMQBK3txCQF7LwNmuxyaOjc3et7Ou4",
    authDomain: "projeto-teste-b40ad.firebaseapp.com",
    projectId: "projeto-teste-b40ad",
    storageBucket: "projeto-teste-b40ad.appspot.com",
    messagingSenderId: "33584617254",
    appId: "1:33584617254:web:30d4ba7bd9986f37f913e7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app