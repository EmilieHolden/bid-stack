const form = document.getElementById("create-listing-form");
const message = document.getElementById("create-listing-message");

if (form) {
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

            window.location.href = "/listings";
        } catch (error) {
            message.textContent = error.message;
        }
    });
}