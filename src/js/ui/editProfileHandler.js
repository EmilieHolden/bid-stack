import { editProfileDialog } from "../components/editProfileDialog.js";
import { editProfile } from "../api/editProfile.js";
import { setupProfile } from "./setupProfile.js";

export const setupEditProfileHandler = (profile) => {
    if (!document.getElementById("edit-profile-dialog")) {
        document.body.insertAdjacentHTML("beforeend", editProfileDialog())
    }

    const dialog = document.getElementById("edit-profile-dialog")
    const openBtn = document.querySelector(".open-edit-profile")
    const closeBtn = document.getElementById("close-edit-profile")
    const form = document.getElementById("edit-profile-form")
    const message = document.getElementById("edit-profile-message")

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

        const profileData = {
            bio: formData.get("bio"),
            avatar: {
                url: formData.get("avatarUrl"),
                alt: `${profile.name} avatar`,
            },
            banner: {
                url: formData.get("bannerUrl"),
                alt: `${profile.name} banner`,
            },
        }

        try {
            await editProfile(profile.name, profileData)

            dialog.close()
            await setupProfile()
        } catch (error) {
            message.textContent = error.message
        }
    })
}