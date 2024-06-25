import { Transition } from '@headlessui/react';
import React from 'react';
import street3 from '../image/street3.jpg';

function Contacto({ seccionAnimacion }) {
  return (
    <>
      <Transition
        show={seccionAnimacion === 'Contacto'}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 transform translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform translate-y-full"
      >
        <div
          id="Contacto"
          className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${street3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="w-full sm:w-auto mx-auto border-4 border-white p-4 sm:p-8 bg-opacity-75">
            <div className="flex flex-col sm:flex-row items-center mx-auto mb-3 mt-5 space-y-4 sm:space-y-0 sm:space-x-5 px-4 sm:px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="text-xl sm:text-2xl text-white text-center sm:text-left">carmelorodriguezrosalina@gmail.com</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center text-center mb-2 space-y-4 sm:space-y-0 sm:space-x-5 px-4 sm:px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 sm:w-8 sm:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <p className="text-xl sm:text-2xl text-white text-center sm:text-left">+34 634 84 66 23</p>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default Contacto;
