import React from 'react';
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <section className='absolute top-0 h-screen w-full bg-about-img bg-no-repeat bg-cover overflow-hidden z-[-1]'>
            <div className='relative mx-auto lg:w-[80%] top-[28%] ' id="about">
                <h1 className='text-orange-800 font-bold text-[2.5rem] mb-[2rem]'>Lucky Paws</h1>
                <p className='text-[1.8rem] mb-[3rem] text-justify w-[30rem]'>"Lucky Paws" it is not just a shelter. It is a place where all four-legged friends can call home. They recieve a lot of love and affection from visitors, volunteers and employees. If you need a friend which has unlimited love to offer, you are in the right place!</p>
                <Link to="/allDogs" className='text-[1.7rem] text-white bg-orange-800 py-[0.4rem] px-[0.8rem] rounded-lg'>See our friends
                </Link>
            </div>
        </section>
    )
}

export default AboutUs
