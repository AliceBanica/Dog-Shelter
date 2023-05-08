import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className='absolute top-0 h-screen w-full bg-home-img bg-no-repeat bg-cover overflow-hidden z-[-1]'>
            <div className='relative flex flex-col items-center top-[22%]' id="home">
                <h1 className='text-[4rem]'>Everyone needs a Home.</h1>
                <p className='text-[1.5rem]'>We will help you to find a four-legged friend for life.</p>

                <Link to="/allDogs" className='mt-[4rem] text-[1.7rem] text-white bg-orange-800 py-[0.4rem] px-[1rem] rounded-lg'>Make a friend!
                </Link>
            </div>
        </section>
    )
}

export default Home
