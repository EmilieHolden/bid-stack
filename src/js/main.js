import { Router } from './router.js';
import { routes } from './routes.js';
import "./components/mobile-menu.js"
import "./api/index.js"
import "./api/login.js"
import "./ui/loginHandler.js"
import "./ui/logoutHandler.js"
import "./api/register.js"
import "./ui/registrationHandler.js"
import "./api/getListings.js"
import "./ui/renderListings.js"

const contentElement = document.getElementById('app');
const router = new Router(routes, contentElement);

router.resolveRoute();

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const path = event.target.getAttribute('href');
    router.navigate(path);
  });
});