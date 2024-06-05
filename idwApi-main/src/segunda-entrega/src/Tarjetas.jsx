import React from 'react'
import './Css/Tarjetas.css'
import img1 from './assets/hotellujo.jpg'
import img2 from './assets/hotelpileta.jpg'
import img3 from './assets/cabania.jpg'
import img4 from './assets/hotelacapulco.jpg'
import img5 from './assets/hotelespania.jpg'
import img6 from './assets/hoteljapones.jpg'
import img7 from './assets/hotelcolombia.jpg'
import img8 from './assets/hotelaleman.jpg'
import img9 from './assets/hoteluruguay.jpg'
import img10 from './assets/hotelbsas.jpg'

function Tarjetas() {
  return (
    <>
    <section>
            <div className="grid">
                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img1} alt="Hotel Córdoba"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Córdoba</p>
                        <p>A 22km del Centro</p>
                        <p><strong>$50USD</strong> por noche</p>
                    </div>
                </div>

                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img2} alt="Hotel Cartagena"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Cartagena</p>
                        <p>A 12km del Centro</p>
                        <p><strong>$37USD</strong> por noche</p>
                    </div>
                </div>
                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img3} alt="Hotel Boscoso"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Boscoso</p>
                        <p>A 50km del Centro</p>
                        <p><strong>$66USD</strong> por noche</p>
                    </div>
                </div>

                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img4} alt="Hotel Acapulco"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Acapulco</p>
                        <p>A 10km del Centro</p>
                        <p><strong>$100USD</strong> por noche</p>
                    </div>
                </div>

                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img5} alt="Hotel Madrid"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Madrid</p>
                        <p>A 3km del Centro</p>
                        <p><strong>$75USD</strong> por noche</p>
                    </div>
                </div>

  
                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img6} alt="Hotel Kyoto"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Kyoto</p>
                        <p>A 37km del Centro</p>
                        <p><strong>$67USD</strong> por noche</p>
                    </div>
                </div>

                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img7} alt="Hotel Bogotá"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Bogotá</p>
                        <p>A 8km del Centro</p>
                        <p><strong>$57USD</strong> por noche</p>
                    </div>
                </div>

                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img8} alt="Hotel Berlín"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Berlín</p>
                        <p>A 2km del Centro</p>
                        <p><strong>$110USD</strong> por noche</p>
                    </div>
                </div>

                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img9} alt="Hotel Uruguay"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Punta del Este</p>
                        <p>A 16km del Centro</p>
                        <p><strong>$50USD</strong> por noche</p>
                    </div>
                </div>

                <div className="item">
                    <div className="contenedor-imagen-tarjeta">
                        <img src={img10} alt="Hotel Buenos Aires"/>
                    </div>
                    <div className="contenedor-texto-tarjeta">
                        <p className="titulo-tarjeta">Hotel Buenos Aires</p>
                        <p>A 1km del Centro</p>
                        <p><strong>$130USD</strong> por noche</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Tarjetas