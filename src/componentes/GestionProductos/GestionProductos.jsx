import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/config";
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc,} from "firebase/firestore";
import FormularioProducto from "../FormularioProducto/FormularioProducto";

const Gestion = () => {

    const estadoInicialForm = {
        id: 0,
        nombre: "",
        precio: 0,
        stock: 0,
        categoria: "",
        detalle: "",
        destacado: false,
        imagen: ""
    };

    const [productos, setProductos] = useState([]);
    const [datosForm, setDatosForm] = useState(estadoInicialForm);
    const [imagenFile, setImagenFile] = useState(null);
    const [productoAEditar, setProductoAEditar] = useState(null);

    const modoEdicion = productoAEditar !== null;

    const cargarProductos = async () => {
        const productosRef = collection(db, "productos");

        const resp = await getDocs(productosRef);

        setProductos(
            resp.docs.map((doc) => ({
                ...doc.data(),
                idFirestore: doc.id
            }))
        );
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    const manejarCambio = (evento) => {

        const { name, value, type, checked } = evento.target;

        setDatosForm({
            ...datosForm,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "number"
                        ? Number(value)
                        : value
        });

    };

    const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0]);
    };

    const limpiarFormulario = () => {

        setDatosForm(estadoInicialForm);
        setImagenFile(null);
        setProductoAEditar(null);

    };

    const manejarEditar = (producto) => {

        setProductoAEditar(producto);

        setDatosForm({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            stock: producto.stock,
            categoria: producto.categoria,
            detalle: producto.detalle,
            destacado: producto.destacado,
            imagen: producto.imagen
        });

    };

    const handleDelete = async (idFirestore) => {

        const confirmar = window.confirm(
            "¿Desea eliminar este producto?"
        );

        if (!confirmar) return;

        await deleteDoc(doc(db, "productos", idFirestore));

        await cargarProductos();

        alert("Producto eliminado.");

    };

    const manejarEnvio = async (evento) => {

        evento.preventDefault();

        try {

            let urlImagen = datosForm.imagen;

            if (imagenFile) {

                const apiKey = "96afb9c423da7e850cb67cb33e0c6f09";

                const formData = new FormData();

                formData.append("image", imagenFile);

                const respuestaImgbb = await fetch(
                    `https://api.imgbb.com/1/upload?key=${apiKey}`,
                    {
                        method: "POST",
                        body: formData
                    }
                );

                const datosImgbb = await respuestaImgbb.json();

                if (!datosImgbb.success) {

                    throw new Error("Error subiendo imagen");

                }

                urlImagen = datosImgbb.data.url;

            }

            const productoCompleto = {

                ...datosForm,

                imagen: urlImagen

            };

            if (modoEdicion) {

                const docRef = doc(
                    db,
                    "productos",
                    productoAEditar.idFirestore
                );

                await updateDoc(docRef, productoCompleto);

                alert("Producto actualizado correctamente.");

            }

            else {

                await addDoc(
                    collection(db, "productos"),
                    productoCompleto
                );

                alert("Producto agregado correctamente.");

            }

            await cargarProductos();

            limpiarFormulario();

        }

        catch (error) {

            console.error(error);

            alert("Ocurrió un error.");

        }

    };

    return (
        <div>
            <h2>Gestión de Productos</h2>
            <hr />
            <FormularioProducto
                datosForm={datosForm}
                manejarCambio={manejarCambio}
                manejarCambioImagen={manejarCambioImagen}
                manejarEnvio={manejarEnvio}
                modoEdicion={modoEdicion}
            />
            <hr />
            <h3>Lista de Productos</h3>
            <ul>
                {productos.map((prod) => (
                    <li key={prod.idFirestore}>
                        {prod.nombre} - ${prod.precio}
                        <button
                            onClick={() => manejarEditar(prod)}
                            style={{ marginLeft: "15px" }}
                        >
                            Editar
                        </button>

                        <button
                            onClick={() => handleDelete(prod.idFirestore)}
                            style={{ marginLeft: "10px" }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gestion;