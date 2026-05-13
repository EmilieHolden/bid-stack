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
            <label>Image URL</label>
            <input name="imageUrl" type="url" class="input" />
          </div>
  
          <p id="edit-listing-message" class="text-sm"></p>
  
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