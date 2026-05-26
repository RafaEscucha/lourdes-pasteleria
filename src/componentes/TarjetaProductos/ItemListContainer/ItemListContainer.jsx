import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";


function ItemListContainer({ Mensaje }) {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
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
    }, []);
    if (cargando) {
        return <p>Cargando productos, por favor espere...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <h2>{Mensaje}</h2>
            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    );
}
export default ItemListContainer;