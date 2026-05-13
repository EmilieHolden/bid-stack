export function createListingDialog() {
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
            <label for="listing-image">URL for photo</label>
            <input id="listing-image" name="imageUrl" type="url" class="input" />
          </div>
  
          <div class="flex flex-col gap-1">
            <label for="listing-tags">Tags</label>
            <input id="listing-tags" name="tags" class="input" placeholder="vintage, decor, handmade" />
          </div>
  
          <div class="flex flex-col gap-1">
            <label for="listing-end-date">Date to end listing</label>
            <input id="listing-end-date" name="endsAt" type="datetime-local" required class="input" />
          </div>
  
          <p id="create-listing-message" class="text-sm text-alert-red"></p>
  
          <button type="submit" class="btn w-fit">Create listing</button>
        </form>
      </dialog>
    `;
}