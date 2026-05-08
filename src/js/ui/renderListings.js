export function renderListings(listings) {
    const container = document.getElementById("listings-container");

    if (!container) return;

    container.innerHTML = "";

    listings.forEach((listing) => {

        const highestBid =
            listing.bids?.length > 0
                ? Math.max(...listing.bids.map((bid) => bid.amount))
                : 0;

        container.innerHTML += `
        <div class="listing-card">
          <div class="w-full">
            <img 
              src="${listing.media?.[0]?.url || "https://placehold.co/600x400"}" 
              alt="${listing.media?.[0]?.alt || listing.title}"
            >
          </div>
  
          <div class="flex w-full flex-col px-3 py-2">
            <div>
              <p class="font-heading text-sm text-white">
                ${listing.title}
              </p>
            </div>
  
            <p class="text-light-grey text-xs">
              ${listing.description || "No description"}
            </p>
  
            <div>
              <p class="text-light-grey text-xs">Current bid</p>
              <p class="text-xl text-white">
                $${highestBid}
              </p>
              <p class="text-light-grey text-xs">
                Ends: ${new Date(listing.endsAt).toLocaleDateString()}
              </p>
            </div>
  
            <button class="btn w-full text-center">
              View product
            </button>
          </div>
        </div>
      `;
    });
}