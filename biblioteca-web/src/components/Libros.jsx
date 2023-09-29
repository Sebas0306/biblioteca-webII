import './styles/Libros.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router';


export function Libros(){
    const navigate = useNavigate();
    const usuario = localStorage.getItem('usuario');
    const [libros, setLibros] = useState([]);
    const [nuevoLibro, setNuevoLibro] = useState({
            nombre: '',
            autor: '',
            fechaPublicacion: '',
            estado: 'Disponible',
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoLibro({
          ...nuevoLibro,
          [name]: value,
        });
      };
    
      const agregarLibro = () => {
       
        if (
          nuevoLibro.nombre.trim() === '' ||
          nuevoLibro.autor.trim() === '' ||
          nuevoLibro.fechaPublicacion.trim() === ''
        ) {
          alert('Por favor, completa todos los campos antes de agregar un libro.');
          return;
        }
    
        setLibros([...libros, nuevoLibro]);
        setNuevoLibro({
          nombre: '',
          autor: '',
          fechaPublicacion: '',
          estado: 'Disponible',
        });
      };
    
      const eliminarLibro = (index) => {
        const nuevaListaLibros = [...libros];
        nuevaListaLibros.splice(index, 1);
        setLibros(nuevaListaLibros);
      };
      const cerrarSesion = () =>{
        localStorage.removeItem('usuario');
        localStorage.removeItem('contraseña');
        navigate('/Login', {replace: true})
      }
    return(
        <div>
      <h1>Bienvenido, {usuario}</h1>
      <h1>Agregar Libro</h1>
      <div>
        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="Nombre del libro"
                name='nombre'
                value={nuevoLibro.nombre}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Autor del libro"
                name='autor'
                value={nuevoLibro.autor}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Fecha de publicación"
                name="fechaPublicacion"
                value={nuevoLibro.fechaPublicacion}
                onChange={handleChange}
              />
            </div>
            <div>
              <select
              name='estado'
              value={nuevoLibro.estado}
              onChange={handleChange}
              >
                <option value="Prestado">Prestado</option>
                <option value="Dañado">Dañado</option>
                <option value="Perdido">Perdido</option>
                <option value="Disponible">Disponible</option>
              </select>
            </div>
            <button
              type="button"
              onClick={agregarLibro}
            >
              Agregar Libro
            </button>
            <button
              type="button"
              onClick={cerrarSesion}
            >
              Cerrar Sesion
            </button>
          </form>
        </div>
      </div>
      <div>
        <div>
            <h2>Libros agregados</h2>
            {libros.map((libro, index) =>(
                <div key= {index} className='libro-card'>
                    <h3>{libro.nombre}</h3>
                    <p>Autor: {libro.autor}</p>
                    <p>fecha de publicación: {libro.fechaPublicacion}</p>
                    <p>Estado: {libro.estado}</p>
                    <button type='button' onClick={()=> eliminarLibro(index)}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
      </div>
    </div>
    )
}