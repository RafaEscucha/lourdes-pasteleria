import { Link } from "react-router-dom";
import styles from "./TarjetaProductos.module.css";

function TarjetaProductos({ id, imagen, nombre, precio, detalle, stock }) {
    return (
        <div className={styles.tarjetaProducto}>
            <img src={imagen} alt={nombre} className={styles.tarjetaProductoImagen} />
            <div className={styles.tarjetaContenido}>
                <h3>{nombre}</h3>
                <p className={styles.tarjetaProductoPrecio}>
                    ${precio}
                </p>
                <p className={styles.stock}>
                    Stock: {stock}
                </p>
                <Link
                    to={`/productos/${id}`}
                    className={styles.detalleLink}
                >
                    Ver detalle
                </Link>

            </div>
        </div>
    );
}

export default TarjetaProductos;