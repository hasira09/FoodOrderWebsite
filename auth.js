// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAAMwzNLN5re4eqKG2f88BacXKT_xk2Yo",
    authDomain: "foodmart-6a24d.firebaseapp.com",
    projectId: "foodmart-6a24d",
    storageBucket: "foodmart-6a24d.appspot.com",
    messagingSenderId: "930332133537",
    appId: "1:930332133537:web:ab8304e0002b68b88488e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("log-btn").addEventListener('click', function() {
    const loginEmail = document.getElementById("log-email").value;
    const loginPassword = document.getElementById("log-pw").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            document.getElementById("result-box").style.display = "inline";
            document.getElementById("login-div").style.display = "none";
            document.getElementById("result").innerHTML = "Welcome Back" + log - email + "Logged in Successfully";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            document.getElementById("result-box").style.display = "inline";
            document.getElementById("login-div").style.display = "none";
            document.getElementById("result").innerHTML = "Wrong Credentials<br>" + errorMessage;
        });




});