import { Router } from './router.js'
import { routes } from './routes.js'
import "./components/mobile-menu.js"
import "./api/index.js"
import "./api/login.js"
import "./ui/loginHandler.js"
import "./ui/logoutHandler.js"
import "./api/register.js"
import "./ui/registrationHandler.js"
import "./api/getListings.js"
import "./ui/renderListings.js"
import "./api/getListing.js"
import "./ui/renderListing.js"
import "./ui/createListingDialogHandler.js"
import "./api/createBid.js"
import "./ui/bidHandler.js"
import "./api/getProfile.js"
import "./ui/renderProfile.js"

const contentElement = document.getElementById('app')
const router = new Router(routes, contentElement)

router.resolveRoute()

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-link]")

  if (!link) return

  event.preventDefault()

  const path = link.getAttribute("href")

  router.navigate(path)
})