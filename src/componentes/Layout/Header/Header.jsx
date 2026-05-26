function Header() {

    const links = ["Inicio", "Productos", "Contacto", "Carrito"];
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-section">
                    <div id="logo">
                        <img src="/image/Logo.png" alt="logo" className="logo" />
                    </div>
                    <h1>Lourdes Pasteleria</h1>
                </div>

                <nav className="nav">
                    {links.map((link, index) => (
                        <a key={index}>{link}</a>
                    ))}
                </nav>
            </div>

        </header>
    );
}

export default Header;