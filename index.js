const db = require("./db");

//declare express server
const express = require("express");
const PORT = process.env.PORT || 3000;

//set express server
 const server = express();
//tell server to listen
server.listen(PORT, () => {
    console.log(`server is listening on PORT: ${PORT}`);
});
//get infornation
server.get("/", (req, res) =>{
    res.send(db);
});
