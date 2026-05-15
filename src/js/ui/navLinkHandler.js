export const setupNavLinkHandler = () => {
    const navLinks = document.querySelectorAll("nav a")

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault()

            const path = link.getAttribute("href")

            history.pushState({}, "", path)
            window.dispatchEvent(new PopStateEvent("popstate"))
        })
    })
}