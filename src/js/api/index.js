const apiKey = 'c00ac5a1-90e9-45ce-bb96-eeea8ffd9753';
export const BASE_URL = "https://v2.api.noroff.dev/auction-house"

export function getHeaders() {
    const accessToken = localStorage.getItem("token");

    return {
        Authorization: `Bearer ${accessToken}`,
        'X-Noroff-API-Key': apiKey,
        "Content-Type": "application/json"
    }
}
export const options = {
    headers: {

    }
};
