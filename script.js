// 1. Show splash screen for 3 seconds, then hide and show login
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("login-container").style.display = "flex";
    }, 3000); // 3000 milliseconds = 3 seconds
});

// 2. Input Validation and Button Activation
const userInput = document.getElementById("user-input");
const continueBtn = document.getElementById("continue-btn");
const msgBox = document.getElementById("msg-box");

userInput.addEventListener("input", () => {
    // Enable button if user types more than 3 characters
    if (userInput.value.trim().length > 3) {
        continueBtn.removeAttribute("disabled");
        continueBtn.classList.add("active");
    } else {
        continueBtn.setAttribute("disabled", "true");
        continueBtn.classList.remove("active");
    }
});

// 3. Form Submission Action
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const value = userInput.value.trim();
    
    msgBox.style.color = "#00ffcc";
    msgBox.innerText = `Sending OTP to ${value}...`;
});

// 4. Google Login Button Action
document.getElementById("google-btn").addEventListener("click", () => {
    alert("Google Sign-In integration coming soon!");
});
