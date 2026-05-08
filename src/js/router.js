import { setupAuthToggle } from './components/authToggle.js';
import { setupLoginHandler } from './ui/loginHandler.js';
import { setupLogoutHandler } from './ui/logoutHandler.js';
import { setupRegistrationHandler } from './ui/registrationHandler.js';
import { setupListings } from './ui/setupListings.js';
import { notFoundView } from './views/index.js';

export class Router {
    constructor(routes, contentElement) {
        this.routes = routes;
        this.contentElement = contentElement;

        window.addEventListener('popstate', () => this.resolveRoute());
    }

    navigate(path) {
        history.pushState({}, '', path);
        this.resolveRoute();
    }

    resolveRoute() {
        const path = window.location.pathname;
        const view = this.routes[path] || notFoundView;
        this.contentElement.innerHTML = view();

        setupLogoutHandler()

        if (path === "/login") {
            setupAuthToggle();
            setupLoginHandler();
            setupRegistrationHandler();
        }

        if (path === "/listings") {
            setupListings();
        }
    }
}