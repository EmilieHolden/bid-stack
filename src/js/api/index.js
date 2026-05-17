const apiKey = 'c00ac5a1-90e9-45ce-bb96-eeea8ffd9753';
export const BASE_URL = "https://v2.api.noroff.dev/auction"

export const getHeaders = () => {
    const accessToken = localStorage.getItem("token");

    const headers = {
        "X-Noroff-API-Key": apiKey,
        "Content-Type": "application/json",
    }

    if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`
    }



    return headers
}
