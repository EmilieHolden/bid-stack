import { imageUrlInput } from "./imageUrlInput.js";

export const editListingDialog = () => {
  return `
    <dialog id="edit-listing-dialog" class="fixed inset-0 z-[9999] m-auto w-[90%] max-w-xl rounded-2xl bg-black p-6 text-white backdrop:bg-black/70">
      <form id="edit-listing-form" class="flex w-full flex-col gap-4">
        <div class="flex items-center justify-between">
          <h2 class="font-heading text-3xl font-bold">Edit listing</h2>
          <button type="button" id="close-edit-listing" class="text-2xl">×</button>
        </div>

        <input type="hidden" name="id" />

        <div class="flex flex-col gap-1">
          <label>Title</label>
          <input name="title" required class="input" />
        </div>

        <div class="flex flex-col gap-1">
          <label>Description</label>
          <textarea name="description" class="input min-h-28"></textarea>
        </div>

        <div class="flex flex-col gap-1">
          <label>Image URLs</label>

          <div id="edit-listing-images" class="flex flex-col gap-2">
            ${imageUrlInput()}
          </div>
        </div>

        <button
          type="button"
          id="add-edit-image-field"
          class="btn w-full text-center"
        >
          + Add another image
        </button>

        <div id="edit-listing-message"></div>

        <div class="flex gap-3">
          <button type="submit" class="btn">
            Save changes
          </button>

          <button type="button" id="delete-listing-btn" class="btn-secondary">
            Delete listing
          </button>
        </div>
      </form>
    </dialog>
  `;
};

export const setupEditListingImages = () => {
  const addButton = document.getElementById("add-edit-image-field");
  const imagesContainer = document.getElementById("edit-listing-images");

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