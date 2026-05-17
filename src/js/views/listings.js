export const listingsView = () => {
  return `
      <main class="mx-auto w-full max-w-lg px-4 py-6">
      <h2 class="font-heading mb-6 text-3xl font-bold text-white">
        Listings
      </h2>

      <form id="search-form" class="mb-6">
        <label for="search-input" class="sr-only">Search listings</label>

        <input
          id="search-input"
          name="search"
          type="search"
          placeholder="Search listings..."
          class="input w-full"
        />
      </form>
      <div class="mb-6">
  <label for="sort-select" class="sr-only">Sort listings</label>

  <select id="sort-select" class="input w-full">
    <option value="newest">Newest</option>
    <option value="ending-soon">Ending soon</option>
    <option value="highest-bid">Highest bid</option>
  </select>
</div>
        <div id="listings-container" class="flex flex-col gap-2"></div>
      </main>
    `;
}