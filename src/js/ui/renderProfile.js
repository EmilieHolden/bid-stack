export const renderProfile = (profile, bids, isOwnProfile) => {
  const container = document.getElementById("profile-container");

  if (!container) return

  const avatarUrl = profile.avatar?.url
  const avatarAlt = profile.avatar?.alt || ""

  const bannerUrl = profile.banner?.url
  const bannerAlt = profile.banner?.alt || `${profile.name} banner`

  const listingsHtml =
    profile.listings?.length > 0
      ? profile.listings
        .map(
          (listing) => `
                <article class="listing-card profile-listing" data-id="${listing.id}">
                <div class="w-full">
            <img class="h-45 w-full rounded-xl object-cover" 
              src="${listing.media?.[0]?.url || "https://placehold.net/600x600.png"}" 
              alt="${listing.media?.[0]?.alt || listing.title}">
              </div>
          <div class="flex w-full flex-col px-3 py-2 justify-between">
          <div>
          <h3 class="font-heading text-white text-sm break-words">
                    ${listing.title}
                  </h3>
  
                  <p class="text-light-grey text-sm break-words line-clamp-2">
                    ${listing.description || "No description"}
                  </p></div>
         
                  <div>
                  ${isOwnProfile
              ? `<button class="edit-listing-btn btn-secondary text-xs" data-id="${listing.id}">Edit listing
                                  </button>`
              : '<a href="/listing?id=${listing.id}" class="btn w-max" data-link>View product</a>'
            }
                  </div></div> 
                  
                </article>
              `
        )
        .join("")
      : `<p class="text-light-grey">
        ${isOwnProfile
        ? "Create your first listing to start selling."
        : "This user has not created any listings yet."
      }
      </p>`

  const activeBidsHtml =
    bids?.length > 0
      ? bids
        .map(
          (bid) => `
                <article class="listing-card flex flex-col gap-2 p-2">
                <div></div>
                  <h2 class="font-heading text-white break-words">
                    ${bid.listing?.title}
                  </h2>
  
                  <p class="text-light-grey text-sm">
                   ${isOwnProfile
              ? "Your bid: $"
              : "Active bid: $"
            }
                    ${bid.amount}
                  </p>
                  <div class="flex">
                  <a href="/listing?id=${bid.listing?.id}" class="btn" data-link">View listing</a>
                  </div>  
                </article>
              `
        )
        .join("")
      : `<p class="text-light-grey">
        ${isOwnProfile
        ? "You don't have any active bids right now."
        : "This user doesn't have any active bids right now."
      }
      </p>`


  container.innerHTML = `
      <section class="relative mb-16">
        <img
          src="${bannerUrl}"
          alt="${bannerAlt}"
          class="h-32 w-full rounded-2xl object-cover"
        />
    
        <img
          src="${avatarUrl}"
          alt="${avatarAlt}"
          class="absolute left-6 -bottom-12 h-24 w-24 rounded-full border-4 border-black object-cover"
        />
      </section>
    
      <section class="mb-8 mt-14 flex flex-col gap-2">
      <div><p class="text-light-grey text-sm">
          ${isOwnProfile ? "My profile" : "Profile"}
        </p>
    
        <h2 class="font-heading text-3xl font-bold text-white">
          ${profile.name}
        </h2>
    
        ${isOwnProfile
      ? `<p class="text-light-grey text-sm">
                Credits: ${profile.credits}
              </p>`
      : ""
    }
    <p>${profile.bio}</p></div>
        
    ${isOwnProfile
      ? `<button class="open-edit-profile btn-secondary w-max">
                   Edit profile
                </button>`
      : ""}
      </section>
    
      <section>
        <h2 class="font-heading mb-4 text-2xl font-bold text-white">
          ${isOwnProfile ? "My listings" : `${profile.name}'s listings`}
        </h2>
    
        <div class="flex flex-col gap-4">
          ${listingsHtml}
        </div>
      </section>
      <section>
        <h2 class="font-heading mb-4 text-2xl font-bold text-white">Active bids</h2>
    
        <div class="flex flex-col gap-4">
          ${activeBidsHtml}
        </div>
      </section>
    `
}