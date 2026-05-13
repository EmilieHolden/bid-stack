import { registerUser } from "../api/register";
import { userFeedbackMessage } from "../components/userFeedbackMessage";



export function setupRegistrationHandler() {
    const registerForm = document.getElementById("register-form");
    const messageContainer = document.getElementById("register-message");

    if (!registerForm) return;

    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const bannerUrl =
            formData.get("banner") ||
            "https://images.unsplash.com/photo-1777903675832-6da170eee699?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            banner: {
                url: bannerUrl,
                alt: "Banner",
            },
        };

        try {
            await registerUser(userData);

            messageContainer.innerHTML = userFeedbackMessage(
                "success",
                "Registration successfull. You can now log in."
            );

            window.location.href = "/login";
        } catch (error) {
            messageContainer.innerHTML = userFeedbackMessage(
                "error",
                error.message
            );
        }
    });
}