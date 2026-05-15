export const imageUrlInput = (value = "") => {
  return `
      <div class="image-url-input flex items-center gap-2">
        <input
          name="imageUrl"
          type="url"
          class="input flex-1"
          value="${value}"
        />
  
        <button
          type="button"
          class="icon-trash-btn remove-image-input-btn bg-dark-grey text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <i class="fa-regular fa-trash"></i>
        </button>
      </div>
    `;
};