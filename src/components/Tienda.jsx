import React, { useContext , useState, useEffect } from 'react'
import Aside from './Aside.jsx'
import Articulo from './Articulo.jsx'
/* import Datos from '../json/articulos.json' */
import '../css/tienda.css'
import '../css/global.css'
import fotocarrito from '../assets/carrito-de-compras.png'
import { datosContext } from '../contexts/CarritoContext.jsx'
import { Link } from 'react-router-dom'



export default function Tienda() {
    
const URL = "/src/json/articulos.json";
const [Datos, setDatos] = useState([]);
const [datosPorCategoria, setdatosPorCategoria] = useState([]);

const categoria = 'Escritura';
useEffect(() => {

//Conexion fetch

   const fetchDatos = async () => {
        try {
            const response = await fetch(URL);
            const Datos = await response.json();
            setDatos(Datos);

            const datosPorCategoria = Datos.filter((articulo) => articulo.categoria === categoria);
            setdatosPorCategoria(datosPorCategoria);

        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }
        fetchDatos();
    },[]);

 const [carrito, setCarrito] = useContext(datosContext);
 const cantidad = carrito.reduce((total, valor) => {
     return total + valor.cantidad;
 },0);

  return (
    <div className="contenedor-principal">
    <Aside />
    <main>
        <div className="contenedor-menu-articulos">
            <div className="contenedor-navegacion">
                <ul>
                    <li><a href="#">Escritura</a></li>
                    <li><a href="#">Archivo</a></li>
                    <li><a href="#">Papelería</a></li>
                    <li><a href="#">Embalaje</a></li>
                    <li><a href="#">Informática</a></li>
                    <li><a href="articulo.html">Destacados</a></li>
                    <Link to={'/carrito'}>
                    <li><img src={fotocarrito} alt="carrito"/>{cantidad}</li>
                    </Link>
                </ul>
            </div>
               
     
        </div>
        <div className="contenedor">
          <div className="contenedor-articulos">   
            {
            datosPorCategoria.map((producto, idx) => {
            return <Articulo key={producto.id}{...producto} />;
            })}
            
            </div>
        </div>
    </main>
    </div>
  )
}
