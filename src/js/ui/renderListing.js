import { bidCard } from "../components/index.js";

export const renderListing = (listing) => {
  const container = document.getElementById("listing-container")

  if (!container) return;

  const imageUrl = listing.media?.[0]?.url || "https://placehold.co/600x400"
  const imageAlt = listing.media?.[0]?.alt || listing.title

  const highestBid =
    listing.bids?.length > 0
      ? Math.max(...listing.bids.map((bid) => bid.amount))
      : 0

  const bidsHtml =
    listing.bids?.length > 0
      ? listing.bids
        .sort((a, b) => b.amount - a.amount)
        .map((bid) => bidCard(bid))
        .join("")
      : `
                <p class="text-light-grey">
                  No bids yet.
                </p>
              `

  container.innerHTML = `
      <a href="/listings" class="mb-4 block text-sm text-purple-300 hover:underline">
        <i class="fa-light fa-arrow-left"></i> Back to listings
      </a>
  
      <h1 class="font-heading mb-6 text-3xl font-bold text-white">
        ${listing.title}
      </h1>
  
      <section class="space-y-8">
        <img
          src="${imageUrl}"
          alt="${imageAlt}"
          class="max-h-[520px] w-full rounded-xl object-cover"
        />
  
        <div class="grid gap-8 md:grid-cols-2">
          <div>
            <p class="mb-6 text-lg text-white">
              ${listing.description || "No description"}
            </p>
           <a href="/profile?name=${listing.seller?.name}">
  Posted by ${listing.seller?.name || "Unknown seller"}
</a>
  
            <p class="text-light-grey text-sm">Current bid</p>
            <p class="mb-4 text-4xl font-bold text-white">
              ${highestBid}$
            </p>
  
            <p class="text-light-grey mb-6 text-sm">
              Ends: ${new Date(listing.endsAt).toLocaleDateString()}
            </p>
          </div>
  
          <div>
          <h3 class="font-heading mb-4 text-xl font-bold text-white">Active bids</h3>
          <div class="flex flex-col gap-3">${bidsHtml}</div>
          </div>
        </div>
        <form id="bid-form" class="mt-6 flex gap-2">
         <input type="number" name="amount" required class="input flex-1" placeholder="Your bid"/>
         <button type="submit" class="btn">Place bid</button>
        </form>
        <p id="bid-message" class="text-sm text-alert-red"></p>
      </section>
    `
}