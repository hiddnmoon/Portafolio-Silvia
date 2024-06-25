import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import cabecera1 from '../image/cabecera1.png';
import cabecera2 from '../image/cabecera2.png';
import cabecera3 from '../image/cabecera3.png';
import estructuraGenero1 from '../image/estructuraGenero1.png';
import estructuraGenero2 from '../image/estructuraGenero2.png';
import estructuraGenero4 from '../image/estructuraGenero4.png';
import estructuraGenero3 from '../image/estructuraGenero5.png';
import seccionProductos from '../image/seccionProductos.png';
import productoDetalle from '../image/productoDetalle.png';
import productoDetalle2 from '../image/productoDetalle2.png';
import sesion1 from '../image/sesion1.png';
import sesion2 from '../image/sesion2.png';
import hambur from '../image/hambur.png';
import piedepagina from '../image/piedepagina.png';

function ProyectoDetalle1({ seccionAnimacion }) {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const descargarDocumentacion = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Documentacion.pdf';  
    link.download = 'Documentacion.pdf'; 
    link.click();
  };

  const descargarGuiaEstilo = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/GuiaEstilo.pdf'; 
    link.download = 'GuiaEstilo.pdf';
    link.click();
  };

  return (
    <>
      <Transition
        show={seccionAnimacion === 'Proyecto1'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-full"
      >
        <div
          id="Proyecto1"
          className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            minHeight: isMobile ? '5550px' : '7700px',
          }}
        >
          <div className="max-w-4xl px-6 py-12 mt-14">
            <h2 className="text-3xl font-semibold mb-4 text-center md:inline-block md:border-b-4">
              Proyecto de Tienda en Línea de Moda y Accesorios
            </h2>
            <p className="text-lg text-gray-200">
              El proyecto consiste en desarrollar una tienda en línea de moda y accesorios, similar a marcas reconocidas
              como Stradivarius o Zara. Los usuarios podrán explorar una amplia gama de prendas y accesorios,
              realizar compras de manera accesible y conveniente, y disfrutar de funcionalidades como gestión de carrito
              de compras, sistema de ofertas, y perfiles de usuario personalizados.
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-2">Aspectos Clave del Proyecto:</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li className='text-lg'>Sistema de autenticación y gestión de usuarios.</li>
              <li className='text-lg'>Gestión de stock y sistema de ofertas.</li>
              <li className='text-lg'>Roles diferenciados para usuarios, administradores y director.</li>
              <li className='text-lg'>API REST para acceso a datos de productos y ofertas.</li>
              <li className='text-lg'>Interfaz de usuario intuitiva y accesible.</li>
              <li className='text-lg'>Seguridad robusta contra ataques.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-8 mb-2">Tecnologías Utilizadas:</h3>
            <ul className="list-disc list-inside text-gray-200">
              <li className='text-lg'>Frontend: React, Tailwind CSS.</li>
              <li className='text-lg'>Backend: Laravel, Laravel JWT.</li>
              <li className='text-lg'>Base de datos: MySQL con phpMyAdmin en Docker.</li>
              <li className='text-lg'>Herramientas: Visual Studio Code, Docker, Postman, GitHub, StarUML, Photoshop, Mockitt.wondershare.</li>
            </ul>
            
            <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4 inline-block border-b-4">Identidad Visual</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Tipos de cabeceras</h3>
                <p className="text-lg text-gray-200">
                  En el diseño de la interfaz de usuario, se han implementado tres tipos distintos de cabeceras de navegación.
                </p>
                <div className="mt-4">
                  <p className="text-lg text-gray-200">Cabecera tipo 1: Fondo blanco, texto blanco.</p>
                  <img src={cabecera1} alt="Cabecera tipo 1" className="mb-4 w-full mt-3" />
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-200">Cabecera tipo 2: Fondo blanco, texto negro.</p>
                  <img src={cabecera2} alt="Cabecera tipo 2" className="mb-4 w-full mt-3" />
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-200">Cabecera tipo 3: Fondo blanco, texto negro (nombre del sitio) y texto blanco (íconos).</p>
                  <img src={cabecera3} alt="Cabecera tipo 3" className="mb-4 w-full mt-3" />
                </div>
              </div>
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Estructura de las páginas de cada género</h3>
                <p className="text-lg text-gray-200">
                  Estructura de las páginas de cada género: Organizadas en cuadrículas y secciones que destacan diferentes categorías de productos.
                </p>
                <div className="mt-4">
                  <img src={estructuraGenero1} alt="Estructura de las páginas de cada género" className="mb-4 w-full" />
                  <img src={estructuraGenero2} alt="Estructura de las páginas de cada género" className="mb-4 w-full" />
                  <img src={estructuraGenero3} alt="Estructura de las páginas de cada género" className="mb-4 w-full" />
                  <img src={estructuraGenero4} alt="Estructura de las páginas de cada género" className="mb-4 w-full" />
                </div>
              </div>
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Sección de productos y detalles</h3>
                <p className="text-lg text-gray-200">
                  Sección de productos y detalles: Incluye información detallada, selección de tallas y productos relacionados.
                </p>
                <div className="mt-4">
                  <img src={seccionProductos} alt="Sección de productos y detalles" className="mb-4 w-full" />
                </div>
              </div>
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Sección de productos y detalles</h3>
                <p className="text-lg text-gray-200">
                  La sección principal muestra el producto detalladamente con un carrusel de imágenes para visualizar diferentes ángulos y detalles.
                  A la derecha del carrusel se presenta el nombre del producto y su precio. Si hay una oferta, se muestra el precio original junto al
                   precio de oferta resaltado en rojo para destacar descuentos. Los usuarios pueden seleccionar tallas disponibles con botones de opción y 
                   utilizar los botones "Añadir a la cesta" y "Añadir a la lista de deseos" para agregar el producto con un clic.
                </p>
                <div className="mt-4">
                  <img src={productoDetalle} alt="Sección de productos y detalles" className="mb-4 w-full" />
                </div>
                <p className="text-lg text-gray-200 text-center">
                Al final de la página, los productos recomendados ofrecen a los usuarios opciones relacionadas que pueden interesarles, 
                mejorando su experiencia de compra al facilitar el descubrimiento de productos complementarios.
                </p>
                <div className="mt-4">
                  <img src={productoDetalle2} alt="Sección de productos y detalles" className="mb-4 w-full" />
                </div>
              </div>
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Estructura de sesión</h3>
                <p className="text-lg text-gray-200">
                  Páginas de registro e inicio de sesión diseñadas para claridad y accesibilidad.
                </p>
                <div className="mt-4">
                  <img src={sesion1} alt="Estructura de sesión" className="mb-4 w-full" />
                  <img src={sesion2} alt="Estructura de sesión" className="mb-4 w-full" />
                </div>
              </div>
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Menú hamburguesa</h3>
                <p className="text-lg text-gray-200">
                  Navegación desplegable con opciones de submenú y cierre intuitivo.
                </p>
                <div className="mt-4">
                  <img src={hambur} alt="Menú hamburguesa" className="mb-4 w-full" />
                </div>
              </div>
              
              <div className="mb-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Pie de página</h3>
                <p className="text-lg text-gray-200">
                  Secciones organizadas con enlaces relevantes y redes sociales.
                </p>
                <div className="mt-4">
                  <img src={piedepagina} alt="Pie de página" className="mb-4 w-full" />
                </div>
              </div>
            </div>

            <div className="">
              <h3 className="text-xl font-semibold mb-2 text-center">Documentación y Guía de estilos</h3>
              <div className="mt-4 flex flex-col md:flex-row items-center justify-center">
                <button
                  className="bg-white text-black font-bold py-2 px-4 mb-2 md:mb-0 md:mr-4 rounded"
                  onClick={descargarDocumentacion}
                >
                  Descargar Documentación
                </button>
                <button
                  className="bg-white text-black font-bold py-2 px-4 mb-2 md:mb-0 rounded"
                  onClick={descargarGuiaEstilo}
                >
                  Descargar Guía de Estilo
                </button>
                <a
                  href="https://github.com/crodros2601/Tienda-de-ropa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block md:inline-block ml-0 md:ml-4"
                >
                  <button className="bg-white text-black font-bold py-2 px-4 rounded">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
            
          </div>

        </div>
      </Transition>
    </>
  );
}

export default ProyectoDetalle1;

