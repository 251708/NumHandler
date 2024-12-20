import { Transition } from "@headlessui/react";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
    
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const closeDropdown = () => {
      setIsDropdownOpen(false);
    };
  
    const handleDropdownClick = () => {
      setIsDropdownOpen((prevState) => !prevState);
    };
  
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          isDropdownOpen &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          closeDropdown();
        }
      };
  
      if (isDropdownOpen) {
        document.addEventListener("click", handleOutsideClick);
      } else {
        document.removeEventListener("click", handleOutsideClick);
      }
  
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [isDropdownOpen]);
  
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef();
    return (
        <div className="fixed-top">
          <nav className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex flex-row">
                    <a
                      href="/"
                    >
                   NumberHandler
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a
                        href="/"
                        className="hover:bg-black text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Home
                      </a>
                      </div>
                      </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={divRef} className="px-2 pt-2 pb-1 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-blue-900 dark:hover:bg-fuchsia-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
              </div>
            
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;