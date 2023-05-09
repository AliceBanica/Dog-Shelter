import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png"

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    const handleClickNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <nav className="w-full sticky top-0 z-30 bg-[#FBD8B0] shadow">
            <div className="relative container mx-auto pt-2 pb-2 lg:w-[80%]">
                <div className="flex items-center justify-start">
                    <div className="hidden md:flex flex-[1.5] justify-start space-x-10">
                        <Link to="/" className=' text-xl text-black select-none group transition duration-300'>Home
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </Link>
                        <Link to="/aboutUs" className=' text-xl text-black select-none group transition duration-300'>About us
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </Link>
                        <Link to="/allDogs" className=' text-xl text-black select-none group transition duration-300'>Our Dogs
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </Link>

                    </div>
                    <div className="flex justify-center flex-1">
                        <Link to="/" className='text-xl text-orange-800 font-bold text-[2.5rem] italic select-none group transition duration-300 pointer'>
                            <img className="h-[4rem]" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="flex justify-end flex-[1.5]">
                        <Link to="/contact" className=' text-xl text-black select-none group transition duration-300'>Contact
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <button
                        className={`${isNavbarOpen && "open"} block hamburger md:hidden focus:outline-none`} onClick={handleClickNavbar}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div className={`${isNavbarOpen ? "flex" : "hidden"} absolute flex-col items-center self-end py-8 mt-0 space-y-6 font-bold text-sm bg-white rounded sm:w-auto sm:self-center left-[12rem] right-1 drop-shadow-md z-10`}>
                        <Link to="/" className=' text-xl text-black select-none group transition duration-300'>About us
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span>
                        </Link>
                        <Link to="/allDogs" className=' text-xl text-black select-none group transition duration-300'>Our Dogs
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span>
                        </Link>
                        <Link to="/contact" className=' text-xl text-black select-none group transition duration-300'>Contact
                            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-600"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
