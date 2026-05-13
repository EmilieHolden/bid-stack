import { BASE_URL, getHeaders } from "./index.js";

export const createBid = async (id, amount) => {
    const response = await fetch(`${BASE_URL}/listings/${id}/bids`, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({ amount }),
    });

    const data = await response.json()

    if (!response.ok) {
        console.log("bid error:", data.errors?.[0])
        throw new Error(data.errors?.[0]?.message || "Could not place bid")
    }

    return data.data
}