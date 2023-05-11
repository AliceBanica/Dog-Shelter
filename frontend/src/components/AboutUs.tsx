import React from 'react';
import { Link } from "react-router-dom";
import dogImg from "../assets/bg-2.jpg"
import dogImg2 from "../assets/bg-4.jpg"
import Footer from './Footer';
const AboutUs = () => {
    return (
        <section className='h-[50rem] w-full bg-color-about z-[-1]'>
            <div className='relative flex  flex-col mx-auto items-center  lg:w-[60%]  ' id="about" >
                <div className='relative flex justify-around items-center mt-[2rem] mb-[1rem]'>
                    <p className='w-[45%] text-[1.5rem] text-[#e8e8e8] text-justify '>"Lucky Paws" it is not just a shelter. It is a place where all four-legged friends can call home. T</p>
                    <img className='w-[45%] h-[17rem] rounded-lg ' src={dogImg} alt="" />
                </div>
                <div className='relative flex justify-around items-center mb-[2rem] '>
                    <img className='absolute left-[7rem] w-[45%] h-[17rem] rounded-lg ' src={dogImg2} alt="" />
                    <p className='w-[45%] text-[1.5rem] ml-[34rem] text-[#e8e8e8]  text-justify '>Dogs recieve a lot of love and affection from visitors, volunteers and employees. If you need a friend which has unlimited love to offer, you are in the right place!</p>
                </div>
                {/* <div className='flex-1'>
                    <Link to="/allDogs" className='bg-purple-950 text-white hover:bg-purple-800 hover:text-white mt-[4rem] text-[1.3rem]  py-[0.4rem] px-[1rem] rounded-lg '>See our friends
                    </Link>
                </div> */}
            </div>
            <Footer />
        </section >
    )
}

export default AboutUs
