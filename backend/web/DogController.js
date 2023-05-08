const DogRepository = require("../repository/DogRepository.js");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dogRepo = new DogRepository();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("dog app HIIIIIIIIII");
});

app.get("/allDogs", (req, res) => {
    res.send(dogRepo.getAllDogs());
});

app.get("/allDogs/:uuid", (req, res) => {
    res.send(dogRepo.getDogById(req.params.uuid));
});

app.get("/dogs", (req, res) => {
    res.send(
        dogRepo.getDogByQueryParams(
            req.query.name,
            req.query.age,
            req.query.race,
            req.query.adopted
        )
    );
});

app.post("/addDog", (req, res) => {
    dogRepo.addDog(req.body);
    res.send("Dog added!");
});

app.put("/updateDog", (req, res) => {
    dogRepo.updateDog(req.body);
    res.send("Dog updated!");
});

app.delete("/deleteDog", (req, res) => {
    dogRepo.deleteDog(req.body.id);
    res.send("Dog deleted!");
});

app.delete("/allDogs/deleteDog/:uuid", (req, res) => {
    dogRepo.deleteDog(req.params.uuid);
    res.send("Dog deleteddd!");
});

module.exports = app;
