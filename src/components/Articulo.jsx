import React, { useContext, useEffect } from 'react'
import mascarrito from '../assets/anadir.png'
import menoscarrito from '../assets/quitar-del-carrito.png'
import '../css/articulo.css'
import { datosContext } from '../contexts/CarritoContext';

function Articulo({id, nombre,descripcion,precio,imagen,categoria}) {

    const [carrito, setCarrito] = useContext(datosContext);

    useEffect(() => {
        //si hay algo almacenado que en las funciones de añadir y borrar se guandan como tenxo
        //y se la convertimos en objeto
        const carritoAlmacenado = localStorage.getItem('carrito');
        if (carritoAlmacenado) {
          setCarrito(JSON.parse(carritoAlmacenado));
        }
      }, []);

      //funcion añadir al carrito
    const addAlCarrito = () => {
        setCarrito((actualCarrito) => {
           
          const articuloEncontrado = actualCarrito.find((carrito) => carrito.id === id);
      
          if (articuloEncontrado) {
         
            const nuevoCarrito = actualCarrito.map((articulo) =>
              articulo.id === id ? { ...articulo, cantidad: articulo.cantidad + 1 } : articulo
            );
          
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            return nuevoCarrito;
          } else {
           
            const nuevoCarrito = [...actualCarrito, { id, cantidad: 1, precio, nombre, imagen }];
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            return nuevoCarrito;
          }
        });
      };

      const borrarArticulo = (id) => {
        setCarrito((actualCarrito) => {
         
          const articuloEncontrado = actualCarrito.find((articulo) => articulo.id === id);
      
          if (articuloEncontrado) {
            if (articuloEncontrado.cantidad === 1) {
           
              const nuevoCarrito = actualCarrito.filter((articulo) => articulo.id !== id);
              localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
              return nuevoCarrito;
            } else {
             
              const nuevoCarrito = actualCarrito.map((articulo) =>
              
                articulo.id === id ? { ...articulo, cantidad: articulo.cantidad - 1 } : articulo
              );
              
              localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
              return nuevoCarrito;
            }
          }
      
          // Si el artículo no se encontró, simplemente devuelve el carrito actual
          return actualCarrito;
        });
      };

    return (
       <div className="articulos">
           <div className="textos">
               <img className="img-articulo" src={imagen} alt="foto de un lapiz noris HB escritura normal" /> 
               <p>{nombre}</p>
               <p>{descripcion}</p>
               <p>{precio}€</p>  
               <a href="#" onClick={()=> addAlCarrito()}>
                <img className="img-carrito" src={mascarrito} alt="carrito" /></a>
                <a href="#" onClick={()=> borrarArticulo(id)}>
                <img className="img-carrito" src={menoscarrito} alt="borrar" /></a>
           </div>
       </div>
   )
   }

export default Articulo;
