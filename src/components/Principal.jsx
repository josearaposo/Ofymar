import React from 'react'
import Aside from './Aside.jsx'
/* import '../css/global.css' */
import '../css/main.css'
import logo from '../assets/logo.png'
import carrito from '../assets/carrito-de-compras.png'

export default function Principal() {
  return (
    <div className="contenedor-principal">
    <Aside />
    <main>
        <img src={logo} alt="" className="logoenmain"/>
        <h1 className="titulo">Suministro Intregral de Oficina y Escolar</h1>
        <a href="tienda.html">
            <img className="botontienda" 
            src={carrito}
            alt="Acceso carrito que enlaza con la tienda online"/>
        </a>
        <p>Disponemos de stock permanente en + de <strong>18.000 referencias</strong>
            de productos de Papelería e Informática.</p>
    </main>
    </div>

  )
}
