require("dotenv").config();
const express=require("express");
const cors = require("cors");
const db = require("./db");
const getUnsplashPhoto = require("./utils");

const PORT = process.env.PORT || 3000;
const server = express();

server.listen(PORT, () =>{
    console.log(`Server listening on port: ${PORT}`);
});
server.use(cors());

server.get("/destinations", (req,res) =>{
    res.send(db);
});


server.post("/destinations", async (req, res) =>{
    const userInput = req.body;

    if(userInput.destination === undefined || userInput.location === undefined){
        res.status(400).send({error: "destination and location are required"});
    }
    const newDest = {
        destination : userInput.destination,
        location: userInput.location,
        photo: await getUnsplashPhoto(`${userInput.destination} ${userInput.location}`),
    }

    if(userInput.description !== undefined){
        newDest.description = userInput.description
    }

    //console.log("test");
    db.destinations.push(newDest);

    res.status(200).send({msg: "success"})
});