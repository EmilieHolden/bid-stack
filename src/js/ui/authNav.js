import { getProfile } from "../api/getProfile.js";

export const setupAuthNav = async () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"))

    if (token && user?.name && user.credits === undefined) {
        const profile = await getProfile(user.name)

        localStorage.setItem(
            "user",
            JSON.stringify({
                ...user,
                ...profile,
            })
        )
    }

    const updatedUser = JSON.parse(localStorage.getItem("user"))
    const credits = updatedUser?.credits;

    document.querySelectorAll(".auth-logged-in").forEach((element) => {
        element.classList.toggle("hidden", !token)
    });

    document.querySelectorAll(".auth-logged-out").forEach((element) => {
        element.classList.toggle("hidden", !!token)
    });

    document.querySelectorAll(".user-credits").forEach((element) => {
        element.textContent = credits !== undefined ? `$${credits}` : ""
    })
}