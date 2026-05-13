import { BASE_URL, getHeaders } from "./index.js";

export const deleteListing = async (id) => {
    const response = await fetch(`${BASE_URL}/listings/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
    })

    if (!response.ok) {
        throw new Error("Could not delete listing")
    }
}