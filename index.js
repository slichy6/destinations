const fetch = require("node-fetch");

function getUnsplashPhoto(keyword){
    const url = `https://api.unsplash.com/photos/random?client_id=FqWd5kvLZXWvCnbPv0qEva4QssxcCGC94rL-f8FYxYQ&query=${keyword}`

    fetch (url).then((res) => res.json())
    .then((data) => console.log(data.urls.small));

}

getUnsplashPhoto("Paris");

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
