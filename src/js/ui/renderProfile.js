export function renderProfile(profile, isOwnProfile) {
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
                <article class="listing-card flex flex-col gap-2 profile-listing p-2" data-id="${listing.id}">
                  <h2 class="font-heading text-white">
                    ${listing.title}
                  </h2>
  
                  <p class="text-light-grey text-sm">
                    ${listing.description || "No description"}
                  </p>
                  <div class="flex">
                  ${isOwnProfile
              ? `<button class="edit-listing-btn btn-secondary text-xs" data-id="${listing.id}">Edit listing
                                  </button>`
              : ""
            }
                  </div>  
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
    `
}