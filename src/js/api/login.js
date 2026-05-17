import { getHeaders } from "./index.js";

const API_URL = "https://v2.api.noroff.dev/auth/login"

export const loginUser = async (userData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify(userData),
        })

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.errors?.[0]?.message || "Login failed"
            )
        }

        return data.data;
    } catch (error) {
        console.error(error);
        throw error
    }
}