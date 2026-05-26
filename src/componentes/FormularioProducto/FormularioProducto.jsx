function FormularioProducto({datosForm, manejarCambio, manejarEnvio, manejarCambioImagen}) {
    console.log(datosForm);

    return (
        <form className="formulario-producto" onSubmit={manejarEnvio}> 
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input 
                    type="text" 
                    placeholder="Ej: Alfajor Grande"
                    name="nombre"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio:</label>
                <input 
                    type="number" 
                    placeholder="Ej: 1999"
                    name="precio"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input 
                    type="number" 
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input 
                    type="file" 
                    placeholder="https://..." 
                    onChange={manejarCambioImagen}
                />
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    );
}

export default FormularioProducto;