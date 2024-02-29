import React, { createContext, useState } from 'react'

export const datosContext = createContext(null);

export const CarritoProvider = ({children}) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <datosContext.Provider value={[carrito, setCarrito]}>
      {children}
    </datosContext.Provider>
  )
}
