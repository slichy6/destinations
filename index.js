
const db = require("./db");

//declare express server
const express = require("express");
//set express server
 const server = express();
//tell server to listen
server.listen(3000, () => {
    console.log("server is listening on 3000");
});
//get infornation
server.get("/", (req, res) =>{
    res.send(db);
});
