import { BASE_URL } from "./index.js";

export async function getListings() {
    const response = await fetch(`${BASE_URL}/listings?_bids=true`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch listings")
    }

    return data.data;
}