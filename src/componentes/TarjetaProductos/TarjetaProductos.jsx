import styles from "./TarjetaProductos.module.css";

function TarjetaProductos({ imagen, nombre, precio, stock}){
    return(
        <div className={styles.tarjetaProducto}>
            <img src={imagen} alt={nombre} className={styles.tarjetaProductoImagen}/>
            <h3>{nombre}</h3>
            <p className={styles.tarjetaProductoPrecio}>${precio}</p>
            <p>Stock disponible: {stock}</p>
        </div>
    );
}

export default TarjetaProductos;