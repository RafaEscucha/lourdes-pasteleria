import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Layout.css";
import { Outlet } from "react-router-dom";

export function Layout(){
    return(
        <div className="layout">
            <Header/>
            <main className="contenido">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}