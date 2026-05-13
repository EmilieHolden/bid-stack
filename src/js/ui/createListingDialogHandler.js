import { createListingDialog } from "../components/createListingDialog.js";
import { createListing } from "../api/createListing.js";
import { userFeedbackMessage } from "../components/userFeedbackMessage.js";

export function setupCreateListingDialog() {
    if (!document.getElementById("create-listing-dialog")) {
        document.body.insertAdjacentHTML("beforeend", createListingDialog());
    }

    const dialog = document.getElementById("create-listing-dialog");
    const form = document.getElementById("create-listing-form");
    const messageContainer = document.getElementById("create-listing-message");
    const closeBtn = document.getElementById("close-create-listing");
    const openButtons = document.querySelectorAll(".open-create-listing");

    if (!dialog || !form) return;

    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            dialog.showModal();
        });
    });

    closeBtn?.addEventListener("click", () => {
        dialog.close();
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        const listingData = {
            title: formData.get("title"),
            description: formData.get("description"),
            endsAt: new Date(formData.get("endsAt")).toISOString(),
        };

        const imageUrl = formData.get("imageUrl");

        if (imageUrl) {
            listingData.media = [
                {
                    url: imageUrl,
                    alt: formData.get("title"),
                },
            ];
        }

        try {
            await createListing(listingData);

            form.reset();
            dialog.close();

            history.pushState({}, "", "/listings");
            window.dispatchEvent(new PopStateEvent("popstate"));
        } catch (error) {
            messageContainer.innerHTML = userFeedbackMessage(
                "error",
                error.message
            );
        }
    });
}