import React from 'react'
import carrito from '../assets/carrito-de-compras.png'
import ordenador from '../assets/ordenador.png'



export default function Aside() {
  return (
    <aside>
       
       <img className="izquierda" src={ordenador} alt=""/>
       <p>Trabajos de impesión personalizados,<br/>
           desde 0.02€ con distintos acabados<br/>
           ¡EMPIEZA YA!</p>
       <img className="boton" src={carrito} alt="Boton con acceso a la página de impresion"/>
   </aside>

  )
}
