import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <AppHeader />
            <main>
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}