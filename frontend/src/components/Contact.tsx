import React from 'react';
import emailImg from "../assets/email.png";
import phoneImg from "../assets/phone.png";
import addressImg from "../assets/address.png"

const Contact = () => {
  return (
    <section className='absolute top-0 h-screen w-full bg-contact-img bg-no-repeat bg-cover overflow-hidden z-[-1]'>
      <div className='relative flex flex-col items-center top-[35%] -right-[25%]' id="contact">
        <div>
          <h1 className='text-[4rem] mb-[1.5rem]'>Contact Info</h1>
          <div className='flex items-center mb-[1.5rem]'>
            <img className='h-[2.8rem]' src={emailImg} alt="" />
            <h1 className='text-[2rem] ml-[1rem]'>dog.shelter@gmail.com</h1>
          </div>
          <div className='flex items-center mb-[1.5rem]'>
            <img className='h-[2.8rem]' src={phoneImg} alt="" />
            <h1 className='text-[2rem] ml-[1rem]'>0777 845 889</h1>
          </div>
          <div className='flex items-center mb-[1.5rem]'>
            <img className='h-[2.8rem]' src={addressImg} alt="" />
            <h1 className='text-[2rem] ml-[1rem]'>Bucharest, Sector 1</h1>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Contact
