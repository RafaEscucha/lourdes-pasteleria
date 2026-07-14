function TarjetaContacto({ nombre, email, linkedin, puesto, foto }) {

    return (

        <div className="tarjeta-contacto">

            <img
                src={foto}
                alt={nombre}
            />

            <div className="contacto-info">

                <h6>{nombre}</h6>

                <p>{puesto}</p>

                <p>{linkedin}</p>

                <small>{email}</small>

            </div>

        </div>

    );

}

export default TarjetaContacto;