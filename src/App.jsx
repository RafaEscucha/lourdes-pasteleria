import './App.css'
import { FormularioContainer } from './componentes/FormularioProducto/FormularioContainer';
import { Layout } from './componentes/Layout/Layout'
import ItemListContainer from './componentes/TarjetaProductos/ItemListContainer/ItemListContainer';

function App() {
  
  return (
    <>
      <Layout>
        <h2>Endulza tu vida</h2>
        <ItemListContainer Mensaje="Nuestros productos"/>
        <FormularioContainer/>
        
      </Layout>
    </>
  );
}

export default App
