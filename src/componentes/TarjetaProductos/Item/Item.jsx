import { useState, useEffect } from "react";
import TarjetaProductos from "../TarjetaProductos";
import { useCart } from '../../Context/CarritoContext';
import ItemCount from "../Contador/Contador";
import styles from "./Item.module.css";

function Item({ id, imagen, nombre, precio, detalle, stock }) {
    const [esFavorito, setEsFavorito] = useState(false);
    const [stockActual, setStockActual] = useState(stock);
    useEffect(() => {
        console.log("El stock ha sido actualizado.");
    }, [stockActual]);

    /*const CompraClick =() => {
        if (stockActual > 0) {
            setStockActual(stockActual - 1);
            alert(`¡Agregaste ${nombre} al carrito!`);
        } else {
            alert("Producto sin stock");
        }
        
    };*/
    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito)
    };

    const product = { id, nombre, precio, stock, imagen };
    const [quantity, setQuantity] = useState(1);

    const { addToCart, getCantidadActual } = useCart();
    const handleAddToCart = () => {
        if (quantity > stockActual) {
            alert("No hay suficiente stock");
            return;
        }
        addToCart(product, quantity);
        setStockActual(stockActual - quantity);
        setQuantity(1);
        alert(`Agregaste ${quantity} unidades de ${nombre}`);
    };

    const cantidadActual = getCantidadActual(product.id);

    return (
        <div className={styles.item}>
            <TarjetaProductos
                id={id}
                imagen={imagen}
                nombre={nombre}
                precio={precio}
                detalle={detalle}
                stock={stockActual}
            />
            <div className={styles.itemAcciones}>
                <ItemCount
                    quantity={quantity}
                    setQuantity={setQuantity}
                    stock={stockActual}
                />
                <button className={styles.botonComprar} onClick={handleAddToCart} disabled={stockActual === 0}>{stockActual === 0 ? "Sin Stock" : "Agregar al carrito"}</button>
                <div className={styles.itemInferior}>
                    <span className={styles.favorito}
                        onClick={marcarComoFavorito}
                    >
                        {esFavorito ? "⭐" : "☆"}
                    </span>
                </div>

            </div>

            <h3>Agregaste {cantidadActual} unidades al carrito</h3>
        </div>
    );
}
export default Item;