import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./Layout.css";

export function Layout({children}){
    return(
        <div className="layout">
            <Header/>
            <main className="contenido">
                {children}
            </main>
            <Footer/>
        </div>
    );
}