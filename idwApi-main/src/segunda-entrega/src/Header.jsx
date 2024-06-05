import './Css/header.css'
import logo from './assets/logo.png'
function Header() {
    return (
        <>
            <nav className="barra-de-navegacion">
                <div className="contenedor-logo-nav">
                    <a href="#">
                        <img id='logo-airbnb' src={logo} alt="Logo Airbnb"></img>
                    </a>
                </div>
                <div className="botonera-nav">
                    <ul>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Quiénes somos</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className='inicio-sesion-nav'>
                    <a href='#'>Iniciar sesión</a>
                </div>
            </nav>
        </>
    );
}

export default Header