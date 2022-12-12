import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import banner from './images/banner.jpg';
import './App.css';

//IMPORTAR COMPONENTES
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
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >EL CORSO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/clientes/">Clientes</Nav.Link>
            <Nav.Link href="/provedores/">Provedores</Nav.Link>
            <Nav.Link href="/productos/">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <img src={banner} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
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
