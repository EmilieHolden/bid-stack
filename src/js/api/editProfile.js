import { BASE_URL, getHeaders } from "./index.js";

export const editProfile = async (name, profileData) => {
    const response = await fetch(`${BASE_URL}/profiles/${name}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(profileData),
    });

    const data = await response.json()

    if (!response.ok) {
        throw new Error("Could not update profile")
    }

    return data.data
}