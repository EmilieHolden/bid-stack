export const renderListings = (listings) => {
  const container = document.getElementById("listings-container");

  if (!container) return

  container.innerHTML = ""

  if (listings.length === 0) {
    container.innerHTML = `<p class="text-light-grey">No listings found.</p>`
    return
  }

  listings.forEach((listing) => {

    const highestBid =
      listing.bids?.length > 0
        ? Math.max(...listing.bids.map((bid) => bid.amount))
        : 0;

    container.innerHTML += `
        <div class="listing-card mb-2">
          <div class="w-full">
            <img class="h-45 w-full rounded-xl object-cover" 
              src="${listing.media?.[0]?.url || "https://placehold.net/600x600.png"}" 
              alt="${listing.media?.[0]?.alt || listing.title}"
            >
          </div>
  
          <div class="flex w-full flex-col px-3 py-2 justify-between">
           
              <h3 class="font-heading break-words text-sm text-white">
                ${listing.title}
              </h3>
           
  
            <p class="text-light-grey text-xs break-words line-clamp-2">
              ${listing.description || "No description"}
            </p>
  
            <div class="my-1">
              <p class="text-light-grey text-xs">Current bid</p>
              <p class="text-xl text-white">
                $${highestBid}
              </p>
              <p class="text-light-grey text-xs">
                Ends: ${new Date(listing.endsAt).toLocaleDateString()}
              </p>
            </div>
  
            <a href="/listing?id=${listing.id}" class="btn text-center w-full" data-link>View product</a>
          </div>
        </div>
      `;
  });
}