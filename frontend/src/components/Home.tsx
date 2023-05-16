import React from 'react'
import { Link } from "react-router-dom";
import dogImg from "../assets/dog5.1.png"
import AboutUs from './AboutUs';
import Footer from './Footer';

import dogImg4 from "../assets/dog10.jpg"
import dogImg2 from "../assets/bg-4.jpg";
import dogImg3 from "../assets/bg-3.jpg"

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

                    <Link to="/allDogs" className='bg-indigo-800 text-gray-300 hover:bg-indigo-900 hover:text-gray-300 mt-[4rem] text-[1.7rem]  py-[0.4rem] px-[1rem] rounded-lg '>Make a friend
                    </Link>
                </div>
            </div>
        </section>
        <section className='w-full bg-color-about z-[-1]'>
            <div className='relative flex flex-col mx-auto items-center  lg:w-[70%]   text-gray-300 pt-[5rem]' id="about" >
                <div className='relative flex-col justify-center items-center xl:justify-center  md:flex md:flex-row md:justify-around md:items-center mt-[2rem] mb-[1rem] w-[90%]  pb-[5rem]'>
                    <div className=' flex justify-center flex-col w-[70%] mx-auto xl:w-[30%] xl:mx-auto flex-wrap lg:mr-[1.5rem] xl:mr-[1rem] xl:ml-0 xl:w-fit'>
                        <p className='text-[2rem] '>LUCKY PAWS</p>
                        <p className='text-justify text-[1rem] text-gray-500 mt-[1rem]'>A place where all four-legged friends can call home.</p>
                        <p className='text-justify text-[1rem] text-gray-500 mb-[2rem]'>Created to bring joy to the World. </p>
                        <Link to="/allDogs" className='w-fit  bg-indigo-800 text-gray-300 hover:bg-indigo-900 hover:text-gray-300 text-[1.2rem]  py-[0.4rem] px-[1rem] rounded-lg '>See our friends
                        </Link>
                    </div>
                    <div className='flex justify-center  xl:w-[40%] h-[20rem] mt-[3rem] md:0'>
                        <div className='md:flex-1 xl:flex xl:justify-end'>
                            <img className='rounded-lg  shadow-md shadow-gray-500 h-[100%] xl:mr-0' src={dogImg4} alt="" />
                        </div>
                        <div className='flex md:flex-1 flex-col h-[100%] ml-[1rem] justify-between'>
                            <img className='h-[48%] xl:w-[80%] rounded-lg shadow-md shadow-gray-500' src={dogImg2} alt="" />
                            <img className='h-[48%] xl:w-[80%] mt-[] rounded-lg shadow-md shadow-gray-500' src={dogImg3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
        <section className='w-full bg-color-quote z-[-1]'>
            <div className='relative flex flex-col mx-auto items-center  lg:w-[60%]  text-gray-300 pt-[5rem]' id="about" >
                <div className='flex flex-col justify-center items-center mt-[3rem] mb-[5rem]'>
                    <p className='text-[1.5rem] flex justify-center items-center w-[70%] mx-auto text-center'>“Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day. ” </p>
                    <p className='flex justify-end w-[70%] text-[1rem] mt-[1rem] text-gray-400'>– John Grogan (Author, Marley & Me)</p>
                </div>
            </div>
        </section>
        <Footer />
    </>
    )
}

export default Home
