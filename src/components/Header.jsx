import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="header">
        <header className="w-full h-full flex flex-row items-start justify-evenly py-4 max-w-full">
          <div className="flex gap-x-5">
            <img
              className="w-[100px] relative object-contain shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/group-1@2x.png"
            />
            <img
              className="w-[200px] relative max-h-full object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/text-logo-2-1@2x.png"
            />
          </div>
          <nav className="flex items-center justify-center">
            <nav className="flex justify-start mt-8 gap-x-4 max-w-full text-left text-xl font-text-body-2">
              <a href="/#home" className="nav-link text-white no-underline">
                Home
              </a>
              <a href="/#About" className="nav-link text-white no-underline">
                About
              </a>
              <a href="/#why-us" className="nav-link text-white no-underline">
                Why Us
              </a>
              <a
                href="/#Tokenomics"
                className="nav-link text-white no-underline"
              >
                Tokenomics
              </a>
              <a href="/#Roadmap" className="nav-link text-white no-underline">
                Roadmap
              </a>
            </nav>
          </nav>

          <div className="flex flex-col items-start justify-start pt-[19px] box-border shrink-0">
            <button className="cursor-pointer py-3.5 px-[47px] bg-[transparent] rounded-xl flex flex-row z-[2] border-[1px] border-solid border-color-primary-color-2 hover:bg-deepskyblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-deepskyblue-100">
              <div className="relative text-xl leading-[150%] font-medium font-text-body-2 text-color-primary-color-2 text-center inline-block min-w-[119px] mq450:text-base mq450:leading-[24px]">
                Whitepaper
              </div>
            </button>
          </div>
        </header>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-mobile">
      <header className=" flex flex-row items-center justify-between  p-2 ">
        <div className="flex items-center">
          <img
            className="lg:w-[100px] w-[60px] mr-3 object-contain"
            loading="lazy"
            alt=""
            src="/group-1@2x.png"
          />
          <img
            className="w-[200px] object-contain"
            loading="lazy"
            alt=""
            src="/text-logo-2-1@2x.png"
          />
        </div>
        <div className="lg:hidden">
          {/* Conditionally render close icon when menu is open */}
          <button
            onClick={toggleMenu}
            className="bg-mediumvioletred-200 rounded-full p-2"
          >
            {isMenuOpen ? (
              <MdClose className="text-white w-6 h-6" />
            ) : (
              <FiMenu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Close menu when background is clicked
      >
        <div className="h-screen flex justify-center items-center">
          <ul className="text-center list-none">
            <li>
              <a
                href="/"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300 no-underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/#About"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300 no-underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300 no-underline"
              >
                Why Us
              </a>
            </li>
            <li>
              <a
                href="/#Tokenomics"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300 no-underline"
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="/#Roadmap"
                className="text-white font-text-body-2 text-lg block py-4 hover:text-gray-400 transition duration-300 no-underline"
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
