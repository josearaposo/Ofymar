import React from 'react'
import ordenador from '../assets/ordenador.png'
import '../css/main.css'
import Boton from './Boton.jsx'
import { Link } from 'react-router-dom'


export default function Aside() {
  return (
    <aside>
       
       <img className="izquierda" src={ordenador} alt=""/>
       <p>Trabajos de impesión personalizados,<br/>
           desde 0.02€ con distintos acabados<br/>
           ¡EMPIEZA YA!</p>
           <Link to={'/tienda'}>
           <Boton />
           </Link>
   </aside>

  )
}
