import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import siyaProyecto from '../image/siyaProyecto.webp';
import siyaProyecto2 from '../image/siyaProyecto2.webp';
import siyaProyecto3 from '../image/siyaProyecto3.webp';
import siyaProyecto4 from '../image/siyaProyecto4.webp';
import siyaProyecto5 from '../image/siyaProyecto5.webp';

function ProyectoDetalle2({ seccionAnimacion }) {
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
        show={seccionAnimacion === 'Proyecto2'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-full"
      >
        <div
          id="Proyecto1"
          className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            minHeight: isMobile ? 'auto' : '3500px',
            padding: '2rem',
          }}
        >
          <div className="max-w-4xl px-6 py-12 mt-14">
            <div className='text-center'>
              <h2 className="text-3xl font-semibold mb-4 md:inline-block md:border-b-4">
                SI YA
              </h2>
            </div>
            
            <div className='flex justify-center mb-8 mt-4'>
              <iframe title="video" width="100%" height="315" src="https://www.youtube.com/embed/X-xWr_2OTQU" frameBorder="0" allowFullScreen></iframe>
            </div>

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Introducción del Proyecto</span> El proyecto consiste en la creación de un videoclip musical para la canción "Si Ya"
              de Marc Seguí producido por PhoskiFilms. Este tema fue elegido porque se considera que tiene gran potencial para conectar con
              la audiencia, dada la creciente popularidad del estilo musical​​.
            </p>

            <br />

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Producto o Servicio</span> El producto es un videoclip musical de género dramático, con una estética primaveral y tonos pasteles poco saturados,
              evocando una atmósfera ochentera. La duración del videoclip es de 3 minutos y 5 segundos.
            </p>

            <br />

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Funciones</span> que realicé dentro del proyecto, las cuales se dividieron entre dos personas previamente fueron: directora, cámara, script,
              iluminación y maquillaje.
            </p>

            <br />

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Postproducción</span> se llevó a cabo utilizando softwares como Adobe Premiere y Adobe After Effects,
              con corrección de color en DaVinci​​.
            </p>

            <br />

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Análisis del Sector</span> Se creó una empresa denominada "360 Films" con forma jurídica de Sociedad Colectiva debido a la
              ausencia de capital mínimo requerido. Ambas socias aportan tanto capital como trabajo. Se realizó un análisis DAFO donde se
              identificaron las siguientes fortalezas y debilidades:
            </p>

            <br />

            <ul className="list-disc list-inside text-gray-200">
              <li className='text-lg'><span className='font-bold'>Fortalezas:</span> Ganas de trabajar, ideas frescas e innovadoras.</li>
              <li className='text-lg'><span className='font-bold'>Debilidades:</span> Poca experiencia laboral y escasos recursos económicos.</li>
              <li className='text-lg'><span className='font-bold'>Oportunidades:</span> Alta demanda de empresas audiovisuales y trato igualitario a todos los artistas.</li>
              <li className='text-lg'><span className='font-bold'>Amenazas:</span> Competencia con otras productoras y un mercado audiovisual en declive​​.</li>
            </ul>

            <br />

            <p className="text-lg text-gray-200 text-justify">
                <span className='font-bold'>Oportunidades de Negocio</span> “360 Films” se distingue por su enfoque inclusivo, ofreciendo
              oportunidades a artistas sin importar su fama o número de seguidores. El objetivo es que todos los grupos puedan promocionar
              sus canciones a través de videoclips realizados por la empresa. Este proyecto en particular tiene un gran potencial de éxito
              por su capacidad de resonar emocionalmente con el público​​.
            </p>

            <br />

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Obligaciones Fiscales, Laborales y Prevención de Riesgos</span> Para poner en marcha la empresa, se registró la escritura en el Registro Mercantil
              y se presentó en Hacienda para obtener el CIF definitivo, lo cual acredita la aportación de toda la información necesaria a la Agencia Tributaria​​.
            </p>

            <br />

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Documentación del Proyecto</span> Incluye una sinopsis argumental, tratamiento audiovisual, guión literario y técnico, storyboard, informe de
              localizaciones, planificación detallada (listas de necesidades, hojas de desglose, plan de rodaje y trabajo, hojas de citación, fichas de
              casting, contratos, cesión de derechos y permisos), dirección de arte (diseño y necesidades escenográficas, de vestuario, maquillaje y peluquería),
              y un plan de promoción y venta​​.
            </p>

            <div className="mt-5 flex flex-wrap justify-center">
              <img src={siyaProyecto} className="mb-4 w-80 md:w-96 mr-2"/>
              <img src={siyaProyecto2} className="mb-4 w-80 md:w-96 ml-2"/>
            </div>

            <div className="mt-5 flex justify-center">
              <img src={siyaProyecto3} className="mb-4 w-80 md:w-96"/>
            </div>

            <div className="mt-5 flex justify-center">
              <img src={siyaProyecto4} className="mb-4 w-80 md:w-96"/>
            </div>

            <p className="text-lg text-gray-200 text-justify">
              <span className='font-bold'>Plan de Promoción y Venta</span> El plan de promoción incluye estrategias para aumentar la visibilidad del videoclip y su distribución
              en diversas plataformas, además de la creación de material promocional como carteles​​.
            </p>

            <br />

            <div className="mt-5 flex justify-center">
              <img src={siyaProyecto5} className="mb-4 w-80 md:w-96"/>
            </div>

          </div>
        </div>
      </Transition>
    </>
  );
}

export default ProyectoDetalle2;
