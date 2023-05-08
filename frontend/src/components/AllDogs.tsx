import React from 'react';
import { useEffect, useState } from "react";
import Footer from './Footer';

const AllDogs = () => {
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

  function updateDog(id: any, name: string, race: string, age: number) {
    const prevName = name;
    const prevRace = race;
    const prevAge = age;
    updateDogFetch({
      id: id,
      name: prevName,
      race: prevRace,
      age: prevAge,
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

  const targets = document.querySelectorAll(".ts-show-on-scroll");

  const callback = function (entries: any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("motion-safe:animate-fadeIn");
      } else {
        entry.target.classList.remove("motion-safe:animate-fadeIn");
      }
    });
  };

  const observer = new IntersectionObserver(callback);

  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });


  return (
    <>
      <section className='bg-[#F0F0F0] z-[10] pb-[4rem] '>
        <div className='mx-auto lg:w-[80%] '>
          <h1 className='flex justify-center pt-[7%] pb-[6%] text-[4rem] w-full' id="dogs-title">Our dogs</h1>
          <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Chiuaua</h1>
          <div className='flex flex-wrap w-[100%] mx-auto justify-center ts-show-on-scroll'>
            {allDogs.map((dog: any, index) => {
              if (dog.race === "Chiuaua") {
                return <div key={index} className=' w-[25%] mx-[2rem] mb-[5rem] bg-[#C1C2D0] py-[1.5rem] rounded-md shadow-xl '>
                  <img className='border-2 border-red-500 w-[70%] h-[15rem] mx-auto mb-[2rem]' src={dog.img} alt="" />
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Name: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.name}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Breed: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.race}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Age: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.age} years</span>
                  </div>
                  <div className='flex justify-center mt-[1.5rem]'>
                    {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg  text-[1.2rem]'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem] scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age)} >Adopt me</button>}
                  </div>
                </div>
              }
            })}
          </div>

          <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Golden Retriever</h1>
          <div className='flex flex-wrap w-[100%] mx-auto justify-center ts-show-on-scroll'>
            {allDogs.map((dog: any, index) => {
              if (dog.race === "Golden Retriever") {
                return <div key={index} className=' w-[25%] mx-[2rem] mb-[5rem] bg-[#C1C2D0] py-[1.5rem] rounded-md shadow-xl '>
                  <img className='border-2 border-red-500 w-[70%] h-[15rem] mx-auto mb-[2rem]' src={dog.img} alt="" />
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Name: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.name}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Breed: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.race}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Age: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.age} years</span>
                  </div>
                  <div className='flex justify-center mt-[1.5rem]'>
                    {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem]'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg  text-[1.2rem] scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age)} >Adopt me</button>}
                  </div>
                </div>
              }
            })}
          </div>

          <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Pitbull</h1>
          <div className='flex flex-wrap w-[100%] mx-auto justify-center ts-show-on-scroll'>
            {allDogs.map((dog: any, index) => {
              if (dog.race === "Pitbull") {
                return <div key={index} className=' w-[25%] mx-[2rem] mb-[5rem] bg-[#C1C2D0] py-[1.5rem] rounded-md shadow-xl '>
                  <img className='border-2 border-red-500 w-[70%] h-[15rem] mx-auto mb-[2rem]' src={dog.img} alt="" />
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Name: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.name}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Breed: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.race}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Age: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.age} years</span>
                  </div>
                  <div className='flex justify-center mt-[1.5rem]'>
                    {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem]'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem] scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age)} >Adopt me</button>}
                  </div>
                </div>
              }
            })}
          </div>

          <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem] '>Other</h1>
          <div className='flex flex-wrap w-[100%] mx-auto justify-center ts-show-on-scroll'>
            {allDogs.map((dog: any, index) => {
              if (dog.race !== "Chiuaua" && dog.race !== "Pitbull" && dog.race !== "Golden Retriever") {
                return <div key={index} className=' w-[25%] mx-[2rem] mb-[5rem] bg-[#C1C2D0] py-[1.5rem] rounded-md shadow-xl '>
                  <img className='border-2 border-red-500 w-[70%] h-[15rem] mx-auto mb-[2rem]' src={dog.img} alt="" />
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Name: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.name}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Breed: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.race}</span>
                  </div>
                  <div className='flex justify-center items-center'>
                    <span className='text-[1.2rem]'>Age: &nbsp;  </span>
                    <span className='text-[1.5rem] font-bold'>{dog.age} years</span>
                  </div>
                  <div className='flex justify-center mt-[1.5rem]'>
                    {dog.adopted ? <p className='bg-[#F6F4DE] py-[0.4rem] px-[0.8rem] rounded-lg'>Adopted</p> : <button className='bg-orange-800 text-white py-[0.4rem] px-[0.8rem] rounded-lg text-[1.2rem]  scale-100 hover:scale-105 ease-in duration-200' onClick={() => updateDog(dog.id, dog.name, dog.race, dog.age)} >Adopt me</button>}
                  </div>
                </div>
              }
            })}
          </div>



        </div>
      </section >
      <section className='bg-[#F0D8B8] z-[8]'>
        <div className='pt-[3rem] mx-auto lg:w-[80%] pb-[13%] ts-show-on-scroll'>
          <h1 className='flex justify-center pt-[10%] pb-[8%] text-[4rem] w-full '>You can bring us a friend...</h1>
          <div className='flex flex-col justify-center w-[45%] mx-auto pb-[4rem] pt-[3rem]  rounded-lg bg-[#C1C2D0]  shadow-2xl '>
            <h2 className='flex text-[2rem] justify-center mb-[3rem]'>Dog info:  </h2>
            <form onSubmit={addDog} id="form" className='flex flex-col text-[1.5rem] '>
              <div className='flex flex-row mb-[0.8rem]'>
                <div className='w-1/3 text-end'>
                  <label className='' htmlFor="userName">Dog name: &nbsp;</label>
                </div>
                <div className='w-1/3'>
                  <input className='rounded-md border border-gray-400 hover:border-gray-500 w-[15rem]' type="text" id="userName" onChange={dogNameHandleChange} value={dogName} />
                </div>
              </div>


              <div className='flex mb-[0.8rem]'>
                <div className='w-1/3 text-end'>
                  <label htmlFor="race">Race: &nbsp;</label>
                </div>

                <div className="inline-block relative w-[15rem]">
                  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1  rounded-md  leading-tight focus:outline-none focus:shadow-outline text-[1.5rem] cursor-pointer" onChange={dogRaceHandleChange} id="selected-race">
                    <option value="Chiuaua">Chiuaua</option>
                    <option value="Golden Retriever">Golden Retriever </option>
                    <option value="Pitbull">Pitbull</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div className='flex flex-row mb-[0.8rem]'>
                <div className='w-1/3 text-end'>
                  <label htmlFor="userName">Age:&nbsp; </label>
                </div>
                <div className='w-1/3'>
                  <input className='rounded-md border border-gray-400 hover:border-gray-500 w-[15rem]' type="text" id="userName" onChange={dogAgeHandleChange} value={dogAge} />
                </div>
              </div>
              <button className='bg-orange-800 py-[0.4rem] w-[40%] mx-auto rounded-lg mt-[2rem]' type="submit">Add dog</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AllDogs
