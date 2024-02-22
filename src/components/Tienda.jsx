import React from 'react'
import Aside from './Aside.jsx'
import Articulo from './Articulo.jsx'

export default function Tienda() {
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
                </ul>
            </div>
            <div class="buscador-articulos">
                <label for="buscador">Buscar</label>
                <input type="text" id="buscador"/>
                <a href="#"><img src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
            </div>
        </div>
        <div class="contenedor">
            <div class="contenedor-articulos">
              <Articulo />
{/*                 <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/73090g.jpeg" alt="foto de un lapiz noris HB escritura normal"/>
                        <p>Lapiz KF00123</p>
                        <p>LAPICESSTAEDTLER NORIS N.2 HB UNIDAD</p>
                        <p>0.45€</p>
                        <a href="#">
                          <img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div> */}
                <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/bic.jpeg" alt="foto del producto Bic Cristal Azul"/>
                        <p>Bic Cristal</p>
                        <p>BOLIGRAFO BIC TRAZO MEDIO AZUL</p>
                        <p>0.35€</p>
                        <a href="#"><img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div>
                <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/21148g.jpg" alt="foto del producto Archivador 21148 "/>
                        <p>Archivador 21148</p>
                        <p>ARCHIVADOR DE PALANCA LIDERPAPEL</p>
                        <p>1.45€</p>
                        <a href="#"><img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div>
                <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/07871g.jpg" alt="foto del producto Lapiz B"/>
                        <p>Lapiz KF00123</p>
                        <p>TEMPERA JOVI COLORES SURTDIDOS 5</p>
                        <p>3.75€</p>
                        <a href="#"><img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div>
                <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/73090g.jpeg" alt="foto del producto Lapiz HB"/>
                        <p>Lapiz KF00123</p>
                        <p>LAPICESSTAEDTLER NORIS N.2 HB UNIDAD</p>
                        <p>0.45€</p>
                        <a href="#"><img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div>
                <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/bic.jpeg" alt="foto del producto bic Cristal"/>
                        <p>Bic Cristal</p>
                        <p>BOLIGRAFO BIC TRAZO MEDIO AZUL</p>
                        <p>0.35€</p>
                        <a href="#"><img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div>
                <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/21148g.jpg" alt="foto del producto  Archivador"/>
                        <p>Archivador 21148</p>
                        <p>ARCHIVADOR DE PALANCA LIDERPAPEL</p>
                        <p>1.45€</p>
                        <a href="#"><img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div>
                <div class="articulos">
                    <div class="textos">
                        <img class="img-articulo" src="imagenes/07871g.jpg" alt="foto del producto Tempera de colores 6 unidades "/>
                        <p>Tempera colores</p>
                        <p>TEMPERA JOVI COLORES SURTDIDOS 5</p>
                        <p>3.75€</p>
                        <a href="#"><img class="img-carrito" src="imagenes/carrito-de-compras.png" alt="carrito"/></a>
                    </div>
                </div>

               
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
