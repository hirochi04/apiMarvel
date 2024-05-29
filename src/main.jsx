// importamos la biblioteca react
import React from 'react'
// importamos la biblioteca reactDom, que proporciona metodos especificos del doom para react
import ReactDOM from 'react-dom/client'
//importamos un nuevo componente llamado ProyectoGif desde otro archivo en el mismo directorio
import { ProyectoGif } from './ProyectoGif'

import './styles.css'

// Creamos un nuevo contenedor de raíz React en el elemento con el id 'root' y renderizamos el componente ProyectoGif en el.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProyectoGif />
 
  </React.StrictMode>,
)