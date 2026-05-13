import { getListings } from "../api/getListings.js";
import { renderListings } from "./renderListings.js";

export const setupListings = async () => {
    const container = document.getElementById("listings-container")
    const searchInput = document.getElementById("search-input")

    if (!container) return;

    try {
        const listings = await getListings()
        renderListings(listings)

        searchInput?.addEventListener("input", (event) => {
            const searchValue = event.target.value.toLowerCase()

            const filteredListings = listings.filter((listing) => {
                const title = listing.title?.toLowerCase() || ""
                const description = listing.description?.toLowerCase() || ""
                const seller = listing.seller?.name?.toLowerCase() || ""
                const tags = listing.tags?.join(" ").toLowerCase() || ""

                return (
                    title.includes(searchValue) ||
                    description.includes(searchValue) ||
                    seller.includes(searchValue) ||
                    tags.includes(searchValue)
                )
            })

            renderListings(filteredListings)
        })
    } catch (error) {
        console.error(error);
        container.innerHTML = `<p class="text-alert-red">Could not load listings.</p>`
    }
}