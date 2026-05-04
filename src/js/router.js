import { setupAuthToggle } from './components/authToggle.js';
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

        if (path === "/login") {
            setupAuthToggle();
        }
    }
}