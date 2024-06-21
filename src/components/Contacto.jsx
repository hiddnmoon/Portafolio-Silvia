import { Transition } from '@headlessui/react'
import React from 'react'

function Contacto({seccionAnimacion}) {
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
            <div id="Contacto" className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
                <h2 className="text-4xl font-bold">Contacto</h2>
            </div>
        </Transition>
    </>
  )
}

export default Contacto