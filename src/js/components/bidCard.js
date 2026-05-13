export const bidCard = (bid) => {
  return `
      <div class="rounded-xl bg-dark-grey p-5">
        <p class="font-bold text-white">
          ${bid.bidder?.name || "User"}
        </p>
        <p class="text-light-grey text-sm">Bid amount</p>
        <p class="text-xl font-bold text-white">
          ${bid.amount}$
        </p>
      </div>
    `
}