import React, { useContext } from 'react'
import Aside from './Aside.jsx'
import Articulo from './Articulo.jsx'
import Datos from '../json/articulos.json'
import '../css/tienda.css'
import '../css/global.css'
import fotocarrito from '../assets/carrito-de-compras.png'
import { datosContext } from '../contexts/CarritoContext.jsx'
import { Link } from 'react-router-dom'

export default function Tienda() {
 
 const [carrito, setCarrito] = useContext(datosContext);
 const cantidad = carrito.reduce((total, valor) => {
     return total + valor.cantidad;
 },0);

  return (
    <div className="contenedor-principal">
    <Aside />
    <main>
        <div class="contenedor-menu-articulos">
            <div class="contenedor-navegacion">
                <ul>
                    <li><a href="#">Escritura</a></li>
                    <li><a href="#">Archivo</a></li>
                    <li><a href="#">Papelería</a></li>
                    <li><a href="#">Embalaje</a></li>
                    <li><a href="#">Informática</a></li>
                    <li><a href="articulo.html">Destacados</a></li>
                    <Link to={'/carrito'}>
                    <li><a href="#"><img src={fotocarrito} alt="carrito"/>{cantidad}</a></li>
                    </Link>
                </ul>
            </div>
  
{/*                 <label for="buscador">Buscar</label>
                <input type="text" id="buscador"/> */}
                
     
        </div>
        <div class="contenedor">
            <div class="contenedor-articulos">   
            {
            Datos.map((producto, idx) => {
            return <Articulo key={producto}{...producto} />;
            /* nombre={dato.nombre} descripcion={dato.descripcion} precio={dato.precio} imagen={dato.imagen}/>) */
            })}
            
            </div>
{/*             <ul class="pagination">
                    <li><a href="tienda.html" aria-label="Página anterior"> << </a></li>
                    <li><a href="tienda.html" aria-label="Ir a la página 1">1</a></li>
                    <li><a href="tienda.html" aria-label="Ir a la página 2">2</a></li>
                    <li><a href="" aria-label="Página actual, página 3" aria-current="true">3</a></li>
                    <li><a href="" aria-label="Siguiente página" aria-disabled="true"> >> </a></li>
                </ul> */}
        </div>
    </main>
    </div>
  )
}
