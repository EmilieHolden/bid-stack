import { homeView, listingsView, listingView, loginView, profileView } from "./views/index.js";

export const routes = {
    '/': homeView,
    '/listings': listingsView,
    '/login': loginView,
    '/listing': listingView,
    '/profile': profileView,
}