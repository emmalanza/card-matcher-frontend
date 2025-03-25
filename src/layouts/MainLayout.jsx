import { Outlet } from "react-router-dom";
import Header from "@components/layouts/Header";
import Footer from "@components/layouts/Footer";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <main className="main-layout relative">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default MainLayout;