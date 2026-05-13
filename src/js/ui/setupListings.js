import { getListings } from "../api/getListings.js";
import { renderListings } from "./renderListings.js";

export const setupListings = async () => {
    const container = document.getElementById("listings-container")
    const searchInput = document.getElementById("search-input")
    const sortSelect = document.getElementById("sort-select")

    if (!container) return

    try {
        const listings = await getListings()

        const applyFiltersAndSort = () => {
            const searchValue = searchInput?.value.toLowerCase() || ""
            const sortValue = sortSelect?.value || "newest"

            let filteredListings = listings.filter((listing) => {
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

            if (sortValue === "newest") {
                filteredListings.sort(
                    (a, b) => new Date(b.created) - new Date(a.created)
                );
            }

            if (sortValue === "ending-soon") {
                filteredListings.sort(
                    (a, b) => new Date(a.endsAt) - new Date(b.endsAt)
                );
            }

            if (sortValue === "highest-bid") {
                filteredListings.sort((a, b) => {
                    const highestA = a.bids?.length
                        ? Math.max(...a.bids.map((bid) => bid.amount))
                        : 0

                    const highestB = b.bids?.length
                        ? Math.max(...b.bids.map((bid) => bid.amount))
                        : 0

                    return highestB - highestA
                })
            }

            renderListings(filteredListings)
        }

        applyFiltersAndSort()

        searchInput?.addEventListener("input", applyFiltersAndSort)
        sortSelect?.addEventListener("change", applyFiltersAndSort)
    } catch (error) {
        console.error(error)
        container.innerHTML = `<p class="text-alert-red">Could not load listings.</p>`
    }
}