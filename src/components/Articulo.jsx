import React, { useContext } from 'react'
import fotocarrito from '../assets/carrito-de-compras.png'
import '../css/articulo.css'
import { datosContext } from '../contexts/CarritoContext';

function Articulo({id, nombre,descripcion,precio,imagen,categoria}) {

    const [carrito, setCarrito] = useContext(datosContext);

    const addAlCarrito = () => {
        setCarrito((articulosCarrito) => {
            
            const articuloEncontrado = articulosCarrito.find(carrito => carrito.id === id);
            
            if(articuloEncontrado) {
                return articulosCarrito.map(articulo => {
                    if(articulo.id === id) {
                        return {
                         ...articulo,
                            cantidad: articulo.cantidad + 1
                        }
                    } else {
                        return articulo;
                    }
                })
            } else {
                return [...articulosCarrito, {id, cantidad: 1, precio, nombre, imagen}]
            }
    });
    }
     const borrarArticulo = (id) => {
        setCarrito((articulosCarrito) => {
            if (articulosCarrito.find((articulo) => articulo.id === id)?.cantidad ===1){
                return articulosCarrito.filter((articulo) => articulo.id !== id);
            } else {
                return articulosCarrito.map((articulo) => {
                    if(articulo.id === id) {
                        return {
                       ...articulo,
                            cantidad: articulo.cantidad - 1};
                    } else {
                        return articulo;
                    }
                });
            } 
        });
    }  

    return (
       <div className="articulos">
           <div className="textos">
               <img className="img-articulo" src={imagen} alt="foto de un lapiz noris HB escritura normal" /> 
               <p>{nombre}</p>
               <p>{descripcion}</p>
               <p>{precio}€</p>  
               <a href="#" onClick={()=> addAlCarrito()}>
                <img className="img-carrito" src={fotocarrito} alt="carrito" /></a>
                <a href="#" onClick={()=> borrarArticulo(id)}>
                <img className="img-carrito" src={fotocarrito} alt="borrar" /></a>
           </div>
       </div>
   )
   }

export default Articulo;
