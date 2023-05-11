import React from 'react'
import { Link } from "react-router-dom";
import dogImg from "../assets/dog5.1.png"
import AboutUs from './AboutUs';

const Home = () => {
    return (<>
        <section className='h-screen w-full bg-color z-[-1] text-gray-300 drop-shadow-2xl'>
            <div className='relative'>
                <img className='absolute top-0 w-[70%] left-1/2 transform -translate-x-1/2  h-screen z-[0] ' src={dogImg} alt="" />

            </div>
            <div className='relative h-[50%]' id="home">
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col  items-center z-[2]'>
                    <h1 className='text-[4rem]'>Everyone needs a Home.</h1>
                    <p className='text-[1.5rem]'>We will help you to find a four-legged friend for life.</p>

                    <Link to="/allDogs" className='bg-indigo-800 text-white hover:bg-indigo-900 hover:text-gray-300 mt-[4rem] text-[1.7rem]  py-[0.4rem] px-[1rem] rounded-lg '>Make a friend
                    </Link>
                </div>
            </div>
        </section>
        <AboutUs />
    </>
    )
}

export default Home
