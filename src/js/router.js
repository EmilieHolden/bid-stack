import { setupAuthToggle } from './components/authToggle.js';
import { setupLoginHandler } from './ui/loginHandler.js';
import { setupLogoutHandler } from './ui/logoutHandler.js';
import { setupRegistrationHandler } from './ui/registrationHandler.js';
import { setupListings } from './ui/setupListings.js';
import { setupListing } from './ui/setupListing.js';
import { setupCreateListingDialog } from './ui/createListingDialogHandler.js';
import { notFoundView } from './views/index.js';
import { setupProfile } from './ui/setupProfile.js';
import { setupAuthNav } from './ui/authNav.js';
import { setupGoToListingsHandler } from './ui/goToListingsHandler.js';

export class Router {
    constructor(routes, contentElement) {
        this.routes = routes;
        this.contentElement = contentElement;

        window.addEventListener('popstate', () => this.resolveRoute())
    }

    navigate(path) {
        history.pushState({}, '', path)
        this.resolveRoute()
    }

    resolveRoute() {
        const path = window.location.pathname;
        const view = this.routes[path] || notFoundView;
        this.contentElement.innerHTML = view()

        setupAuthNav()
        setupLogoutHandler()
        setupCreateListingDialog()

        if (path === "/") {
            console.log("Running home handler");
            setupGoToListingsHandler()
            setupProfile()
        }

        if (path === "/login") {
            setupAuthToggle()
            setupLoginHandler()
            setupRegistrationHandler()
        }

        if (path === "/listings") {
            setupListings()
        }

        if (path === "/listing") {
            setupListing()
        }

        if (path === "/profile") {
            setupProfile()
        }
    }
}