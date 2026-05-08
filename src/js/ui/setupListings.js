import { getListings } from "../api/getListings.js";
import { renderListings } from "./renderListings.js";

export async function setupListings() {
    const container = document.getElementById("listings-container");

    if (!container) return;

    try {
        const listings = await getListings();
        renderListings(listings);
    } catch (error) {
        console.error(error);
        container.innerHTML = `<p class="text-alert-red">Could not load listings.</p>`;
    }
}