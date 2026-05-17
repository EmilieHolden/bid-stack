import { bidCard } from "../components/index.js";

export const renderListing = (listing) => {
  const container = document.getElementById("listing-container");

  if (!container) return;

  const token = localStorage.getItem("token");

  const media = listing.media?.length
    ? listing.media
    : [{ url: "https://placehold.net/600x600.png", alt: listing.title }];

  const thumbnails = media
    .map(
      (image, index) => `
        <img
          src="${image.url}"
          alt="${image.alt || listing.title}"
          class="listing-thumbnail h-16 w-16 cursor-pointer rounded-lg object-cover transition
          opacity-60
          hover:opacity-100
          ${index === 0 ? "opacity-100" : ""}"
        />
      `
    )
    .join("");

  const highestBid =
    listing.bids?.length > 0
      ? Math.max(...listing.bids.map((bid) => bid.amount))
      : 0;

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
        `;

  container.innerHTML = `
    <a href="/listings" class="mb-4 block text-sm text-purple-300 hover:underline" data-link>
      <i class="fa-light fa-arrow-left"></i> Back to listings
    </a>

    <h1 class="font-heading mb-6 text-3xl font-bold text-white">
      ${listing.title}
    </h1>

    <section class="space-y-8">
      <div class="flex flex-col gap-3">
        <img
          src="${media[0].url || "https://placehold.net/600x600.png"}"
          alt="${media[0].alt || listing.title}"
          class="main-listing-image max-h-[520px] w-full rounded-xl object-cover"
        />

        ${media.length > 1
      ? `
              <div class="flex gap-2">
                ${thumbnails}
              </div>
            `
      : ""
    }
      </div>

      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <p class="mb-6 text-lg text-white">
            ${listing.description || "No description"}
          </p>
          <a href="/profile?name=${listing.seller?.name}" data-link>
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
          <h3 class="font-heading mb-4 text-xl font-bold text-white">
            Active bids
          </h3>
          <div class="flex flex-col gap-3">${bidsHtml}</div>
        </div>
      </div>

      ${token
      ? `
            <form id="bid-form" class="mt-6 flex gap-2">
              <input
                type="number"
                name="amount"
                min="${highestBid + 1}"
                required
                class="input flex-1"
                placeholder="Minimum bid: ${highestBid + 1}$"
              />
              <button type="submit" class="btn">Place bid</button>
            </form>

            <p id="bid-message" class="text-sm text-alert-red"></p>
          `
      : `
            <p class="text-light-grey mt-6 text-sm">
              Log in to place a bid.
            </p>
          `
    }
    </section>
  `;

  const thumbnailsElements = container.querySelectorAll(".listing-thumbnail");
  const mainImage = container.querySelector(".main-listing-image");

  thumbnailsElements.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      mainImage.src = thumbnail.src;
      mainImage.alt = thumbnail.alt;

      thumbnailsElements.forEach((thumb) => {
        thumb.classList.remove("opacity-100");
      });

      thumbnail.classList.add("opacity-100");
    });
  });
};