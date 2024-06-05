import Header from './Header.jsx'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import BarraDeBusqueda from './BarraDeBusqueda.jsx'
import './App.css'
import './Css/header.css'
import logo from './assets/logo.png'
import Contacto from './Contacto.jsx'
import QuienesSomos from './QuienesSomos.jsx'
import Administracion from './Administracion.jsx'
import Tarjetas from './Tarjetas.jsx'
import Footer from './Footer.jsx'
import AddTipoAlojamiento from './form/addTipoAlojamiento.jsx'

function App() {
  return (
    <Router>
     <nav className="barra-de-navegacion">
                <div className="contenedor-logo-nav">
                    <a href="#">
                        <Link to="/"><img id='logo-airbnb' src={logo} alt="Logo Airbnb"></img></Link>
                    </a>
                </div>
                <div className="botonera-nav">
                    <ul>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/quienes-somos">Quiénes somos</Link></li>
                        <li><Link to="/tipoAlojamiento">Administracion</Link></li>
                    </ul>
                </div>
                <div className='inicio-sesion-nav'>
                    <a href='#'>Iniciar sesión</a>
                </div>
                
      </nav>
      <BarraDeBusqueda/>
      <main>
        <Routes>
          <Route path="/" element={<Tarjetas/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/quienes-somos" element={<QuienesSomos/>}/>
          <Route path="/tipoAlojamiento" element={<Administracion/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
    
  )
}

export default App
