import React from 'react'
import Articulos from '../json/articulos.json'
import carrito from '../assets/carrito-de-compras.png'

function BuscarArticulo(props) {
    return (
       <div className="articulos">
           <div className="textos">
               <img className="img-articulo" src={Articulos[{props.id}].imagen} alt="foto de un lapiz noris HB escritura normal" />
               <p>{props.id}</p>
              {/*  <p>{Articulos{props.id}}</p> */}
{/*                <p>{Articulos[props.id].descripcion}</p>
               {<p>{Articulos[props.id].precio}</p>} */}
               <a href="#"><img className="img-carrito" src={carrito} alt="carrito" /></a>
           </div>
       </div>
   )
   }


export default function Articulo() {
    return (
    <BuscarArticulo id="2"/>
    );
}
