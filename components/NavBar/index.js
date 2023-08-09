import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
                    src="/assets/logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-16 w-auto md:block"
                    src="/assets/logo.png"
                    alt="Your Company"
                  />
                </div>
              </div>
              <div className="hidden items-center md:ml-6 md:space-x-8 md:flex md:flex-1  md:justify-end">
                {/* only show this tabs when size is > md */}
                <Link
                  href="/"
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white"
                >
                  About
                </Link>
                <Link
                  href="https://github.com/FrankLeeeee?tab=repositories"
                  target="_blank"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white "
                >
                  Projects
                </Link>
                <Link
                  href="/publications "
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white "
                >
                  Publications
                </Link>
                <Link
                  href="/blogs"
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-white "
                >
                  Blogs
                </Link>
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
                as={Link}
                href="/"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/about"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="https://github.com/FrankLeeeee?tab=repositories"
                target="_blank"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="https://scholar.google.com.sg/citations?user=XuwmCz4AAAAJ&hl=en"
                target="_blank"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                Publications
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="https://frankleeeee.medium.com/"
                target="_blank"
                className="block border-l-4 border-b py-2 pl-3 pr-4 text-base font-medium text-white hover:bg-white hover:text-black"
              >
                Blogs
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
