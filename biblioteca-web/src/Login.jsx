import './Login.css'

export function Login (){
    return (
        <div className='login-container'>
          <h2>Iniciar Sesión</h2>
          <form className='login-form'>
            <div className='form-group'>
              <label htmlFor="usuario">Usuario:</label>
              <input
                type="text"
                id="usuario"
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor="contraseña">Contraseña:</label>
              <input
                type="password"
                id="contraseña"
                required
              />
            </div>
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      );
    }
    