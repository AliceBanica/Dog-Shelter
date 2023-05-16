import React from 'react';
import emailImg from "../assets/email.png";
import phoneImg from "../assets/phone.png";
import addressImg from "../assets/address.png"

const Contact = () => {
  return (
    <section className='absolute top-0 h-screen w-full bg-color overflow-hidden z-[-1]'>
      <div className='flex justify-center items-center w-[70%] mx-auto h-full '>
        <div className='flex w-full  bg-color-contact rounded-md'>
          <div className='flex flex-col flex-1  py-[2rem] px-[2rem] '>
            <h1 className='text-[1.7rem] tracking-wide text-zinc-400'>Where to find us: </h1>
            <h1 className='text-[0.7rem] mt-[1rem] text-gray-400 font-bold'>CONTACT DETAILS</h1>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest mt-[0.7rem]'>PHONE:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>0777 000 888</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>EMAIL:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>dog.shelter@shelter.com</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>ADDRESS:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>Bucharest, Sector 1</h1>
            </div>

            <h1 className='text-[0.7rem] mt-[2rem] text-gray-400 font-bold'>SHELTER HOURS</h1>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest mt-[0.7rem]'>MONDAY:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>Closed</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>TUESDAY:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>8:00am - 5:00pm</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>WEDNESDAY:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>8:00am - 5:00pm</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>THURSDAY:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>8:00am - 5:00pm</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>FRIDAY:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>8:00am - 5:00pm</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>SATURDAY:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>8:00am - 5:00pm</h1>
            </div>
            <div className='flex items-end'>
              <h1 className='text-[0.8rem] font-bold text-neutral-500 tracking-widest'>SUNDAY:&nbsp; &nbsp; </h1>
              <h1 className='text-[1rem] text-neutral-400'>8:00am - 5:00pm</h1>
            </div>
          </div>

          <div className='flex-[1.4]   '>
            <iframe className='h-full w-full py-[2rem] px-[2rem] ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91082.50463212615!2d26.047177350000002!3d44.48794005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b203b98b88e25f%3A0x2ea696fcfcb19014!2sSector%201%2C%20Bucharest!5e0!3m2!1sen!2sro!4v1684248726865!5m2!1sen!2sro" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        </div>
      </div>
      {/* <div className='relative flex flex-col items-center top-[35%] -right-[25%]' id="contact">
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
      </div> */}
    </section >
  )
}

export default Contact
