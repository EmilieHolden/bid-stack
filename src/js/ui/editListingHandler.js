import {
    editListingDialog,
    setupEditListingImages,
} from "../components/editListingDialog.js";
import { imageUrlInput } from "../components/imageUrlInput.js";
import { editListing } from "../api/editListing.js";
import { deleteListing } from "../api/deleteListing.js";
import { setupProfile } from "./setupProfile.js";
import { userFeedbackMessage } from "../components/userFeedbackMessage.js";

export const setupEditListingHandler = (listings) => {
    if (!document.getElementById("edit-listing-dialog")) {
        document.body.insertAdjacentHTML("beforeend", editListingDialog());
        setupEditListingImages();
    }

    const dialog = document.getElementById("edit-listing-dialog");
    const form = document.getElementById("edit-listing-form");
    const closeBtn = document.getElementById("close-edit-listing");
    const deleteBtn = document.getElementById("delete-listing-btn");
    const messageContainer = document.getElementById("edit-listing-message");
    const imagesContainer = document.getElementById("edit-listing-images");

    if (!dialog || !form || !imagesContainer) return;


    document.querySelectorAll(".edit-listing-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();

            const listingId = button.dataset.id;
            const listing = listings.find((item) => item.id === listingId);

            if (!listing) return;

            form.id.value = listing.id;
            form.title.value = listing.title || "";
            form.description.value = listing.description || "";

            imagesContainer.innerHTML = "";

            if (listing.media?.length > 0) {
                listing.media.forEach((image) => {
                    imagesContainer.insertAdjacentHTML("beforeend", imageUrlInput(image.url));
                });
            } else {
                imagesContainer.insertAdjacentHTML("beforeend", imageUrlInput());
            }

            dialog.showModal();
        });
    });

    closeBtn?.addEventListener("click", () => dialog.close());

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const id = formData.get("id");

        const imageUrls = formData
            .getAll("imageUrl")
            .filter((url) => url.trim() !== "");

        const listingData = {
            title: formData.get("title"),
            description: formData.get("description"),
            media: imageUrls.map((url) => ({
                url,
                alt: formData.get("title"),
            })),
        };

        try {
            await editListing(id, listingData);
            dialog.close();

            alert("Listing edited successfully.");

            await setupProfile();
        } catch (error) {
            messageContainer.innerHTML = userFeedbackMessage("error", error.message);
        }
    });

    deleteBtn.onclick = async () => {
        const id = form.id.value;

        if (!id) return;

        try {
            await deleteListing(id);
            dialog.close();

            alert("Listing deleted successfully.");

            await setupProfile();
        } catch (error) {
            messageContainer.innerHTML = userFeedbackMessage("error", error.message);
        }
    };
};