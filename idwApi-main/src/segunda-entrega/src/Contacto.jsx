import React from 'react'
import contacto from './assets/ilustracioncontacto.png'
import './Css/contacto.css'

function Contacto() {
  return (
    <>
      <div className="contenedor-tarjeta">
        <div className="tarjeta">
          <div>
            <h1>Suscribite a nuestro newsletter</h1>
          </div>
          <div className="tarjeta-grilla">

            <div className="contenedor-ilustracion">
              <img src={contacto} />
            </div>

            <div className="contenedor-formulario">
              <form>
                <label>Nombre</label>
                <input type="text" placeholder="Ingrese su nombre" />

                <label>Email</label>
                <input type="email" placeholder="Ingrese su email" />

                <label>Teléfono</label>
                <input type="text" placeholder="Ingrese su número de teléfono" />

                <label>Comentario</label>
                <textarea className="textarea-fija" rows="6" cols="50" placeholder="Ingrese su duda"></textarea>

                <div id="checkbox">
                  <input type="checkbox" />
                  <label>Acepto los términos y condiciones.</label>
                </div>

                <input type="submit" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto