import React from 'react';
import { Transition } from '@headlessui/react';
import lamparas from '../image/lamparas.jpg';
import javascript from '../image/javascript.png';
import react from '../image/react.png';
import css from '../image/css.png';
import html from '../image/HTML.png';
import Tailwind from '../image/Tailwind.png';
import PHP from '../image/PHP.png';
import java from '../image/java.png';
import laravel from '../image/laravel.png';
import mysql from '../image/mysql.png';
import visualStudio from '../image/visualStudio.png';
import docker from '../image/docker.png';
import eclipse from '../image/eclipse.png';
import git from '../image/git.svg';
import figma from '../image/figma.png';
import nodejs from '../image/nodejs.png';

function Tecnologias({ seccionAnimacion }) {
  return (
    <>
      <Transition
        show={seccionAnimacion === 'Tecnologias'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform translate-x-full"
        enterTo="opacity-100 transform translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-x-0"
        leaveTo="opacity-0 transform translate-x-full"
      >
        <div
          id="Tecnologias"
          className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${lamparas})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl w-full px-8">
            <div className="flex flex-col items-center p-6 mr-20">
              <h3 className="text-2xl font-bold mb-4">FRONTEND</h3>
              <div className="flex space-x-4">
                <div className="w-24 h-24">
                  <img src={html} alt="HTML Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-24 h-24">
                  <img src={css} alt="CSS Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-24 h-24">
                  <img src={javascript} alt="JavaScript Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-24 h-24">
                  <img src={react} alt="React Logo" className="w-full h-full object-contain p-2" />
                </div>
                
                <div className="w-24 h-24">
                  <img src={Tailwind} alt="Tailwind Logo" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg ml-20">
              <h3 className="text-2xl font-bold mb-4">BACKEND</h3>
              <div className="flex space-x-4">
                <div className="w-24 h-24">
                  <img src={laravel} alt="laravel Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-24 h-24">
                  <img src={java} alt="java Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-24 h-24">
                  <img src={mysql} alt="mysql Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-24 h-24">
                  <img src={PHP} alt="PHP Logo" className="w-full h-full object-contain p-2" />
                </div>  
              </div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg mr-20">
              <h3 className="text-2xl font-bold mb-4">HERRAMIENTAS</h3>
                <div className="flex space-x-4">
                  <div className="w-24 h-24">
                    <img src={git} alt="git Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="w-24 h-24">
                    <img src={visualStudio} alt="visualStudio Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="w-24 h-24">
                    <img src={eclipse} alt="eclipse Logo" className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="w-24 h-24">
                    <img src={docker} alt="docker Logo" className="w-full h-full object-contain p-2" />
                  </div>
                </div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg ml-20">
              <h3 className="text-2xl font-bold mb-4">APRENDIENDO</h3>
              <div className="flex space-x-4">
                <div className="w-24 h-24">
                  <img src={nodejs} alt="nodejs Logo" className="w-full h-full object-contain p-2" />
                </div>
                <div className="w-24 h-24">
                  <img src={figma} alt="figma Logo" className="w-full h-full object-contain p-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default Tecnologias;
