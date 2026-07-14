import "./Footer.css";
import Directorio from "../../Equipo/Directorio"

function Footer(){
    return (
        <footer className="footer">
            <div className="footer-equipo"><Directorio /></div>
            <p className="footer-copy">© 2026 Lourdes Pastelería - Todos los derechos reservados.</p>
        </footer>
    );
    
}
export default Footer;