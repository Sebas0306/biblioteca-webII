import { useNavigate } from 'react-router';
import './styles/Login.css'
import {React, useState} from 'react';


export function Login (){

  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();


 const usuarioChange = (e) => {
  setUsuario(e.target.value)
 };

 const contraseñaChange = (e) => {
  setContraseña(e.target.value)
 };

 const iniciarSesion = () =>{
  localStorage.setItem('usuario', usuario);
  localStorage.setItem('contraseña', contraseña);

  setUsuario('');
  setContraseña('');
  navigate('/Libros', {replace: true})
 };



    return (
        <div className='login-container'>
          <h2>Iniciar Sesión</h2>
          <form className='login-form'>
            <div className='form-group'>
              <label htmlFor="usuario">Usuario:</label>
              <input
                type="text"
                id="usuario"
                value={usuario}
                onChange={usuarioChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor="contraseña">Contraseña:</label>
              <input
                type="password"
                id="contraseña"
                value={contraseña}
                onChange={contraseñaChange}
                required
              />
            </div>
            <button type="submit" onClick={iniciarSesion}>Iniciar Sesión</button>
          </form>
        </div>
      );
    }
    