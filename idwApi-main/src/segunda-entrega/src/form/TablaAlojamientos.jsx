import React, { useState, useEffect } from 'react';
import '../Css/Tabla.css'



function TablaAlojamientos() {
    const datos = 'http://localhost:3001/tiposAlojamiento/getTiposAlojamiento'
    const [alojamientos, setAlojamientos] = useState([]);

    const [isEditing, setIsEditing] = useState(null);
    const [descripcionEditada, setDescripcionEditada] = useState('');

    const handleEditClick = (id, descripcion) => {
    setIsEditing(id);
    setDescripcionEditada(descripcion);
  };

  const handleEditSubmit = (id) => {
    editarAlojamiento(id, descripcionEditada);
    setIsEditing(null);
  };

    useEffect(() => {
        fetch(datos)
            .then(response => response.json())
            .then(data => setAlojamientos(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const eliminarAlojamiento = (id) => {
        fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${id}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    const nuevosAlojamientos = alojamientos.filter(a => a.idTipoAlojamiento !== id);
                    setAlojamientos(nuevosAlojamientos);
                } else {
                    throw new Error('Error al eliminar el alojamiento');
                }
            })
            .catch(error => console.error(`Error: ${error}`));
    };

    const editarAlojamiento = (id, descripcion) => {
        fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Descripcion: descripcion }),
        })
            .then(response => {
                if (response.ok) {
                    setAlojamientos(alojamientos.map(a => a.idTipoAlojamiento === id ? { ...a, Descripcion: descripcion } : a));
                } else {
                    throw new Error('Error al editar el alojamiento');
                }
            })
            .catch(error => console.error(`Error: ${error}`));
    };

    return (
        <div className='contenedorTabla'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {alojamientos.map((p, index) => (
                        <tr key={index}>
                            <td>{p.idTipoAlojamiento}</td>
                            <td>
                                {isEditing === p.idTipoAlojamiento ? (
                                    <input
                                        type="text"
                                        value={descripcionEditada}
                                        onChange={(e) => setDescripcionEditada(e.target.value)}
                                    />
                                ) : (
                                    p.Descripcion
                                )}</td>
                            <td>
                                {isEditing === p.idTipoAlojamiento ? (
                                    <button onClick={() => handleEditSubmit(p.idTipoAlojamiento)}>Guardar</button>
                                ) : (
                                    <button onClick={() => handleEditClick(p.idTipoAlojamiento, p.Descripcion)}>Editar</button>
                                )}
                            </td>
                            <td><button onClick={() => eliminarAlojamiento(p.idTipoAlojamiento)}>Borrar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaAlojamientos