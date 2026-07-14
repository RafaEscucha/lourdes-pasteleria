import './App.css'
import Carrito from './componentes/Carrito/Carrito';
import Gestion from './componentes/GestionProductos/GestionProductos';
import Inicial from './componentes/Inicio/Inicial';
import { Layout } from './componentes/Layout/Layout'
import ProductoDetalle from './componentes/TarjetaProductos/ItemDetalle/ItemDetalle';
import ItemListContainer from './componentes/TarjetaProductos/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    /*<Layout>
        <h2>Endulza tu vida</h2>
        <ItemListContainer Mensaje="Nuestros productos"/>
        <FormularioContainer/>
        
    </Layout>*/
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Inicial/>}/>
        <Route path="/productos" element={<ItemListContainer
                            Mensaje={"NUESTROS PRODUCTOS"}/>}/>
        <Route path="/productos/:id" element={<ProductoDetalle/>}/>
        <Route path="/gestion" element={<Gestion/>}/>
        <Route path="/carrito" element={<Carrito
					   Mensaje={"Carrito de compras"}/>} />
      </Route>
    </Routes>
  );
}

export default App
