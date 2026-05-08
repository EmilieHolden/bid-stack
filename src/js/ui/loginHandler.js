import { loginUser } from "../api/login.js";

export function setupLoginHandler() {
    const loginForm = document.getElementById("login-form");
    const messageContainer = document.getElementById("message-container");

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

            window.location.href = "/listings";
        } catch (error) {
            messageContainer.textContent = error.message;
        }
    });
}