import React from 'react'
import '../css/footer.css'

export default function Footer() {
  return (
    <div>
        <footer>
       <div className="contenedor-navegacion">
       <ul>
           <li><a href="#">Copyright</a></li>
           <li><a href="#">Politica de Privacidad</a></li>
           <li><a href="#">Avisos Legales</a></li>
           <li><a href="#">Politica de Cookies</a></li>
          
           <li><a href="@Ofymar">@ Jose A. Raposo</a></li>
           <li><a href="www.facebook.com"><img className="redes" src="imagenes/facebook.png" alt="acceso a facebook"/></a> </li>
           <li><a href="www.instagram.com"><img className="redes" src="imagenes/instagram.png" alt="acceso a instagram"/></a></li>
           <li><a href="https://protecciondatos-lopd.com/empresas/licencias-creative-commons" target="_blank">
                <img className="redes" src="imagenes/licencia.png" alt="acceso a instagram"/></a></li>
       </ul>
   </div>
</footer>
    </div>
  )
}
