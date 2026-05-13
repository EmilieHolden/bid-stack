import { BASE_URL, getHeaders } from "./index.js";

export async function createListing(listingData) {
    const response = await fetch(`${BASE_URL}/listings`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(listingData),
    });

    const data = await response.json()

    if (!response.ok) {
        throw new Error("Could not create listing")
    }

    return data.data;
}