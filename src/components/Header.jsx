import React from 'react'
import '../css/header.css'
/* import '../css/global.css' */
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <div>
        <header>
        <div className="logo">
            <a href="index.html"><img src={logo} alt="logo empresa que funciona de enlace con la pagina inicio"/></a>

        </div>
        <div className="menu">
            <nav>
                <div>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="tienda.html">Tienda</a></li>
                    <li><a href="construccion.html">Impresión</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="blog.html">blog</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
            </nav>
        </div>

    </header>
    </div>
  )
}
