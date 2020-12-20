import Link from "next/link";
import Logo from "../Logo";
import classNames from "classnames";
import { useState } from "react";

function MenuBar(props) {
  return (
    <nav className="main-nav sm:flex mt-12 sm:mt-0 flex-col sm:flex-row items-center relative flex-1 justify-end">
      <div className="flex flex-col sm:flex-row items-center relative flex-1 justify-end text-base uppercase font-bold">
        <Link href="/">
          <a className="py-2 sm-4 sm:py-2 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100 hover:text-primary">
            Home
          </a>
        </Link>
        <Link href="/#prize">
          <a className="py-2 sm-4 sm:py-2 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100 hover:text-primary">
            Prize
          </a>
        </Link>
        <Link href="/draw">
          <a className="py-2 sm-4 sm:py-2 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100 hover:text-primary">
            Draw
          </a>
        </Link>
      </div>
    </nav>
  );
}
function Drawer({ sidebarOpen, onClose }) {
  return (
    <div
      className={classNames({
        "transition duration-300 transform fixed right-0 top-0 h-screen bg-secondary z-50 pt-6 w-64 sm:hidden": true,
        "translate-x-0 ease-out": sidebarOpen,
        "translate-x-full ease-in": !sidebarOpen,
      })}
    >
      <button
        onClick={onClose}
        title="tailwindcss"
        className="nav-toggle absolute pin-0 right-0 pr-6 focus:outline-none"
      >
        <img
          alt="Brite Brother Luck Draw"
          src="https://tailwindcomponents.com/svg/close.svg"
          className="h-4"
        />
      </button>
      <MenuBar />
    </div>
  );
}
export default function NavBar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <header className="top-0 lef-0 w-full z-40 bg-white fixed border-b border-gray-200">
      <div className="container max-w-screen-xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="">
          <span className="sr-only">Brite Brothers</span>
          <Logo />
        </div>
        <Drawer sidebarOpen={sidebarOpen} onClose={handleDrawer} />
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            onClick={handleDrawer}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            {/* Heroicon name: menu */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden sm:block">
          <MenuBar />
        </div>
      </div>
    </header>
  );
}
