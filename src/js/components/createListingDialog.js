import { imageUrlInput } from "./imageUrlInput.js";

export const createListingDialog = () => {
  return `
    <dialog
      id="create-listing-dialog"
      class="fixed inset-0 z-[9999] m-auto w-[90%] max-w-xl rounded-2xl bg-black p-6 text-white backdrop:bg-black/70"
    >
      <form id="create-listing-form" class="flex w-full max-w-xl flex-col gap-4">
        <div class="flex items-center justify-between">
          <h2 class="font-heading text-3xl font-bold">Add new listing</h2>
          <button type="button" id="close-create-listing" class="text-2xl">×</button>
        </div>

        <div class="flex flex-col gap-1">
          <label for="listing-title">Title</label>
          <input id="listing-title" name="title" required class="input" />
        </div>

        <div class="flex flex-col gap-1">
          <label for="listing-description">Description</label>
          <textarea id="listing-description" name="description" class="input min-h-28"></textarea>
        </div>

        <div class="flex flex-col gap-1">
          <label>Image URL</label>
          <div id="listing-images" class="flex flex-col gap-2">
            ${imageUrlInput()}
          </div>
        </div>

        <button
          type="button"
          id="add-image-field"
          class="btn w-full text-center"
        >
          + Add another image
        </button>

        <div class="flex flex-col gap-1">
          <label for="listing-tags">Tags</label>
          <input id="listing-tags" name="tags" class="input" placeholder="vintage, decor, handmade" />
        </div>

        <div class="flex flex-col gap-1">
          <label for="listing-end-date">Date to end listing</label>
          <input id="listing-end-date" name="endsAt" type="datetime-local" required class="input" />
        </div>

        <div id="create-listing-message"></div>

        <button type="submit" class="btn w-fit">Create listing</button>
      </form>
    </dialog>
  `;
}

export const setupCreateListingImages = () => {
  const addButton = document.getElementById("add-image-field");
  const imagesContainer = document.getElementById("listing-images");

  if (!addButton || !imagesContainer) return;

  const updateAddButton = () => {
    addButton.disabled = imagesContainer.children.length >= 8;
  };

  imagesContainer.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-image-input-btn");

    if (!removeButton) return;

    removeButton.closest(".image-url-input").remove();

    if (imagesContainer.children.length === 0) {
      imagesContainer.insertAdjacentHTML("beforeend", imageUrlInput());
    }

    updateAddButton();
  });

  addButton.addEventListener("click", () => {
    if (imagesContainer.children.length >= 8) return;

    imagesContainer.insertAdjacentHTML("beforeend", imageUrlInput());

    updateAddButton();
  });

  updateAddButton();
}