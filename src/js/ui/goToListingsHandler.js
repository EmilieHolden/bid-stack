export const setupGoToListingsHandler = () => {
    console.log("Handler started");

    const button = document.getElementById("go-to-listings")
    console.log("Button:", button);

    if (!button) return

    button.addEventListener("click", () => {
        console.log("Button clicked");

        window.history.pushState({}, "", "/listings")
        window.dispatchEvent(new PopStateEvent("popstate"))
    })
}