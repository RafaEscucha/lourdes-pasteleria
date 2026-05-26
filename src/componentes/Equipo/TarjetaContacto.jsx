function TarjetaContacto({ nombre, email, puesto, foto}) {
    return (
        <div className="tarjeta-contacto">
                <img 
                    src={foto}
                    className="contacto-foto"
                    alt={nombre}
                />
                <h6>{nombre}</h6>
                <p>{puesto}</p>
                <small>{email}</small>
        </div>
    );
}
export default TarjetaContacto;