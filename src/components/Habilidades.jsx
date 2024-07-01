import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import sunset1 from '../image/sunset1.jpg';
import premiere from '../image/premiere.webp';
import aftereffect from '../image/aftereffect.webp';
import liveroom from '../image/liveroom.webp';
import ps from '../image/ps.webp';
import camara from '../image/camara.webp';
import sonido from '../image/sonido.webp';
import iluminacion from '../image/iluminacion.webp';
import productora from '../image/productora.webp';
import director from '../image/director.webp';
import guionista from '../image/guionista.webp';
import script from '../image/script.webp';

function Habilidades({ seccionAnimacion }) {
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

  return (
    <>
      <Transition
        show={seccionAnimacion === 'Habilidades'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform -translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-full"
      >
        <div
          id="Habilidades"
          className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${sunset1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: isMobile ? '200vh' : '145vh'
          }}
        >
          <div className="max-w-5xl w-full px-4 md:px-8">
            <div className="flex flex-col items-center p-4 md:p-0">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 text-center">Habilidades Técnicas de Producción</h2>

              {/* Cameras */}
              <div className="flex items-start space-x-4 my-4">
              <img src={camara} alt="Camera Icon" className="w-8 h-8 md:ml-3 md:w-9 md:h-9 filter invert brightness-200" />
              <p className="text-sm md:text-base">Manejo de cámaras DSLR y cámaras de video profesionales, incluyendo ajustes de exposición, enfoque, balance de blancos y composición de tomas.</p>
              </div>

              {/* Lighting */}
              <div className="flex items-start space-x-4 my-4">
                <img src={iluminacion} alt="Light Icon" className="w-8 h-8 md:w-10 md:h-10 filter invert brightness-200" />
                <p className="text-sm md:text-base md:mt-2">Configuración y manejo de equipos de iluminación para diferentes entornos y situaciones, tanto en interiores como en exteriores.</p>
              </div>

              {/* Sound */}
              <div className="flex items-start space-x-4 my-4">
                <img src={sonido} alt="Sound Icon" className="w-8 h-8 md:ml-1 md:w-10 md:h-10 filter invert brightness-200" />
                <p className="text-sm md:text-base">Captura y edición de sonido, manejo de micrófonos y equipos de grabación, y técnicas de postproducción para asegurar una alta calidad de audio.</p>
              </div>

              {/* Adobe Software */}
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold my-8 text-center">Software</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex items-start space-x-4 my-4">
                  <img src={ps} alt="Photoshop Icon" className="w-8 h-8 md:w-10 md:h-10" />
                  <p className="text-sm md:text-base">Edición de imágenes y creación de gráficos visuales, retoque fotográfico, y diseño de elementos visuales para proyectos audiovisuales.</p>
                </div>
                <div className="flex items-start space-x-4 my-4">
                  <img src={premiere} alt="Premiere Icon" className="w-8 h-8 md:w-10 md:h-10" />
                  <p className="text-sm md:text-base">Edición de video no lineal, montaje, corrección de color, y exportación de proyectos en varios formatos y resoluciones.</p>
                </div>
                <div className="flex items-start space-x-4 my-4">
                  <img src={aftereffect} alt="After Effects Icon" className="w-8 h-8 md:w-10 md:h-10" />
                  <p className="text-sm md:text-base">Creación de efectos visuales, animación gráfica, y composición digital para integrar elementos visuales complejos en los proyectos.</p>
                </div>
                <div className="flex items-start space-x-4 my-4">
                  <img src={liveroom} alt="Lightroom Icon" className="w-8 h-8 md:w-10 md:h-10" />
                  <p className="text-sm md:text-base">Edición y retoque fotográfico, gestión de catálogos de imágenes, y aplicación de ajustes avanzados para la corrección y mejora de fotos.</p>
                </div>
              </div>

              {/* Roles en Producción */}
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold my-8 text-center">Roles en Producción</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="flex items-start space-x-4 my-4">
                  <img src={productora} alt="Producer Icon" className="w-8 h-8 md:w-10 md:h-10 filter invert brightness-200 md:mt-1" />
                  <p className="text-sm md:text-base">Coordinación y gestión de todos los aspectos de la producción, desde la preproducción hasta la postproducción, asegurando el cumplimiento de plazos y presupuestos.</p>
                </div>
                <div className="flex items-start space-x-4 my-4">
                  <img src={director} alt="Director Icon" className="w-8 h-8 md:w-10 md:h-10 filter invert brightness-200 md:mt-2" />
                  <p className="text-sm md:text-base">Dirección de proyectos audiovisuales, supervisión del equipo técnico y artístico, y toma de decisiones creativas para garantizar la visión artística del proyecto.</p>
                </div>
                <div className="flex items-start space-x-4 my-4">
                  <img src={guionista} alt="Writer Icon" className="w-8 h-8 md:w-10 md:h-10 filter invert brightness-200 md:mt-2" />
                  <p className="text-sm md:text-base">Escritura de guiones, desarrollo de tramas y personajes, y creación de diálogos coherentes y atractivos para diversos formatos audiovisuales.</p>
                </div>
                <div className="flex items-start space-x-4 my-4">
                  <img src={script} alt="Continuity Icon" className="w-8 h-8 md:w-10 md:h-10 filter invert brightness-200 md:mt-2" />
                  <p className="text-sm md:text-base">Supervisión de la continuidad en las grabaciones, asegurando la coherencia visual y narrativa entre las diferentes tomas y escenas.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </Transition>
    </>
  );
}

export default Habilidades;

