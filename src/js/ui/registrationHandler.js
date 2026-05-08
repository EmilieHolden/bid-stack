import { registerUser } from "../api/register";

export function setupRegistrationHandler() {
    const registerForm = document.getElementById("register-form");
    const messageContainer = document.getElementById("message-container");

    if (!registerForm) return;

    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        try {
            await registerUser(userData);

            window.location.href = "/login";
            messageContainer.textContent = "Registration successfull. You can now log in."; //må få den til å vises en plass

        } catch (error) {
            messageContainer.textContent = "Registration failed.";
        }
    });
}