import banner from './images/banner.jpg';
import './App.css';

//IMPORTAR COMPONENTES

import Home from './componentes/Home'; 


import CompMostrarClientes from './clientes/MostrarClientes';
import CompCrearClientes from './clientes/CrearClientes';
import CompEditarClientes from './clientes/ModificarClientes';


import CompMostrarProvedores from './provedores/MostrarProvedores';
import CompCrearProvedores from './provedores/CrearProvedores';
import CompEditarProvedores from './provedores/ModificarProvedores';


import CompMostrarProductos from './productos/MostrarProductos';
import CompCrearProductos from './productos/CrearProductos';
import CompEditarProductos from './productos/ModificarProductos';

//IMPORTAR EL ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="">
        <img src={banner} className="App-logo" alt="logo" />
        
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Home/>}/>

          <Route path='/clientes/' element={<CompMostrarClientes />} />
          <Route path='/clientes/agregar' element={<CompCrearClientes />} />
          <Route path='/clientes/editar/:id' element={<CompEditarClientes />} />

          <Route path='/provedores/' element={<CompMostrarProvedores />} />
          <Route path='/provedores/agregar' element={<CompCrearProvedores />} />
          <Route path='/provedores/editar/:id' element={<CompEditarProvedores />} />

          <Route path='/productos/' element={<CompMostrarProductos />} />
          <Route path='/productos/agregar' element={<CompCrearProductos />} />
          <Route path='/productos/editar/:id' element={<CompEditarProductos />} />

        </Routes>

      </BrowserRouter>
      <body>

      </body>
    </div>
  );
}

export default App;
