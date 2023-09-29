export function Libros(){
    return(
        <div>
      <h1>Agregar Libro</h1>
      <div>
        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="Nombre del libro"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Autor del libro"
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Fecha de publicación"
                name="fechaPublicacion"
              />
            </div>
            <div>
              <select
              >
                <option value="Prestado">Prestado</option>
                <option value="Dañado">Dañado</option>
                <option value="Perdido">Perdido</option>
                <option value="Disponible">Disponible</option>
              </select>
            </div>
            <button
              type="button"
            >
              Agregar Libro
            </button>
          </form>
        </div>
      </div>
      <div>
        <div>
          <ul>
          </ul>
        </div>
      </div>
    </div>
    )
}