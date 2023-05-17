import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import paws from "../assets/paws.png";


const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
    const [currentMenu, setCurrentMenu] = useState<string>("");

    const handleClickNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <nav className="bg-gray-800 drop-shadow-2xl z-50">
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={handleClickNavbar}>
                            <span className="sr-only">Open main menu</span>
                            {/*menu closed.*/}
                            <svg className={`${!isNavbarOpen ? "flex" : "hidden"}  h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            {/* menu open*/}
                            <svg className={`${isNavbarOpen ? "flex" : "hidden"} h-6 w-6`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/">
                                <img className="block h-8 w-auto lg:hidden" src={paws} alt="paws" />
                            </Link>
                            <Link to="/">
                                <img className="hidden h-8 w-auto lg:block" src={paws} alt="paws" />
                            </Link>
                        </div>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-4">
                                <Link to="/" className={`${currentMenu === "/" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/")}>Home</Link>
                                <Link to="/about" className={`${currentMenu === "/aboutUs" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/aboutUs")}>About us</Link>
                                <Link to="/contact" className={`${currentMenu === "/contact" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/contact")}>Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:ml-6 md:block absolute inset-y-0 right-0  items-center pr-2 md:static md:inset-auto md:pr-0">
                        <button type="button" className="bg-orange-700 hover:bg-orange-600 py-1 px-3 rounded-full text-orange-100 transition duration-5000 ">
                            <span className="sr-only">View form</span>
                            <Link to="/surrender-dog" className="block rounded-md px-1 py-1 text-base font-medium" onClick={() => setCurrentMenu("/surrender-dog")}>Surrender Dog</Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isNavbarOpen ? "flex" : "hidden"} md:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link to="/" className={`${currentMenu === "/" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/")}>Home</Link>
                    <Link to="/about" className={`${currentMenu === "/aboutUs" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/aboutUs")}>About us</Link>
                    <Link to="/contact" className={`${currentMenu === "/contact" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/contact")}>Contact</Link>
                    <button type="button" className="bg-orange-600 hover:bg-orange-500 py-1 px-3 rounded-full text-orange-100 transition duration-5000">
                        <span className="sr-only">View form</span>
                        <Link to="/surrender-dog" className="block rounded-md px-1 py-1 text-base font-medium" onClick={() => setCurrentMenu("/surrender-dog")}>Surrender Dog</Link>
                    </button>
                </div>
            </div>
        </nav >


    );
};

export default Navbar;
