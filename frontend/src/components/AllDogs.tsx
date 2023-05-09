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


  return (
    <>
      <section className='bg-bg-s2-img h-screen w-full bg-no-repeat bg-cover  z-[10] pb-[4rem] '>
        <div className=' mx-auto w-[80%] '>
          <div className='relative flex justify-center text-[#FBD8B0] font-outline-2 pt-[10rem] pl-[40rem]'>
            <h1 className='text-[4rem]' id="dogs-title">Our Friends</h1>
          </div>
        </div>
      </section>

      <section className='bg-bg-s1-img h-screen w-full bg-no-repeat bg-cover  z-[10] pb-[4rem] '>
        <div className=' mx-auto w-[80%] '>
          <div className='pt-[10rem] show-left'>
            <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Chiuaua</h1>
            <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg'>
              {allDogs.map((dog: any, index) => {
                if (dog.race === "Chiuaua") {
                  return <div className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
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
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-s3-img h-screen w-full bg-no-repeat bg-cover  z-[10] pb-[4rem] '>
        <div className=' mx-auto w-[80%] '>
          <div className='pt-[10rem] show-right'>
            <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Golden Retriever</h1>
            <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg  '>
              {allDogs.map((dog: any, index) => {
                if (dog.race === "Golden Retriever") {
                  return <div className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
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

      <section className='bg-bg-s4-img h-screen w-full bg-no-repeat bg-cover  z-[10] pb-[4rem] '>
        <div className=' mx-auto w-[80%] '>
          <div className='pt-[10rem] show-left'>
            <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Pitbull</h1>
            <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg '>
              {allDogs.map((dog: any, index) => {
                if (dog.race === "Pitbull") {
                  return <div className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
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


      <section className='bg-bg-s5-img h-screen w-full bg-no-repeat bg-cover  z-[10] pb-[4rem] '>
        <div className=' mx-auto w-[80%] '>
          <div className='pt-[10rem] show-right'>
            <h1 className='text-[2rem] border-b-[0.2rem] border-gray-500 mb-[4rem]'>Others</h1>
            <div className='flex flex-wrap w-[100%] mx-auto justify-around rounded-lg'>
              {allDogs.map((dog: any, index) => {
                if (dog.race !== "Chiuaua" && dog.race !== "Pitbull" && dog.race !== "Golden Retriever") {
                  return <div className='relative flex mt-[3rem] shadow-[10px_25px_20px_-5px_rgba(0,0,0,0.3)]'>
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
      </section>



      <section className='bg-[#F0D8B8]'>
        <div className=' mx-auto w-[80%]'>
          <div className='pt-[3rem] mx-auto lg:w-[80%] pb-[13%] show-bottom'>
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
                <button className='bg-orange-800 py-[0.4rem] w-[40%] mx-auto rounded-lg mt-[2rem] text-white' type="submit">Add dog</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AllDogs