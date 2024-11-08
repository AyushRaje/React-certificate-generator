import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure} from '@headlessui/react'
import React, {useRef,useState} from 'react'
export default function VerificationNav(){
    return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Grace Edunet"
                src="/logo.jpg"
                className="h-8 w-auto"
              />
            </div>
            <div className=" flex justify-center items-center sm:ml-72">
              <div className="flex justify-center items-center space-x-4">
                <h3 className='items-center justify-center text-3xl font-bold sm:text-4xl text-green-600'> Certificate Verification </h3>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-green-500 p-1 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>


          </div>
        </div>
      </div>
      </Disclosure>
    );
}