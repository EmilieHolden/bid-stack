import { getListing } from "../api/getListing.js";
import { renderListing } from "./renderListing.js";
import { setupBidHandler } from "./bidHandler.js";

export async function setupListing() {
    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    if (!id) return;

    try {
        const listing = await getListing(id);

        renderListing(listing);
        setupBidHandler(id);

    } catch (error) {
        console.error(error);
    }
}