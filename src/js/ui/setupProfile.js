import { getProfile } from "../api/getProfile.js";
import { renderProfile } from "./renderProfile.js";
import { setupAuthNav } from "./authNav.js";
import { setupEditProfileHandler } from "./editProfileHandler.js";
import { setupEditListingHandler } from "./editListingHandler.js";

export const setupProfile = async () => {
    const params = new URLSearchParams(window.location.search)
    const queryName = params.get("name")

    const user = JSON.parse(localStorage.getItem("user"))
    const ownName = user?.name

    const profileName = queryName || ownName

    if (!profileName) return

    try {
        const profile = await getProfile(profileName)

        const isOwnProfile = profile.name === ownName

        if (isOwnProfile) {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    ...user,
                    ...profile,
                })
            );

            setupAuthNav()
        }

        renderProfile(profile, isOwnProfile)
        if (isOwnProfile) {
            setupEditProfileHandler(profile)
            setupEditListingHandler(profile.listings || [])
        }

        document.querySelectorAll(".profile-listing").forEach((card) => {
            card.addEventListener("click", (event) => {

                if (event.target.closest(".edit-listing-btn")) return;

                const id = card.dataset.id;

                window.history.pushState({}, "", `/listing?id=${id}`)
                window.dispatchEvent(new PopStateEvent("popstate"))
            })
        })

    } catch (error) {
        console.error(error)
    }
}