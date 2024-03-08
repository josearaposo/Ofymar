import React, { useContext } from 'react'
import { datosContext } from '../contexts/CarritoContext';
import Aside from './Aside';
import Pdf from './Pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import '../css/carrito.css'

export default function Carrito() {

    const [carrito, setCarrito] = useContext(datosContext);
    const cantidad = carrito.reduce((total, valor) => {
        return total + valor.cantidad;
    },0);

    const totalCarrito = carrito.reduce((total, valor) => {
        return total + valor.cantidad * valor.precio;
    },0);

    const hacerCompra = () => {

        // Después de realizar la compra, borrar el contenido del localStorage
        localStorage.removeItem('carrito');
    
        // También puedes actualizar el estado del carrito en tu aplicación, si es necesario
        setCarrito([]);
      };
 
    
  return (
    <div className="contenedor-principal">
    <Aside />
    <main>
        <div>
            
        {carrito.map((articulo) => (     
            <><div className='lista-carrito'>
                <img className="img-articulo" src={articulo.imagen} alt="foto de un lapiz noris HB escritura normal" /> 
                <p>{articulo.nombre}</p>
                <p>{articulo.cantidad}</p>
                <p>{articulo.precio}€</p>
                </div>
  </>         
        ))}
        </div>
        <h1>Carrito:</h1>
        <div>Cantidad: {cantidad}</div>
        <div>Total: {totalCarrito} €</div>
        <PDFDownloadLink document={<Pdf micompra={carrito}/>} fileName='factura.pdf'>
          {({ blob, url, loading, error }) => (
            <button onClick={hacerCompra}>
              {loading ? 'Cargando documento...' : 'Confirmar Compra'}
            </button>
          )}
        </PDFDownloadLink>
        <button onClick={hacerCompra}>Cancelar</button>
    </main>

    </div>
  )
}
