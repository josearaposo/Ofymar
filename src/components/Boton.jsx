import React from 'react'
import carrito from '../assets/carrito-de-compras.png'
import '../css/boton.css'
import { Link } from 'react-router-dom'

export default function Boton() {
    
  return (
    <div>
        <img className="boton" src={carrito} alt="Boton con acceso al carrito"/>
    </div>
  )
}
