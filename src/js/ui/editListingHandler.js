import { editListingDialog } from "../components/editListingDialog.js";
import { editListing } from "../api/editListing.js";
import { deleteListing } from "../api/deleteListing.js";
import { setupProfile } from "./setupProfile.js";
import { userFeedbackMessage } from "../components/userFeedbackMessage.js";

export const setupEditListingHandler = (listings) => {
    if (!document.getElementById("edit-listing-dialog")) {
        document.body.insertAdjacentHTML("beforeend", editListingDialog());
    }

    const dialog = document.getElementById("edit-listing-dialog");
    const form = document.getElementById("edit-listing-form");
    const closeBtn = document.getElementById("close-edit-listing");
    const deleteBtn = document.getElementById("delete-listing-btn");
    const messageContainer = document.getElementById("edit-listing-message");


    document.querySelectorAll(".edit-listing-btn").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation();

            const listingId = button.dataset.id;
            const listing = listings.find((item) => item.id === listingId);

            if (!listing) return;

            form.id.value = listing.id;
            form.title.value = listing.title || "";
            form.description.value = listing.description || "";
            form.imageUrl.value = listing.media?.[0]?.url || "";

            dialog.showModal();
        });
    });

    closeBtn?.addEventListener("click", () => dialog.close())

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const id = formData.get("id");

        const listingData = {
            title: formData.get("title"),
            description: formData.get("description"),
        };

        const imageUrl = formData.get("imageUrl")

        if (imageUrl) {
            listingData.media = [
                {
                    url: imageUrl,
                    alt: formData.get("title"),
                },
            ];
        }

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