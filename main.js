  
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";  
const firebaseConfig = {
    apiKey: "AIzaSyBULkoHUEnrTlDTNI2XcNqUGvYtFrgVT-k",
    authDomain: "furnihub-co.firebaseapp.com",
    projectId: "furnihub-co",
    storageBucket: "furnihub-co.appspot.com",
    messagingSenderId: "384928862106",
    appId: "1:384928862106:web:5ab6a5cfa6b2c7a6353423"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById('google-login-btn');
  googleLogin.addEventListener('click',function() {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = 'Furnihub/test.html';


  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  })