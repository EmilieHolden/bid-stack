import { BASE_URL } from "./index.js";

export const getListing = async (id) => {
    const response = await fetch(
        `${BASE_URL}/listings/${id}?_bids=true&_seller=true`
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error("Failed to fetch listing")
    }

    return data.data
}