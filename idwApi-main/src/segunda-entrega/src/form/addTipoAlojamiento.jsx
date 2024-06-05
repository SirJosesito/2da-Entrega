import React, { useState } from 'react'
import '../Css/altaTipoAlojamiento.css'

const AddTipoAlojamiento = () => {
    const [descripcion, setDescripcion] = useState('');

    const enviar = async (e) => {
        e.preventDefault();
        const json = {
            Descripcion: descripcion
        };
        // conexion con la api
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(json),
            });

            if (response.ok) {
                alert('Se creó correctamente el alojamiento tipo');
            }
            else {
                alert('Error al crear el alojamiento tipo');
            }
        } catch (error) {
            console.error('Error', error);
            alert('error no pudo establecer el servicio');
        }
    }
    return (
        <div className='contenedorAddAlojamientos'>
            <h1>Alta tipo de alojamiento</h1>
            <form onSubmit={enviar}>
                <div>
                    <label htmlFor='descripcion' className='labelAlta'>Descripción:</label>
                    <input
                        onChange={e => setDescripcion(e.target.value)}
                        type='text'
                        id='descripcion'
                        value={descripcion}
                        placeholder='Ingrese el tipo de alojamiento'>
                        
                    </input>
                </div>
                <button type='submit' className='botonAlta'>Enviar</button>
            </form>
        </div>
    )
}

export default AddTipoAlojamiento
