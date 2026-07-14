/*import { useParams } from "react-router-dom";
const ProductoDetalle=() => {
    const{id} = useParams();
    return(
        <div>
            <h2>Detalles del Producto</h2>
            <p>Mostrar informacion para el producto con ID:
                <strong>{id}</strong>
            </p>
        </div>
    );
};
export default ProductoDetalle;*/

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, where, query, getDocs } from "firebase/firestore";
import { db } from '../../../Firebase/config';
import "./ItemDetalle.css";

const ProductoDetalle = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        /*fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id));
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("Error al cargar el producto:", error));*/

        if (!id) return;
        //const docRef = doc(db, "productos", id);

        const queryId = query(
            collection(db, "productos"),
            where("id", "==", Number(id))
        );

        getDocs(queryId)
            .then((resp) => {
                if (!resp.empty) {
                    const producto = {
                        id: resp.docs[0].id,
                        ...resp.docs[0].data()
                    };
                    setProducto(producto);
                } else {
                    console.log("Producto no encontrado");
                }
            })
            .catch(console.error);
    }, [id]);
    if (!producto) {
        return <h2>Cargando detalle del producto...</h2>;
    }
    if (!producto.id) {
        return <h2>Producto no encontrado.</h2>;
    }
    return (
        <div className="detalle-container">
            <img src={producto.imagen} alt={producto.nombre} className="detalle-imagen" />
            <div className="detalle-info">

                <h2>Detalle del producto: {producto.nombre}</h2>

                <div className="detalle-precio">
                    ${producto.precio}
                </div>

                <div className="detalle-stock">
                    Stock disponible: {producto.stock}
                </div>

                <div className="detalle-descripcion">
                    {producto.detalle}
                </div>
            </div>
        </div>
    );
};

export default ProductoDetalle;