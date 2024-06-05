import './Css/BarraDeBusqueda.css'

function BarraDeBusqueda() {
    return (
        <>
            <div className="contenedor-seccion-lupa">
                <div className="barra-seccion-lupa">
                    <ul>
                        <li>
                            <p>Lugar</p>
                            <input className="input-seccion-lupa" type="text" name="ubicacion" placeholder="Explorar destinos" required />
                        </li>
                        <li>
                            <p>Fecha</p>
                            <input className="input-seccion-lupa" type="date" name="fecha" placeholder="Check-in" />
                        </li>
                        <li>
                            <p>Pasajeros</p>
                            <input className="input-seccion-lupa" type="number" name="cantidad-de-pasajeros" placeholder="Cantidad" />
                        </li>
                        <li>
                            <a href="index.html">
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default BarraDeBusqueda