import { registerUser } from "../api/register";
import { userFeedbackMessage } from "../components/userFeedbackMessage";



export const setupRegistrationHandler = () => {
    const registerForm = document.getElementById("register-form");
    const messageContainer = document.getElementById("register-message");

    if (!registerForm) return;

    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);

        const userBio = formData.get("bio") || "No bio added yet.";

        const avatarUrl = formData.get("avatar") || "https://placehold.net/600x600.png";

        const bannerUrl =
            formData.get("banner") ||
            "https://images.unsplash.com/photo-1673526759327-54f1f5b27322?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const userData = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            bio: userBio,
            avatar: {
                url: avatarUrl,
                alt: "Avatar",
            },
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

            history.pushState({}, "", "/login")
            window.dispatchEvent(new PopStateEvent("popstate"))

        } catch (error) {
            messageContainer.innerHTML = userFeedbackMessage(
                "error",
                error.message
            );
        }
    })
}