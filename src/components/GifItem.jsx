// Definimos un componente funcional llamado GifItem que toma title, url e id como props
export const GifItem = ({ id, name, thumbnail, descripcion }) => {
    // Devolvemos el JSX que se renderizará
    return (
    // Creamos un div con la clase card
    <div className="card">
      {/* // Mostramos una imagen con src establecido a url y alt establecido a title */}
      <img src={ thumbnail } alt={ id } />
      {/* // Mostramos el título de la imagen */}
      <p>{ name }</p>
      <p>{descripcion}</p>
    </div>
  )
  }