import React from 'react'
import carrito from '../assets/carrito-de-compras.png'
import '../css/articulo.css'

function Articulo(props) {
    console.log(carrito)
    console.log(props.imagen)
    return (
       <div className="articulos">
           <div className="textos">
               <img className="img-articulo" src={props.imagen} alt="foto de un lapiz noris HB escritura normal" /> 
               <p>{props.nombre}</p>
               <p>{props.descripcion}</p>
               <p>{props.precio}</p>  
               <a href="#"><img className="img-carrito" src={carrito} alt="carrito" /></a>
           </div>
       </div>
   )
   }

export default Articulo;
