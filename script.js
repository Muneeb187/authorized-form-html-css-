// Sign In Button
document.getElementById("signInBtn").onclick = function () {
    showMessage("Signing you in...", "success");
};

// Forgot Password
document.getElementById("forgotPass").onclick = function () {
    showMessage("Redirecting to password recovery...", "info");
};

// Email Code
document.getElementById("emailCode").onclick = function () {
    showMessage("Verification code sent to your email.", "success");
};

// Switch Account
document.getElementById("switchAccount").onclick = function () {
    showMessage("Switching account...", "info");
};

// Message function
function showMessage(text, type) {
    let msgBox = document.getElementById("messageBox");

    if (!msgBox) {
        msgBox = document.createElement("div");
        msgBox.id = "messageBox";
        document.querySelector(".container").prepend(msgBox);
    }

    msgBox.className = `message ${type}`;
    msgBox.innerText = text;

    setTimeout(() => {
        msgBox.remove();
    }, 3000);
}
