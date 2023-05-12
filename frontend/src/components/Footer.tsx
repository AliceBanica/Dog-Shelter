import React from 'react';
import footerImg from "../assets/footer-img.png";

const Footer = () => {
  return (
    <section className='bg-gray-900 text-gray-400 z-[-3]'>
      <div className='flex justify-around items-center mx-auto lg:w-[80%] py-[1rem]'>
        <img className='h-[14rem]' src={footerImg} alt="" />
        <div className='' >
          <h1 className='text-[1.6rem] select-none'>Contact us</h1>
          <h1 className='text-[1.2rem] mt-[1rem]'>Email: dog.shelter@gmail.com</h1>
          <h1 className='text-[1.2rem]'>Tel: 0777 845 889</h1>
        </div>
        <div>
          <h1 className='text-[1.6rem] select-none'>Visit our friend's home </h1>
          <h1 className='text-[1.2rem] mt-[1rem]'>Bucharest, Sector 1</h1>
          <h1 className='text-[1.2rem] '>Ploiesti, Sector 1</h1>
        </div>
      </div>
    </section>
  )
}

export default Footer
