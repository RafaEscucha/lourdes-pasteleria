import { useEffect, useState } from "react";
import TarjetaContacto from "./TarjetaContacto";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/config';

function Directorio(){
    const[contactos, setContactos]= useState([]);
    const[cargando, setCargando]= useState(true);
    const[error, setError]= useState(null);

    /*useEffect(() => {
        fetch('/data/nosotros.json')
            .then(res =>{
                if(!res.ok) throw new Error("Error de carga");
                return res.json();
            })
            .then(data => {
                setContactos(data);
                setCargando(false);
            })
            .catch(err =>{
                setError(err.message);
                setCargando(false);
            });
    }, [])*/

    useEffect(() => {
            const equipoDB = collection(db, "equipo")
            getDocs(equipoDB)
                .then((resp) => {
                    setContactos(
                        resp.docs.map((doc) => {
                            return { ...doc.data()}
                        })
                    );
                    setCargando(false);
                })
        }, []);

    if (cargando) return <p>Cargando datos...</p>

    if (error) return <p>Error: {error}</p>

    return(
        <>
            {contactos.map(contacto => (
                <TarjetaContacto key={contacto.id} {...contacto} />
            ))}
        </>
    )
}

export default Directorio;