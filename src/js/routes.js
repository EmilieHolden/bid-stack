import { homeView, listingsView, loginView } from "./views/index.js";

export const routes = {
    '/': homeView,
    '/listings': listingsView,
    '/login': loginView,
};