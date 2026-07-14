import { useCart } from "../Context/CarritoContext";
import { Link } from "react-router-dom";
import './Carrito.css'

const Cart = () => {
    const { cart, clearCart, getCartTotal } = useCart();
    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h1>El carrito esta vacio</h1>
                <p>Agrega productos para continuar la compra</p>
                <Link to="/productos">
                    Ver Productos
                </Link>
            </div>
        );
    }
    return (
        <div className="cart-container">
            <h1>Carrito de Compras</h1>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <div className="cart-info">
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio unitario: ${item.precio}</p>
                        <p>Subtotal: ${item.precio * item.quantity}</p>
                    </div>
                </div>
            ))}
            <hr />
            <div className="cart-total">
                <h3>Total a pagar: ${getCartTotal()}</h3>
                <div className="cart-buttons">
                    <button className="vaciar" onClick={clearCart}>Vaciar Carrito</button>
                </div>
            </div>


            <Link to="/" onClick={() => {
                alert("Gracias por su compra");
                clearCart()
            }}
            >
                <button className="comprar">
                    Finalizar compra
                </button>
            </Link>
        </div>
    );
};
export default Cart;