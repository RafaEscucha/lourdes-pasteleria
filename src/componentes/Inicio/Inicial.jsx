import ItemListContainer from "../TarjetaProductos/ItemListContainer/ItemListContainer";

function Inicial(){
    return(
        <>
            <h2>Bienvenido a tu Pasteleria</h2>
            <ItemListContainer Mensaje='Nuestro Productos Destacados' Destacados={true}/>
        </>
    )
}

export default Inicial;