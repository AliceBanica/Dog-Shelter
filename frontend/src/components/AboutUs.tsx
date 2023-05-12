import React from 'react';
import { Link } from "react-router-dom";
import dogImg from "../assets/dog10.jpg"
import dogImg2 from "../assets/bg-4.jpg";
import dogImg3 from "../assets/dog11.jpg"
import Footer from './Footer';
import { useEffect, useState } from "react";
const AboutUs = () => {

    const backendUrl = new URL("http://localhost:3000");
    const [allDogs, setAllDogs] = useState([]);
    const [dogName, setDogName] = useState<string>("");
    const [dogRace, setDogRace] = useState<string>("");
    const [dogAge, setDogAge] = useState<string>("");
    const [dogAdopted, setDogAdopted] = useState<boolean>(false);
    let selectBreed = document.getElementById("selected-race");


    async function getAllDogsFetch() {
        const response = await fetch(backendUrl + "allDogs");
        const jsonData = await response.json();
        setAllDogs(jsonData);
    }

    async function addDogFetch(data: any) {
        const response = await fetch(backendUrl + "addDog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
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

    function addDog(e: any) {
        e.preventDefault();
        addDogFetch({
            name: dogName,
            race: dogRace,
            age: dogAge,
            adopted: false,
            img: "No img"
        });
        alert("Another friend joined us today!")
    }

    function updateDog(id: any, name: string, race: string, age: number, img: any) {
        const prevName = name;
        const prevRace = race;
        const prevAge = age;
        const prevImg = img;
        updateDogFetch({
            id: id,
            name: prevName,
            race: prevRace,
            age: prevAge,
            img: prevImg,
            adopted: true
        });
        alert(`Hey! ${prevName} has been adopted. Yaayy!!`)
    }

    function deleteDog(dogID: string) {
        deleteDogFetch({ id: dogID });
        alert("Dog adopted")
    }

    function dogNameHandleChange(e: any) {
        setDogName(e.target.value)
    }
    function dogRaceHandleChange(selectedBreed: any) {
        setDogRace(selectBreed.value);
    }

    function dogAgeHandleChange(e: any) {
        setDogAge(e.target.value)
    }
    function dogAdoptedHandleChange(e: any) {
        setDogAdopted(e.target.value)
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
                    <h1 className='text-[4rem]'>Adopt, don't shop.</h1>
                    <p className='text-[1.5rem]'>If you are searching for a friend which has unlimited love to offer, you are in the right place!</p>
                </div>
                <div className=' flex w-[70%] pt-[5rem] mx-auto '>
                    <div className='flex justify-evenly w-full text-[1rem]'>
                        <div className='flex flex-col '>
                            <span className='text-[3rem] '>10+ </span>
                            <span>Dogs</span>
                        </div>
                        <div className='flex flex-col '>
                            <span className='text-[3rem] '>80+ </span>
                            <span>Adoptions</span>
                        </div>
                        <div className='flex flex-col '>
                            <span className='text-[3rem] '>5+ </span>
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
                    {/* <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Chiuaua</h1> */}
                    <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg'>
                        {allDogs.map((dog: any, index) => {
                            return <div key={index} className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
                                <div className='flex-[1.7]'>
                                    <img className='rounded-l-lg w-[25rem] h-[16rem]' src={dog.img} alt="" />
                                </div>
                                <div className='flex flex-col flex-[1] px-[2rem] justify-center bg-[#fbd8b099] rounded-r-lg '>
                                    <div className='flex items-center'>
                                        <span className='text-[1rem]'>Name: &nbsp;  </span>
                                        <span className='text-[1.2rem] font-bold'>{dog.name}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-[1rem]'>Breed: &nbsp;  </span>
                                        <span className='text-[1.2rem] font-bold'>{dog.race}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-[1rem]'>Age: &nbsp;  </span>
                                        <span className='text-[1.2rem] font-bold'>{dog.age} years</span>
                                    </div>
                                    <div className='flex justify-center mt-[2.5rem]'>
                                        {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg text-[#232425] text-[1.2rem]'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem] scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age, dog.img)} >Adopt me</button>}
                                    </div>
                                </div>
                            </div>
                        }
                        )}

                    </div>
                </div>
            </div>
        </section>

        {/* <section className='bg-color-section-odd n w-full  z-[10] pb-[4rem] '>
            <div className=' mx-auto w-[70%] '>
                <div className='pt-[10rem] show-right'>
                    <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Golden Retriever</h1>
                    <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg  '>
                        {allDogs.map((dog: any, index) => {
                            if (dog.race === "Golden Retriever") {
                                return <div key={index} className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
                                    <div className='flex-[1.5]'>
                                        <img className='rounded-l-lg w-[22rem] h-[16rem]' src={dog.img} alt="" />
                                    </div>
                                    <div className='flex flex-col flex-[1] px-[2rem] justify-center bg-[#fbd8b099] rounded-r-lg'>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Name: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.name}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Breed: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.race}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Age: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.age} years</span>
                                        </div>
                                        <div className='flex  justify-center mt-[2.5rem]'>
                                            {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg text-[#232425] text-[1.2rem]'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem] scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age, dog.img)} >Adopt me</button>}
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>

        <section className='bg-color-section-even n w-full  z-[10] pb-[4rem] '>
            <div className=' mx-auto w-[70%] '>
                <div className='pt-[10rem] show-left'>
                    <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Pitbull</h1>
                    <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg '>
                        {allDogs.map((dog: any, index) => {
                            if (dog.race === "Pitbull") {
                                return <div key={index} className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
                                    <div className='flex-[1.7]'>
                                        <img className='rounded-l-lg w-[25rem] h-[16rem]' src={dog.img} alt="" />
                                    </div>
                                    <div className='flex flex-col flex-[1] px-[2rem] justify-center bg-[#fbd8b099] rounded-r-lg'>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Name: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.name}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Breed: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.race}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Age: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.age} years</span>
                                        </div>
                                        <div className='flex  justify-center mt-[2.5rem]'>
                                            {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg text-[#232425] text-[1.2rem]'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem] scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age, dog.img)} >Adopt me</button>}
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </section>


        <section className='bg-color-section-odd n w-full  z-[10] pb-[4rem] '>
            <div className=' mx-auto w-[70%] '>
                <div className='pt-[10rem] show-right'>
                    <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Others</h1>
                    <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg'>
                        {allDogs.map((dog: any, index) => {
                            if (dog.race !== "Chiuaua" && dog.race !== "Pitbull" && dog.race !== "Golden Retriever") {
                                return <div key={index} className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
                                    <div className='flex-[1.7]'>
                                        <img className='rounded-l-lg w-[25rem] h-[16rem]' src={dog.img} alt="" />
                                    </div>
                                    <div className='flex flex-col flex-[1] px-[2rem] justify-center bg-[#fbd8b099] rounded-r-lg '>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Name: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.name}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Breed: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.race}</span>
                                        </div>
                                        <div className='flex items-center'>
                                            <span className='text-[1rem]'>Age: &nbsp;  </span>
                                            <span className='text-[1.2rem] font-bold'>{dog.age} years</span>
                                        </div>
                                        <div className='flex  justify-center mt-[2.5rem]'>
                                            {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg text-[#232425] text-[1.2rem]'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem] scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age, dog.img)} >Adopt me</button>}
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                </div>
            </div>
        </section> */}


        <Footer />
    </>
        // <section className=' w-full bg-color-about z-[-1]'>
        //     <div className='relative flex flex-col mx-auto items-center  lg:w-[60%]  text-gray-300 pt-[5rem]' id="about" >
        //         <div className='flex justify-center items-center text-gray-300'>
        //             <div className=' flex  bg-gray-300 w-[1.5rem] h-[0.05rem]'></div>
        //             <span className='text-[1.5rem]'>&nbsp;&nbsp; WHO WE ARE&nbsp;&nbsp;  </span>
        //             <div className=' flex bg-gray-300 w-[1.5rem] h-[0.05rem]'></div>
        //         </div>
        //         <div className='relative flex justify-around items-center mt-[2rem] mb-[1rem] w-[90%] pt-[3rem] pb-[5rem]'>
        //             <div className='flex-1 flex-wrap'>
        //                 <p className='text-[2rem] '>LUCKY PAWS</p>
        //                 <p className='text-justify text-[1rem] text-gray-500 mt-[1rem]'>A place where all four-legged friends can call home.</p>
        //                 <p className='text-justify text-[1rem] text-gray-500 mb-[2rem]'>Created to bring joy to the World. </p>
        //                 <Link to="/allDogs" className='bg-indigo-800 text-gray-300 hover:bg-indigo-900 hover:text-gray-300 text-[1.2rem]  py-[0.4rem] px-[1rem] rounded-lg  '>See our friends
        //                 </Link>
        //             </div>
        //             <div className='flex flex- h-[20rem] '>
        //                 <div className='flex-1'>
        //                     <img className='rounded-lg  shadow-md shadow-gray-500 h-[100%] ' src={dogImg} alt="" />
        //                 </div>
        //                 <div className='flex flex-1 flex-col h-[100%] ml-[1rem] justify-between'>
        //                     <img className='h-[48%] rounded-lg shadow-md shadow-gray-500' src={dogImg2} alt="" />
        //                     <img className='h-[48%] mt-[] rounded-lg shadow-md shadow-gray-500' src={dogImg3} alt="" />
        //                 </div>
        //             </div>

        //             {/* <div className='flex-[1.3] about-grid-imgs items-center'>
        //                 <img className='h-[80%] about-img1-grid rounded-lg  shadow-md shadow-gray-500  ' src={dogImg} alt="" />
        //                 <img className='h-[80%] about-img2-grid rounded-lg ' src={dogImg2} alt="" />
        //                 <img className='h-[80%] about-img3-grid rounded-lg ' src={dogImg3} alt="" />
        //             </div> */}
        //         </div>

        //         <div className='flex flex-col justify-center items-center'>
        //             <p className=''>“Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day. ” </p>
        //             <p className=''>– John Grogan (Author, Marley & Me)</p>
        //         </div>
        //         {/* <div className='relative flex justify-around items-center mt-[2rem] mb-[1rem]'>
        //             <p className='w-[45%] text-[1.5rem] text-[#e8e8e8] text-justify '>"Lucky Paws" it is not just a shelter. It is a place where all four-legged friends can call home. T</p>
        //             <img className='w-[45%] h-[17rem] rounded-lg ' src={dogImg} alt="" />
        //         </div>
        //         <div className='relative flex justify-around items-center mt-[2rem] mb-[1rem] '>
        //             <img className='w-[45%] h-[17rem] rounded-lg ' src={dogImg2} alt="" />
        //             <p className='w-[45%] text-[1.5rem] text-[#e8e8e8] text-justify '>Dogs recieve a lot of love and affection from visitors, volunteers and employees. If you need a friend which has unlimited love to offer, you are in the right place!</p>
        //         </div> */}
        //         {/* <div className='flex-1'>
        //             <Link to="/allDogs" className='bg-purple-950 text-white hover:bg-purple-800 hover:text-white mt-[4rem] text-[1.3rem]  py-[0.4rem] px-[1rem] rounded-lg '>See our friends
        //             </Link>
        //         </div> */}
        //     </div >
        //     <Footer />
        // </section >
    )
}

export default AboutUs
