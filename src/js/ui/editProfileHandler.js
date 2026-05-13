import { editProfileDialog } from "../components/editProfileDialog.js";
import { editProfile } from "../api/editProfile.js";
import { setupProfile } from "./setupProfile.js";
import { userFeedbackMessage } from "../components/userFeedbackMessage.js";

export const setupEditProfileHandler = (profile) => {
    if (!document.getElementById("edit-profile-dialog")) {
        document.body.insertAdjacentHTML("beforeend", editProfileDialog())
    }

    const dialog = document.getElementById("edit-profile-dialog")
    const openBtn = document.querySelector(".open-edit-profile")
    const closeBtn = document.getElementById("close-edit-profile")
    const form = document.getElementById("edit-profile-form")
    const messageContainer = document.getElementById("edit-profile-message")

    if (!openBtn || !dialog || !form) return

    openBtn.addEventListener("click", () => {
        form.bio.value = profile.bio || "";
        form.avatarUrl.value = profile.avatar?.url || ""
        form.bannerUrl.value = profile.banner?.url || ""
        dialog.showModal();
    });

    closeBtn?.addEventListener("click", () => dialog.close())

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form)

        const bannerUrl =
            formData.get("banner") ||
            "https://images.unsplash.com/photo-1777903675832-6da170eee699?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

        const profileData = {
            bio: formData.get("bio"),
            avatar: {
                url: formData.get("avatarUrl"),
                alt: `${profile.name} avatar`,
            },
            banner: {
                url: bannerUrl,
                alt: `${profile.name} banner`,
            },
        }

        try {
            await editProfile(profile.name, profileData)

            dialog.close()
            await setupProfile()
        } catch (error) {
            messageContainer.innerHTML = userFeedbackMessage(
                "error",
                error.message
            );
        }
    })
}