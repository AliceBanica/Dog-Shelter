import React from 'react';
import Footer from './Footer';
import { useEffect, useState } from "react";
import defaultImg from "../assets/dogDefault.png";
import paw from "../assets/paw.png"
const AboutUs = () => {

    const backendUrl = new URL("http://localhost:3000");
    const [allDogs, setAllDogs] = useState([]);

    async function getAllDogsFetch() {
        const response = await fetch(backendUrl + "allDogs");
        const jsonData = await response.json();
        setAllDogs(jsonData);
    }

    async function deleteDogFetch(data: any) {
        const response = await fetch(backendUrl + "deleteDog", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    async function updateDogFetch(data: any) {
        const response = await fetch(backendUrl + "updateDog", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }



    function updateDog(id: any, name: string, race: string, age: number, sex: string, img: any, trained: string, vaccinated: string) {
        const prevName = name;
        const prevRace = race;
        const prevAge = age;
        const prevSex = sex
        const prevImg = defaultImg;
        const prevTrained = trained;
        const prevVaccinated = vaccinated;
        console.log(prevImg)
        updateDogFetch({
            id: id,
            name: prevName,
            race: prevRace,
            age: prevAge,
            sex: prevSex,
            img: prevImg,
            trained: prevTrained,
            vaccinated: prevVaccinated,
            adopted: true
        });
        alert(`Hey! ${prevName} has been adopted. Yaayy!!`)
    }


    useEffect(() => {
        getAllDogsFetch();
    }, []);

    useEffect(() => {
        getAllDogsFetch();
    }, [allDogs]);



    const callbackLeft = function (entries: any) {
        entries.forEach((entry: any) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn-left");
            } else {
                entry.target.classList.remove("animate-fadeIn-left");
            }
        });
    };
    const callbackRight = function (entries: any) {
        entries.forEach((entry: any) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn-right");
            } else {
                entry.target.classList.remove("animate-fadeIn-right");
            }
        });
    };

    const callbackBottom = function (entries: any) {
        entries.forEach((entry: any) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn-bottom");
            } else {
                entry.target.classList.remove("animate-fadeIn-bottom");
            }
        });
    };

    const observer = new IntersectionObserver(callbackLeft);
    const observerRight = new IntersectionObserver(callbackRight);
    const observerBottom = new IntersectionObserver(callbackBottom);

    const targets = document.querySelectorAll(".show-left");
    targets.forEach(function (target) {
        target.classList.add("opacity-0");
        observer.observe(target);
    });

    const targetsRight = document.querySelectorAll(".show-right");
    targetsRight.forEach(function (targetsRight) {
        targetsRight.classList.add("opacity-0");
        observerRight.observe(targetsRight);
    });

    const targetsBottom = document.querySelectorAll(".show-bottom");
    targetsBottom.forEach(function (targetsBottom) {
        targetsBottom.classList.add("opacity-0");
        observerBottom.observe(targetsBottom);
    });
    return (<>
        <section className='w-full bg-color z-[-1] text-gray-300 drop-shadow-2xl'>
            <div className='relative  w-[70%] mx-auto pt-[12rem] pb-[8rem]' id="home">
                <div className='flex flex-col z-[2]'>
                    <h1 className='text-[3.5rem] md:text-[4rem]'>Adopt, don't shop.</h1>
                    <p className='text-[1.5rem]'>If you are searching for a friend which has unlimited love to offer, you are in the right place!</p>
                </div>
                <div className=' flex w-[100%] md:w-[70%] pt-[5rem] mx-auto '>
                    <div className='flex justify-evenly w-full text-[1rem]'>
                        <div className='flex flex-col '>
                            <span className='text-[2rem]  md:text-[3rem] '>10+ </span>
                            <span>Dogs</span>
                        </div>
                        <div className='flex flex-col '>
                            <span className='text-[2rem] md:text-[3rem]'>80+ </span>
                            <span>Adoptions</span>
                        </div>
                        <div className='flex flex-col '>
                            <span className='text-[2rem] md:text-[3rem]'>5+ </span>
                            <span>Breeds</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-color-section-even n w-full  z-[10] pb-[4rem] '>
            <div className='mx-auto w-[70%] pt-[8rem]'>
                <h1 className='flex justify-center items-center text-gray-300 text-[3rem]'>Our dogs</h1>
            </div>
            <div className=' mx-auto w-[70%] '>
                <div className='pt-[5rem] show-left'>
                    <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg'>
                        {allDogs.map((dog: any, index) => {
                            return <div key={index} className='grid grid-cols-[1fr] w-[20rem] md:w-[30rem] lg:w-[22rem] xl:w-[30rem] md:grid-cols-[1fr_1fr] py-[2rem] md:py-[2.5rem] product mx-[1rem] '>

                                <div className="w-full">
                                    <div className="product__photo">
                                        <div className="flex w-[96%] mx-auto md:absolute md:w-full photo-container lg:left-[2rem] xl:-left-[0.5rem] lg:w-[94%]">
                                            <div className="photo-main">
                                                <img className='flex md:absolute w-[90%] mx-auto ' src={dog.img} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="product__info w-[80%] mx-auto md:w-full">
                                    <div className="title">
                                        <h1>{dog.name}</h1>
                                        <span>{dog.race}</span>
                                    </div>
                                    <div className="description my-[1rem] md:my-[2rem] ">
                                        <h3 className='mb-[0.5rem] md:mb-[1rem] text-[1.1rem] text-gray-700'>About:</h3>
                                        <ul>
                                            <li className='flex items-center'><img className='mr-[0.5rem] w-[1.1rem] h-[1.1rem]' src={paw} alt="" /> Age: {dog.age} years</li>
                                            <li className='flex items-center'><img className='mr-[0.5rem] w-[1.1rem] h-[1.1rem]' src={paw} alt="" />Sex: {dog.sex}</li>
                                            <li className='flex items-center'><img className='mr-[0.5rem] w-[1.1rem] h-[1.1rem]' src={paw} alt="" />House Trained: {dog.trained}</li>
                                            <li className='flex items-center'><img className='mr-[0.5rem] w-[1.1rem] h-[1.1rem]' src={paw} alt="" />Vaccinated: {dog.vaccinated}</li>
                                        </ul>
                                    </div>
                                    {dog.adopted ? <button className="adopt--btn-disabled flex justify-center  w-[90%] mx-auto md:mx-0 md:w-[70%]">Adopted</button> : <button className='adopt--btn flex justify-center w-[90%] mx-auto md:mx-0 md:w-[70%]' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age, dog.sex, dog.vaccinated, dog.trained, dog.img)} >Adopt me</button>}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section >
        <Footer />
    </>
    )
}

export default AboutUs
