import React from 'react'
import './Css/Footer.css'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'

import Contacto from './Contacto.jsx'
import QuienesSomos from './QuienesSomos.jsx'
import Administracion from './Administracion.jsx'

 function Footer() {
  return (
    <>
    <div className='separador'></div>
    <footer>
        <div className="botonera-footer">
            <Link to="/contacto">Contacto</Link>
            <Link to="/quienes-somos">Quienes somos</Link>
            <Link to="/administracion">Administracion</Link>
        </div>
        <p className="copyright"> &copy; 2024 IDW - Nelida Vera | José Romanoli | Syra Moran </p>
    </footer>
    </>
  )
}

export default Footer