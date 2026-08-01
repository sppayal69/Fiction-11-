import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration from your screenshot
const firebaseConfig = {
    apiKey: "AIzaSyAuzFmnf3V6A-Vb67Z_Zl8g1yVw7G9X7zU",
    authDomain: "://firebaseapp.com",
    projectId: "fiction-11",
    storageBucket: "://appspot.com",
    messagingSenderId: "96916072215",
    appId: "1:96916072215:web:193bc2f50d755490ef497a",
    measurementId: "G-Z28JWTNW96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// DOM Elements
const splashScreen = document.getElementById("splash-screen");
const loginContainer = document.getElementById("login-container");
const loginScreen = document.getElementById("login-screen");
const otpScreen = document.getElementById("otp-screen");
const userInput = document.getElementById("user-input");
const continueBtn = document.getElementById("continue-btn");
const otpTargetText = document.getElementById("otp-target-text");
const msgBox = document.getElementById("msg-box");

// 1. Splash Screen Timer
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        splashScreen.style.display = "none";
        loginContainer.style.display = "flex";
    }, 3000);
});

// 2. Enable/Disable Continue Button
userInput.addEventListener("input", () => {
    if (userInput.value.trim().length > 3) {
        continueBtn.removeAttribute("disabled");
        continueBtn.classList.add("active");
    } else {
        continueBtn.setAttribute("disabled", "true");
        continueBtn.classList.remove("active");
    }
});

// 3. Action when clicking Continue (Switch to OTP screen)
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const value = userInput.value.trim();
    
    // Switch Views
    loginScreen.style.display = "none";
    otpScreen.style.display = "block";
    otpTargetText.innerText = `An OTP has been sent to: ${value}`;
    msgBox.innerText = "";
});

// 4. Back button from OTP screen
document.getElementById("back-btn").addEventListener("click", () => {
    otpScreen.style.display = "none";
    loginScreen.style.display = "block";
    msgBox.innerText = "";
});

// 5. Google Sign-In Functionality
document.getElementById("google-btn").addEventListener("click", () => {
    msgBox.style.color = "#00ffcc";
    msgBox.innerText = "Opening Google Sign-In...";
    
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            msgBox.style.color = "#00ffcc";
            msgBox.innerText = `Welcome, ${user.displayName}! Login Successful.`;
            alert(`Logged in successfully as ${user.email}`);
            // Here you can redirect the user to the gaming dashboard later
        })
        .catch((error) => {
            msgBox.style.color = "#ff3333";
            msgBox.innerText = `Google Error: ${error.message}`;
        });
});

// 6. Dummy OTP Verification Action
document.getElementById("otp-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const otpVal = document.getElementById("otp-input").value;
    if(otpVal.length === 6) {
        msgBox.style.color = "#00ffcc";
        msgBox.innerText = "Verifying OTP... Success!";
        alert("Login Successful with OTP!");
    } else {
        msgBox.style.color = "#ff3333";
        msgBox.innerText = "Please enter a valid 6-digit OTP.";
    }
});
