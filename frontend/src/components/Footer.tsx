import React from 'react';
import footerImg from "../assets/footer-img.png";

const Footer = () => {
  return (
    <section className='bg-gray-900 text-gray-400 z-[-3]'>
      <div className='flex flex-col md:flex-row justify-around xl:justify-center items-center mx-auto lg:w-[80%] py-[1rem]'>
        <div className='xl:inline-block '>
          <img className='h-[8rem] md:h-[10rem] ' src={footerImg} alt="" />
        </div>
        <div className='xl:inline-block xl:px-[8rem]'  >
          <h1 className='text-[1.6rem] select-none mt-[1rem] text-gray-700'>Contact us</h1>
          <h1 className='text-[1.2rem] mt-[1rem]'><span className='text-gray-500'>Email:</span> dog.shelter@shelter.com</h1>
          <h1 className='text-[1.2rem]'><span className='text-gray-500'>Phone:</span> 0777 000 888</h1>
        </div>
        <div className='xl:inline-block'>
          <h1 className='text-[1.6rem] select-none mt-[1rem] text-gray-700'>Visit our friend's home </h1>
          <h1 className='text-[1.2rem] mt-[1rem]'>Bucharest, Sector 1</h1>
          <h1 className='text-[1.2rem] '> &nbsp;  </h1>
        </div>
      </div>
    </section>
  )
}

export default Footer
