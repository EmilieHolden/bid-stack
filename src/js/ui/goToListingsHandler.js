export const setupGoToListingsHandler = () => {

    const button = document.getElementById("go-to-listings")

    if (!button) return

    button.addEventListener("click", () => {

        window.history.pushState({}, "", "/listings")
        window.dispatchEvent(new PopStateEvent("popstate"))
    })
}