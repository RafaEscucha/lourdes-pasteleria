/*import { useState } from "react";
import FormularioProducto from "./FormularioProducto";
import { getFirestore, collection, addDoc } from "firebase/firestore";


export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        id: '',
        nombre: '',
        precio: '',
        stock: '',
        categoria: '',
        detalle: '',
        destacado: false,
    });

    const limpiarFormulario = () => {
        setDatosForm({
            id: '',
            nombre: '',
            precio: '',
            stock: '',
            categoria: '',
            detalle: '',
            destacado: false
        });
        setImagenFile(null);
    };

    const [imagenFile, setImagenFile] = useState(null);

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
    }

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        // Validamos que el usuario haya seleccionado una imagen
        if (!imagenFile) {
            alert("Por favor, selecciona una imagen para el producto.");
            return;
        }
        // --- Lógica para subir la imagen a Imgbb ---
        const apiKey = '96afb9c423da7e850cb67cb33e0c6f09'; // 🚨 ¡Reemplazá esto con tu clave!
        const formData = new FormData();
        formData.append('image', imagenFile);
        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await
                fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });
            const datosImgbb = await respuestaImgbb.json();
            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
                // Unimos la URL de la imagen con el resto de los datos del formulario
                const productoCompleto = {
                    ...datosForm,
                    // Agregamos la URL obtenida
                    imagen: datosImgbb.data.url
                };
                // Por el momento hacemos un console.log
                console.log('Enviando productos a Firebase:',
                    productoCompleto);

                const db = getFirestore();
                const productosColletion = collection(db, "productos");
                await addDoc(productosColletion, productoCompleto);
                alert("✅ El producto se cargó correctamente en Firebase.");
                limpiarFormulario();

            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        }
    };
    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
        />
    );
}*/