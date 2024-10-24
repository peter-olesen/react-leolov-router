import { Outlet } from "react-router-dom"
import { Navigation } from "../components/Navigation/Navigation"
import { Footer } from "../components/Footer/Footer"
import { CookieBanner } from "../components/CookieBanner/CookieBanner"

export function MainLayout() {

    return (
        <>
        <CookieBanner />
        <Navigation />
        <Outlet />
        <Footer />
        </>
    )
}