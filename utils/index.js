
const fetch= require("node-fetch");

async function getUnsplashPhoto(keyword){
    const url = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}&query=${keyword}`;
    
    //go get data from the url
    const res = await fetch (url)
    const data = await res.json()

    return data.urls.small;

}


module.exports = getUnsplashPhoto;

// const {destinations} = require("./db");

// //declare express server
// const express = require("express");
// const PORT = process.env.PORT || 3000;

// //set express server
// const server = express();
// //tell server to listen
// server.listen(PORT, () => {
//     console.log(`server is listening on PORT: ${PORT}`);
// });
// //get infornation
// server.get("/", (req, res) =>{
//     res.send(destinations);
// });
