import React from 'react'
import './Css/quienes-somos.css'
import ilustracion from './assets/Ilustracionsobrenosotros.png'

export default function QuienesSomos() {
  return (
    <>
      <section>
        <div class="contenedor-tarjeta">
          <div class="tarjeta-grilla">
            <div class="texto-sn">
              <div class="contenedor-texto">
                <p class="titulo-quienes-somos">Quiénes somos</p>
                <p class="parrafo-quienes-somos">Somos un grupo de estudiantes de Desarrollo Web dedicados a innovar en el sector hotelero. Nuestra formación técnica y creativa nos impulsa a diseñar experiencias digitales intuitivas y atractivas, que invitan a los usuarios a comenzar su viaje hacia una estadía memorable.
                  <br /><br />En nuestra plataforma, la funcionalidad se une con la hospitalidad, reflejando nuestro compromiso con la calidad y la atención al detalle. Como narradores digitales, ofrecemos un espacio donde cada reserva es el inicio de una experiencia única y personalizada.</p>
              </div>
            </div>
            <div class="contenedor-ilustracion">
              <img src={ilustracion} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
