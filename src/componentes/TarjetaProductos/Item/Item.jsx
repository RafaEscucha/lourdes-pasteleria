import { useState, useEffect } from "react";
import TarjetaProductos from "../TarjetaProductos";

function Item({imagen, nombre, precio, stock}){
    const [esFavorito, setEsFavorito] = useState(false);
    const [stockActual, setStockActual] = useState(stock);
    useEffect(() => {
        console.log("El stock ha sido actualizado.");
    }, [stockActual]);

    const CompraClick =() => {
        if (stockActual > 0) {
            setStockActual(stockActual - 1);
            alert(`¡Agregaste ${nombre} al carrito!`);
        } else {
            alert("Producto sin stock");
        }
        
    };
    const marcarComoFavorito = () => {
        setEsFavorito(!esFavorito)
    }
    return(
        <div>
            <TarjetaProductos
                imagen={imagen}
                nombre={nombre}
                precio={precio}
                stock={stockActual}
            />
            <button onClick={CompraClick} disabled={stockActual===0}>Comprar</button>
            <span
                style={
                    {
                        cursor: "pointer",
                        marginLeft: "10px"
                    }
                } 
                onClick={marcarComoFavorito}            
            >
                {esFavorito ? "⭐" : "☆"}
            </span>
        </div>
    );
}
export default Item;