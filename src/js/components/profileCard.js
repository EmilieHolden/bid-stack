export const profileCard = (id) => {
  return `
      <div class="rounded-xl bg-dark-grey p-5">
        <p class="font-bold text-white">
          ${seller.name || "User"}
        </p>
        <p class="text-light-grey text-sm">Bio</p>
        <p class="text-xl font-bold text-white">
          ${seller.bio}$
        </p>
      </div>
    `
}