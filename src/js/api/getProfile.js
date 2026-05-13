import { BASE_URL, getHeaders } from "./index.js";

export async function getProfile(name) {
    const response = await fetch(
        `${BASE_URL}/profiles/${name}?_listings=true`,
        {
            headers: getHeaders(),
        }
    )

    const data = await response.json()

    if (!response.ok) {
        throw new Error("Failed to fetch profile")
    }

    return data.data
}