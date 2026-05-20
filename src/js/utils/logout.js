export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")

    history.pushState({}, "", "/login")
    window.dispatchEvent(new PopStateEvent("popstate"))
}