const { randomUUID } = require("crypto");
const { url } = require("inspector");
const fs = require("fs");
class DogRepository {
    dogArr = [
        {
            id: 1,
            name: "Blue",
            race: "Chiuaua",
            age: "3",
            sex: "Male",
            trained: "Yes",
            vaccinated: "Yes",
            adopted: true,
            img: new URL(
                "https://images.unsplash.com/photo-1558349359-c00462b97aee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            ),
        },
        {
            id: 2,
            name: "Archie",
            race: "Pitbull",
            age: "4",
            sex: "Female",
            trained: "No",
            vaccinated: "Yes",
            adopted: false,
            img: new URL(
                "https://nationaltoday.com/wp-content/uploads/2022/07/14-Pitbull-Awareness-Month-1200x834.jpg"
            ),
        },
        {
            id: 3,
            name: "Bowie",
            race: "Chiuaua",
            age: "7",
            sex: "Male",
            trained: "No",
            vaccinated: "Yes",
            adopted: false,
            img: new URL(
                "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1kGOfGtsRB3ErRPkTXIuq2Fbt-4ZgjwHWdsABcP2oJbZVemNI0pZjtzMv_Ng2RBZZxvmYfPCmUbrYPKM"
            ),
        },
        {
            id: 4,
            name: "Eli",
            race: "Golden Retriever",
            age: "9",
            sex: "Female",
            trained: "No",
            vaccinated: "No",
            adopted: true,
            img: new URL(
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSwKaXWLlVAaqLNdbOEH1Eljf3Hw6ziuBqKma_qG0YbAqK4lRdv6G-XoJe6PoSkMaP99rNzIk-Fdyn1UtA"
            ),
        },
        {
            id: 5,
            name: "Harley",
            race: "Bichon",
            age: "10",
            sex: "Male",
            trained: "Yes",
            vaccinated: "Yes",
            adopted: false,
            img: new URL(
                "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQQFpWF4zN2V5f8XKGKyEtxJ3VuKFNtrNrtQOSPN6tDrX-PobKIPS-hXT-AqWgm41toRvB6zsZ_NDHc6jY"
            ),
        },
        {
            id: 6,
            name: "Max",
            race: "Golden Retriever",
            age: "6",
            sex: "Male",
            trained: "No",
            vaccinated: "Yes",
            adopted: false,
            img: new URL(
                "https://images.unsplash.com/photo-1602241628512-459cdd3234fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            ),
        },
        {
            id: 7,
            name: "Jax",
            race: "Golden Retriever",
            age: "7",
            sex: "Male",
            trained: "Yes",
            vaccinated: "No",
            adopted: false,
            img: new URL(
                "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            ),
        },
        {
            id: 8,
            name: "Sky",
            race: "Golden Retriever",
            age: "1",
            sex: "Female",
            trained: "Yes",
            vaccinated: "Yes",
            adopted: false,
            img: new URL(
                "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            ),
        },

        {
            id: 9,
            name: "Bull",
            race: "Pitbull",
            age: "2",
            sex: "Male",
            trained: "No",
            vaccinated: "No",
            adopted: false,
            img: new URL(
                "https://images.unsplash.com/photo-1600369671738-fa3a43efeced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            ),
        },
        {
            id: 10,
            name: "Bella",
            race: "German Shepherd",
            age: "2",
            sex: "Female",
            trained: "No",
            vaccinated: "Yes",
            adopted: false,
            img: new URL(
                "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8R2VybWFuJTIwU2hlcGhlcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            ),
        },
        {
            id: 11,
            name: "Yala",
            race: "Husky",
            age: "2",
            sex: "Female",
            trained: "Yes",
            vaccinated: "No",
            adopted: false,
            img: new URL(
                "https://images.unsplash.com/photo-1617895153857-82fe79adfcd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SHVza3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            ),
        },
    ];

    addDog = (dog) => {
        dog.id = randomUUID();
        this.dogArr.push(dog);
    };

    getAllDogs = () => {
        return this.dogArr;
    };

    getDogById = (id) => {
        for (let i = 0; i < this.dogArr.length; i++) {
            if (this.dogArr[i].id == id) {
                return this.dogArr[i];
            }
        }
    };

    getDogByName = (dogName) => {
        let arr = [];
        for (let i = 0; i < this.dogArr.length; i++) {
            if (this.dogArr[i].name == dogName) {
                arr.push(this.dogArr[i]);
            }
        }
        return arr;
    };

    getDogByRace = (race) => {
        let arr = [];
        for (let i = 0; i < this.dogArr.length; i++) {
            if (this.dogArr[i].race == race) {
                arr.push(this.dogArr[i]);
            }
        }
        return arr;
    };

    getDogByAge = (age) => {
        let arr = [];
        for (let i = 0; i < this.dogArr.length; i++) {
            if (this.dogArr[i].age == age) {
                arr.push(this.dogArr[i]);
            }
        }
        return arr;
    };

    getDogByAdoption = (adopted) => {
        let arr = [];
        for (let i = 0; i < this.dogArr.length; i++) {
            if (this.dogArr[i].adopted == adopted) {
                arr.push(this.dogArr[i]);
            }
        }
        return arr;
    };

    getDogByQueryParams = (name, age, race, sex, adopted) => {
        let arr = [];
        for (let i = 0; i < this.dogArr.length; i++) {
            if (
                this.dogArr[i].name === name ||
                this.dogArr[i].age == age ||
                this.dogArr[i].race === race ||
                this.dogArr[i].sex === sex ||
                this.dogArr[i].adopted == adopted
            ) {
                arr.push(this.dogArr[i]);
            }
        }
        return arr;
    };

    updateDog = (dog) => {
        for (let i = 0; i < this.dogArr.length; i++) {
            if (
                this.dogArr[i].id === dog.id &&
                this.dogArr[i].adopted === false
            ) {
                this.dogArr[i] = {
                    id: dog.id,
                    name: dog.name,
                    race: dog.race,
                    age: dog.age,
                    sex: dog.sex,
                    img: dog.img,
                    adopted: true,
                };
            }
        }
    };

    deleteDog = (id) => {
        for (let i = 0; i < this.dogArr.length; i++) {
            if (this.dogArr[i].id === id) {
                this.dogArr.splice(i, 1);
            }
        }
    };
}

module.exports = DogRepository;
