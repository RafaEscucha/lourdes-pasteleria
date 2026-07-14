import "./Contador.css";

function ItemCount({ quantity, setQuantity, stock }) {

    const aumentar = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const disminuir = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count">

            <button onClick={disminuir}>-</button>

            <span>{quantity}</span>

            <button onClick={aumentar}>+</button>

        </div>
    );
}

export default ItemCount;