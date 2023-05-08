import { useEffect, useState } from "react";

function ServerFetch() {
    const backendUrl = new URL("http://localhost:3000");
    const [allDogs, setAllDogs] = useState([]);
    const [dogName, setDogName] = useState<string>("");
    const [dogRace, setDogRace] = useState<string>("");
    const [dogAge, setDogAge] = useState<number>(0);
    const [dogAdopted, setDogAdopted] = useState<boolean>(false);

    async function getAllDogsFetch() {
        const response = await fetch(backendUrl + "allDogs");
        const jsonData = await response.json();
        setAllDogs(jsonData);
    }

    async function addDogFetch(data:any) {
        const response = await fetch(backendUrl + "addDog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    async function deleteDogFetch(data:any) {
        const response = await fetch(backendUrl + "deleteDog", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    async function updateDogFetch(data:any) {
        const response = await fetch(backendUrl + "updateDog", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }

    function addDog(e:any) {
        e.preventDefault();
        addDogFetch({
            name: dogName,
            race: dogRace,
            age: dogAge,
            adopted: false,
        });
    }

    function updateDog(id:any){
        updateDogFetch({adopted: true})  
    }

    function deleteDog(dogName:string) {
        deleteDogFetch({ name: dogName });
    }
}

export default ServerFetch;
