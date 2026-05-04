const showRegisterBtn = document.getElementById("show-register");
const showLoginBtn = document.getElementById("show-login");
const registerForm = document.getElementById("register-form-wrapper");
const loginForm = document.getElementById("login-form-wrapper");

function showRegister() {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    showRegisterBtn.classList.add("bg-ultralight-green", "text-black");
    showLoginBtn.classList.remove("bg-ultralight-green", "text-black");
}

function showLogin() {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");

    showLoginBtn.classList.add("bg-ultralight-green", "text-black");
    showRegisterBtn.classList.remove("bg-ultralight-green", "text-black");
}

if (showRegisterBtn, showLoginBtn, registerForm, loginForm) {
    showRegisterBtn.addEventListener("click", showRegister);
    showLoginBtn.addEventListener("click", showLogin);

    showLogin();
}

