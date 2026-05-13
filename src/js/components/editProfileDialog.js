export const editProfileDialog = () => {
    return `
      <dialog id="edit-profile-dialog" class="fixed inset-0 z-[9999] m-auto w-[90%] max-w-xl rounded-2xl bg-black p-6 text-white backdrop:bg-black/70">
        <form id="edit-profile-form" class="flex w-full flex-col gap-4">
          <div class="flex items-center justify-between">
            <h2 class="font-heading text-3xl font-bold">Edit profile</h2>
            <button type="button" id="close-edit-profile" class="text-2xl">×</button>
          </div>
  
          <div class="flex flex-col gap-1">
            <label for="edit-avatar">Update avatar photo</label>
            <input id="edit-avatar" name="avatarUrl" type="url" class="input" />
          </div>
  
          <div class="flex flex-col gap-1">
            <label for="edit-banner">Update banner</label>
            <input id="edit-banner" name="bannerUrl" type="url" class="input" />
          </div>
  
          <div class="flex flex-col gap-1">
            <label for="edit-bio">Edit bio</label>
            <textarea id="edit-bio" name="bio" class="input min-h-28"></textarea>
          </div>
  
          <p id="edit-profile-message" class="text-sm"></p>
  
          <button type="submit" class="btn w-fit">
            Save changes
          </button>
        </form>
      </dialog>
    `;
};