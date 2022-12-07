import logo from "../Assets/logo.png";

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-black shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-16 w-auto md:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 w-auto md:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="hidden items-center md:ml-6 md:space-x-8 md:flex md:flex-1  md:justify-end">
                {/* only show this tabs when size is > md */}
                  <a
                    href="/home"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white"
                  >
                    About
                  </a>
                  <a
                    href="https://github.com/FrankLeeeee?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white "
                  >
                    Projects
                  </a>
                  <a
                    href="https://frankleeeee.medium.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white "
                  >
                    Blogs
                  </a>
                </div>
              <div className="flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://github.com/FrankLeeeee?tab=repositories"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://frankleeeee.medium.com/"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                Blogs
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
