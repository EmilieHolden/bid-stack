import {
    createListingDialog,
    setupCreateListingImages,
} from "../components/createListingDialog.js";
import { createListing } from "../api/createListing.js";
import { userFeedbackMessage } from "../components/userFeedbackMessage.js";

export function setupCreateListingDialog() {
    if (!document.getElementById("create-listing-dialog")) {
        document.body.insertAdjacentHTML("beforeend", createListingDialog());
        setupCreateListingImages();
    }

    const dialog = document.getElementById("create-listing-dialog");
    const form = document.getElementById("create-listing-form");
    const messageContainer = document.getElementById("create-listing-message");
    const closeBtn = document.getElementById("close-create-listing");
    const openButtons = document.querySelectorAll(".open-create-listing");

    if (!dialog || !form) return;

    openButtons.forEach((button) => {
        if (button.dataset.listenerAttached === "true") return;

        button.dataset.listenerAttached = "true";

        button.addEventListener("click", () => {
            dialog.showModal();
        });
    });

    if (closeBtn && closeBtn.dataset.listenerAttached !== "true") {
        closeBtn.dataset.listenerAttached = "true";

        closeBtn.addEventListener("click", () => {
            dialog.close();
        });
    }

    if (form.dataset.listenerAttached === "true") return;

    form.dataset.listenerAttached = "true";

    form.addEventListener("submit", async (event) => {

        console.log("FORM SUBMITTED");
        event.preventDefault();

        const formData = new FormData(form);

        const imageUrls = formData
            .getAll("imageUrl")
            .filter((url) => url.trim() !== "");

        const listingData = {
            title: formData.get("title"),
            description: formData.get("description"),
            endsAt: new Date(formData.get("endsAt")).toISOString(),
        };

        if (imageUrls.length > 0) {
            listingData.media = imageUrls.map((url) => ({
                url,
                alt: formData.get("title"),
            }));
        }

        try {
            await createListing(listingData);

            form.reset();

            const imagesContainer = document.getElementById("listing-images");
            const addButton = document.getElementById("add-image-field");

            if (imagesContainer) {
                const firstImageInput = imagesContainer.querySelector("input");

                imagesContainer
                    .querySelectorAll(".image-url-input")
                    .forEach((wrapper, index) => {
                        if (index === 0) {
                            firstImageInput.value = "";
                        } else {
                            wrapper.remove();
                        }
                    });
            }

            if (addButton) {
                addButton.disabled = false;
            }

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