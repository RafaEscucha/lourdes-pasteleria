function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen, modoEdicion }) {
    console.log(datosForm);

    return (
        <form className="formulario-producto" onSubmit={manejarEnvio}>
            <h3>
                {modoEdicion
                    ? "Editar Producto"
                    : "Agregar Nuevo Producto"
                }
            </h3>
            <div>
                <label>ID:</label>
                <input
                    type="number"
                    placeholder="Ej: 101"
                    name="id"
                    value={datosForm.id}
                    onChange={manejarCambio}
                />
            </div>
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
                <label>Categoria:</label>
                <input
                    type="text"
                    placeholder="Ej: Alfajores, Tortas, Cookies, etc."
                    name="categoria"
                    value={datosForm.categoria}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Detalle:</label>
                <input
                    type="text"
                    placeholder="Detalle del producto"
                    name="detalle"
                    value={datosForm.detalle}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Destacado:</label>
                <input
                    type="checkbox"
                    name="destacado"
                    checked={datosForm.destacado}
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
            <button type="submit">
                {modoEdicion ? "Actualizar Producto" : "Guardar Producto"}
            </button>
        </form>
    );
}

export default FormularioProducto;