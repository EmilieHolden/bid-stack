import { logout } from "../utils/logout.js";

export const setupLogoutHandler = () => {
    const logoutButtons = document.querySelectorAll(".logout-btn");

    logoutButtons.forEach((button) => {
        button.addEventListener("click", logout);
    });
}