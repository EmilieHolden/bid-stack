import { BASE_URL, getHeaders } from "./index.js";

export const getProfileBids = async (name) => {
    const response = await fetch(
        `${BASE_URL}/profiles/${name}/bids?_listings=true`,
        {
            headers: getHeaders(),
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch bids");
    }

    return data.data;
}