import { createBid } from "../api/createBid";
import { setupListing } from "./setupListing";
import { getProfile } from "../api/getProfile.js";
import { setupAuthNav } from "./authNav.js";

export const setupBidHandler = (listingId) => {
    const bidForm = document.getElementById("bid-form")
    const message = document.getElementById("bid-message")

    if (!bidForm) return;

    bidForm.addEventListener("submit", async (event) => {
        event.preventDefault()

        const formData = new FormData(bidForm)
        const amount = Number(formData.get("amount"))

        try {
            await createBid(listingId, amount)

            const user = JSON.parse(localStorage.getItem("user"))

            const updatedCredit = await getProfile(user.name)

            localStorage.setItem(
                "user",
                JSON.stringify({
                    ...user,
                    ...updatedCredit,
                })
            )

            setupAuthNav()

            bidForm.reset()

            await setupListing()
        } catch (error) {
            if (message) {
                message.textContent = error.message
            }

            console.error(error)
        }
    })
}