import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {

    const links = [
        { nombre: "Inicio", ruta: "/" },
        { nombre: "Productos", ruta: "/productos" },
        { nombre: "Gestión", ruta: "/gestion" },
        { nombre: "Carrito", ruta: "/carrito" }
    ];

    return (
        <header className="header">

            <div className="header-container">

                <div className="logo-section">

                    <img
                        src="/image/Logo.png"
                        alt="Logo Lourdes Pastelería"
                        className="logo"
                    />

                    <h1>Lourdes Pastelería</h1>

                </div>

                <nav className="nav">

                    {links.map((link) => (

                        <NavLink
                            key={link.ruta}
                            to={link.ruta}
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            {link.nombre}
                        </NavLink>

                    ))}

                </nav>

            </div>

        </header>
    );
}

export default Header;