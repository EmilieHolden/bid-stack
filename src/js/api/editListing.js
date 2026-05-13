import { BASE_URL, getHeaders } from "./index.js";

export const editListing = async (id, listingData) => {
    const response = await fetch(`${BASE_URL}/listings/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(listingData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error("Could not edit listing")
    }

    return data.data;
};