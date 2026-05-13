import { loginUser } from "../api/login.js";

export function setupLoginHandler() {
    const loginForm = document.getElementById("login-form");
    const messageContainer = document.getElementById("login-message");

    if (!loginForm) return;

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);

        const userData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            const user = await loginUser(userData);

            localStorage.setItem("token", user.accessToken);
            localStorage.setItem("user", JSON.stringify(user));

            history.pushState({}, "", "/listings");
            window.dispatchEvent(new PopStateEvent("popstate"));
        } catch (error) {
            messageContainer.textContent = error.message;
        }
    });
}