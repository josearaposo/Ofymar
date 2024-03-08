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
            //buscar el articulo si esta o no en el carrito
          const articuloEncontrado = actualCarrito.find((carrito) => carrito.id === id);
      
          if (articuloEncontrado) {
            //si existe ya en el carrito
            const nuevoCarrito = actualCarrito.map((articulo) =>
              articulo.id === id ? { ...articulo, cantidad: articulo.cantidad + 1 } : articulo
            );
            //uso de localstorage para mantener los datos
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            return nuevoCarrito;
          } else {
            //si no existe en el carrito añadimos por primera vez
            const nuevoCarrito = [...actualCarrito, { id, cantidad: 1, precio, nombre, imagen }];
            localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
            return nuevoCarrito;
          }
        });
      };

      const borrarCarrito = (id) => {
        setCarrito((actualCarrito) => {
            //buscamos el articulo para saber si esta en el carrito
          const articuloEncontrado = actualCarrito.find((articulo) => articulo.id === id);
      
          if (articuloEncontrado) {
            if (articuloEncontrado.cantidad === 1) {
              // Si la cantidad es 1, elimina el artículo del carrito
              const nuevoCarrito = actualCarrito.filter((articulo) => articulo.id !== id);
              localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
              return nuevoCarrito;
            } else {
              // Si la cantidad es mayor a 1, reducimos la cantidad
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
                <a href="#" onClick={()=> borrarCarrito(id)}>
                <img className="img-carrito" src={menoscarrito} alt="borrar" /></a>
           </div>
       </div>
   )
   }

export default Articulo;
