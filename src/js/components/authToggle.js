export function authToggle() {
  return `
      <div class="border-[0.5px] border-light-grey mb-6 flex rounded-md p-1">
        <button id="show-login" type="button" class="flex-1 rounded px-4 py-2 text-sm font-medium">Login</button>
        <button id="show-register" type="button" class="flex-1 rounded px-4 py-2 text-sm font-medium">Register</button>
      </div>
    `;
}

export function setupAuthToggle() {
  const showRegisterBtn = document.getElementById("show-register");
  const showLoginBtn = document.getElementById("show-login");
  const registerForm = document.getElementById("register-form-wrapper");
  const loginForm = document.getElementById("login-form-wrapper");

  if (!showRegisterBtn || !showLoginBtn || !registerForm || !loginForm) return;

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

  showRegisterBtn.addEventListener("click", showRegister);
  showLoginBtn.addEventListener("click", showLogin);

  showLogin();
}