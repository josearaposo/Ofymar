
import './App.css'
import Header from './components/Header.jsx'
import Principal from './components/Principal.jsx'
import Footer from './components/Footer.jsx'
import Tienda from './components/Tienda.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { CarritoProvider } from './contexts/CarritoContext.jsx'
import Carrito from './components/Carrito.jsx'

const App = () =>{

  return (
    <CarritoProvider>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path ="/" element={<Principal />}/>
          <Route path ="/tienda" element={<Tienda />}/>
          <Route path ="/carrito" element={<Carrito />}/>
        </Routes>
        
     <Footer />
     </div>
    </Router>
    </CarritoProvider>
  )
}

export default App
