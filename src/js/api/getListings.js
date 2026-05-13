import { BASE_URL } from "./index.js";

export const getListings = async () => {
    const response = await fetch(`${BASE_URL}/listings?_bids=true&_seller=true&sort=created&sortOrder=desc`);

    const data = await response.json()

    if (!response.ok) {
        throw new Error("Failed to fetch listings")
    }

    return data.data
}