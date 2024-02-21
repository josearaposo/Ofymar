
import './App.css'
import Header from './components/Header.jsx'
import Principal from './components/Principal.jsx'
import Footer from './components/Footer.jsx'
import Tienda from './components/Tienda.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const App = () =>{

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path ="/" element={<Principal />}/>
          <Route path ="/tienda" element={<Tienda />}/>
        </Routes>
        
     <Footer />
     </div>
    </Router>
  )
}

export default App
