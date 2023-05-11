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
        <nav className="bg-gray-800 drop-shadow-2xl">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/">
                                <img className="block h-8 w-auto lg:hidden" src={paws} alt="paws" />
                            </Link>
                            <Link to="/">
                                <img className="hidden h-8 w-auto lg:block" src={paws} alt="paws" />
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className={`${currentMenu === "/" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/")}>Home</Link>
                                <Link to="/aboutUs" className={`${currentMenu === "/aboutUs" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/aboutUs")}>About us</Link>
                                <Link to="/allDogs" className={`${currentMenu === "/allDogs" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/allDogs")}>Our Dogs</Link>
                                <Link to="/contact" className={`${currentMenu === "/contact" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/contact")}>Contact</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`${isNavbarOpen ? "flex" : "hidden"} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <Link to="/" className={`${currentMenu === "/" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/")}>Home</Link>
                    <Link to="/aboutUs" className={`${currentMenu === "/aboutUs" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/aboutUs")}>About us</Link>
                    <Link to="/allDogs" className={`${currentMenu === "/allDogs" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/allDogs")}>Our Dogs</Link>
                    <Link to="/contact" className={`${currentMenu === "/contact" ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}  block rounded-md px-3 py-2 text-base font-medium`} onClick={() => setCurrentMenu("/contact")}>Contact</Link>
                </div>
            </div>
        </nav >

        // <nav className="w-full sticky top-0 z-30 bg-[#FBD8B0] shadow">
        //     <div className="relative container mx-auto pt-2 pb-2 lg:w-[80%]">
        //         <div className="flex items-center justify-start">
        //             <div className="hidden md:flex flex-[1.5] justify-start space-x-10">
        //                 <Link to="/" className=' text-xl text-black select-none group transition duration-300'>Home
        //                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
        //                 </Link>
        //                 <Link to="/aboutUs" className=' text-xl text-black select-none group transition duration-300'>About us
        //                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
        //                 </Link>
        //                 <Link to="/allDogs" className=' text-xl text-black select-none group transition duration-300'>Our Dogs
        //                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
        //                 </Link>

        //             </div>
        //             <div className="flex justify-center flex-1">
        //                 <Link to="/" className='text-xl text-orange-800 font-bold text-[2.5rem] italic select-none group transition duration-300 pointer'>
        //                     <img className="h-[4rem]" src={logo} alt="logo" />
        //                 </Link>
        //             </div>
        //             <div className="flex justify-end flex-[1.5]">
        //                 <Link to="/contact" className=' text-xl text-black select-none group transition duration-300'>Contact
        //                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
        //                 </Link>
        //             </div>

        //             {/* Hamburger Icon */}
        //             <button
        //                 className={`${isNavbarOpen && "open"} block hamburger md:hidden focus:outline-none`} onClick={handleClickNavbar}
        //             >
        //                 <span className="hamburger-top"></span>
        //                 <span className="hamburger-middle"></span>
        //                 <span className="hamburger-bottom"></span>
        //             </button>
        //         </div>

        //         {/* Mobile Menu */}
        //         <div className="md:hidden">
        //             <div className={`${isNavbarOpen ? "flex" : "hidden"} absolute flex-col items-center self-end py-8 mt-0 space-y-6 font-bold text-sm bg-white rounded sm:w-auto sm:self-center left-[12rem] right-1 drop-shadow-md z-10`}>
        //                 <Link to="/" className=' text-xl text-black select-none group transition duration-300'>About us
        //                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span>
        //                 </Link>
        //                 <Link to="/allDogs" className=' text-xl text-black select-none group transition duration-300'>Our Dogs
        //                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span>
        //                 </Link>
        //                 <Link to="/contact" className=' text-xl text-black select-none group transition duration-300'>Contact
        //                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;
