import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '../../../Firebase/config';


function ItemListContainer({ Mensaje, Destacados }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    /*useEffect(() => {
        fetch('/data/productos.json')
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error('No se pudo cargar la información de los productos');
                }
                return respuesta.json();
            })
            .then((datos) => {
                setProductos(datos);
                console.log("Productos obtenidos de la API")
            })
            .catch((error) => {
                setError(error.message);
                console.log("No hay productos")
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);*/

    useEffect(() => {
        const prodDB = collection(db, "productos")
        getDocs(prodDB)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data()}
                    })
                );
                setCargando(false);
            })
    }, []);

    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    const productosAMostrar = Destacados
        ? productos.filter(prod => prod.destacado)
        : productos;
    return (
        <div>
            <h2>{Mensaje}</h2>
            <div>
                <ItemList productos={productosAMostrar} />
            </div>
        </div>
    );
}
export default ItemListContainer;