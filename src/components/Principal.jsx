import React from 'react'
import '../css/global.css'
import '../css/main.css'
 
import logo from '../assets/logo.png'
export default function Principal() {
  return (
    <div className="contenedor-principal">
    <aside>
       
        <img className="izquierda" src={logo} alt=""/>
        <p>Trabajos de impesión personalizados,<br/>
            desde 0.02€ con distintos acabados<br/>
            ¡EMPIEZA YA!</p>
        <img className="boton" src={logo} alt="Boton con acceso a la página de impresion"/>
    </aside>
    <main>
        <img src={logo} alt="" className="logoenmain"/>
        <h1 className="titulo">Suministro Intregral de Oficina y Escolar</h1>
        <a href="tienda.html">
            <img className="botontienda" 
            src={logo}
            alt="Acceso carrito que enlaza con la tienda online"/>
        </a>
        <p>Disponemos de stock permanente en + de <strong>18.000 referencias</strong>
            de productos de Papelería e Informática.</p>
    </main>
    </div>

  )
}
