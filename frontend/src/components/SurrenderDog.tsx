import React from 'react'
import { useEffect, useState } from "react";
import defaultImg from "../assets/dogDefault.png";

const SurrenderDog = () => {
    const backendUrl = new URL("http://localhost:3000");
    const [allDogs, setAllDogs] = useState([]);
    const [dogName, setDogName] = useState<string>("");
    const [dogRace, setDogRace] = useState<string>("");
    const [dogAge, setDogAge] = useState<string>("");
    const [dogSex, setDogSex] = useState<string>("");
    const [dogAdopted, setDogAdopted] = useState<boolean>(false);
    const [dogTrained, setDogTrained] = useState<string>("");
    const [dogImage, setDogImage] = useState<any>("");
    const [dogVaccinated, setDogVaccinated] = useState<string>("");
    let selectBreed = document.getElementById("selected-race");
    let selectTrained = document.getElementById("selected-trained");
    let selectVaccinated = document.getElementById("selected-vaccinated");


    // async function getAllDogsFetch() {
    //     const response = await fetch(backendUrl + "allDogs");
    //     const jsonData = await response.json();
    //     setAllDogs(jsonData);
    // }

    async function addDogFetch(data: any) {
        const response = await fetch(backendUrl + "addDog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    // async function deleteDogFetch(data: any) {
    //     const response = await fetch(backendUrl + "deleteDog", {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });
    // }

    // async function updateDogFetch(data: any) {
    //     const response = await fetch(backendUrl + "updateDog", {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });
    // }

    function addDog(e: any) {
        e.preventDefault();
        addDogFetch({
            name: dogName,
            race: dogRace,
            age: dogAge,
            sex: dogSex,
            trained: dogTrained,
            vaccinated: dogVaccinated,
            img: defaultImg,
            adopted: false
        });
        alert(`${dogName} joined us. Our squad is bigger now! You can see it in "About us" menu.`)
    }


    function dogNameHandleChange(e: any) {
        setDogName(e.target.value)
    }
    function dogRaceHandleChange(selectedBreed: any) {
        setDogRace(selectBreed.value);
    }

    function dogAgeHandleChange(e: any) {
        if (e.target.value < 0) {
            setDogAge(0);
        } else setDogAge(e.target.value)
    }

    function dogSexHandleChange(e: any) {
        setDogSex(e.target.value)
    }

    function dogTrainedHandleChange(selectedTrained: any) {
        setDogTrained(selectTrained.value)
    }

    function dogVaccinatedHandleChange(selectedVaccinated: any) {
        setDogVaccinated(selectVaccinated.value)
    }

    function dogAdoptedHandleChange(e: any) {
        setDogAdopted(e.target.value)
    }





    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center  md:mx-0 md:my-0 bg-color ">

            <div className="md:w-1/3 max-w-sm relative">

                <div className='absolute h-[5rem] w-[7rem] message -right-[8rem] -top-[3rem] md:-right-[2rem] lg:right-0 lg:-top-[2rem] rounded-full z-[2]'><span className='flex justify-center items-center h-full text-[1.5rem] text-[rgb(47,16,80)] font-bold  italic'>Hello!</span></div>
                <div className='absolute h-[3rem] w-[2.1rem] message -right-[4rem] -top-[0.6rem] md:right-[2rem] md:-top-[0.8rem] lg:right-[3.8rem] lg:top-[0.5rem] -rotate-[25deg] z-[1]'></div>

                <div className="dog block -translate-x-2/4 -translate-y-2/4 md:-translate-x-2/4 md:translate-y-[15%]  md:mb-[30%]">
                    <div className="ears" />
                    <div className="body">
                        <div className="eyes" />
                        <div className="beard">
                            <div className="mouth">
                                <div className="tongue" />
                            </div>
                        </div>
                        <div className="belt">
                            <div className="locket" />
                            <div className="dot dot1" />
                            <div className="dot dot2" />
                            <div className="dot dot3" />
                            <div className="dot dot4" />
                        </div>
                        <div className="stomach">
                        </div>
                        <div className="legs">
                            <div className="left" />
                            <div className="right" />
                        </div>
                    </div>
                    <div className="tail">
                    </div>
                </div>
            </div>

            <div className="md:w-1/3 max-w-sm">
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold text-slate-500">You can bring us a friend...</p>
                </div>
                <form onSubmit={addDog} id="form" className='flex flex-col text-[1.5rem] md:mb-[30%]'>
                    <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" onChange={dogNameHandleChange} value={dogName} placeholder="Dog Name" />

                    <div className='flex'>
                        <div className="text-sm w-[49%]  pt-2 rounded relative">
                            <select className="block appearance-none w-full border border-solid border-gray-300 rounded px-4 py-2 focus:outline-none focus:shadow-outline  cursor-pointer" onChange={dogTrainedHandleChange} id="selected-trained">
                                <option value="">Is it trained?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-[20%]">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>

                        <div className="text-sm w-[49%]  ml-[2%] pt-2 rounded relative">
                            <select className="block appearance-none w-full border border-solid border-gray-300 rounded px-4 py-2 focus:outline-none focus:shadow-outline  cursor-pointer" onChange={dogVaccinatedHandleChange} id="selected-vaccinated">
                                <option value="" >Is it vaccinated?</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-[20%]">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm w-full pt-2 rounded relative">
                        <select className="block appearance-none w-full border border-solid border-gray-300 rounded px-4 py-2 focus:outline-none focus:shadow-outline  cursor-pointer" onChange={dogRaceHandleChange} id="selected-race">
                            <option value="" >Select breed</option>
                            <option value="Chiuaua">Chiuaua</option>
                            <option value="Golden Retriever">Golden Retriever </option>
                            <option value="Pitbull">Pitbull</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 top-[20%] flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div className='flex'>
                        <input className="text-sm w-[49%] px-4 py-2 my-2 border border-solid border-gray-300 rounded" type="number" onChange={dogAgeHandleChange} value={dogAge} placeholder="Dog Age" />

                        <div className="text-sm w-[49%]  ml-[2%] pt-2 rounded relative">
                            <select className="block appearance-none w-full border border-solid border-gray-300 rounded px-4 py-2 focus:outline-none focus:shadow-outline  cursor-pointer" onChange={dogSexHandleChange} id="selected-sex">
                                <option value="" >Select dog sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female </option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 ">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>



                    <div className="text-center md:text-left">
                        <button className="mt-4 bg-color-btn text-gray-900 font-bold bg-color-btn-hover hover:text-gray-300 px-4 py-2  uppercase rounded text-[1.1rem] w-full tracking-wider duration-700" type="submit">Enroll Dog</button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default SurrenderDog
