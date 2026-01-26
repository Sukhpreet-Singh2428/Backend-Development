//! const express = require('express');
//! const app = express()

// //? routes create karna
// //? routes means : sheryians.com/profile
// //? domain wala part chodho, baki joh bhi rehta hai woh route kelhata hai i.e, /profile
// //? and for youtube.com, that is youtube.com/ too and '/' is route here
// //* app.get(route, requestHandler)  requestHandler is an middleware
// //* routes : 
// ! app.get('/', function(req, res){
// !     res.send('Hello world')
// ! })

// ! app.listen(3000)
//? agar hum res.send me kuch change karte hai or mean woh thoda sa hi change ho 
//? like res.send("Hello world") to res.send("Hello World") or res.send("luffy")
//? yeh change directly at the same time par server show nhi karega, we need to 
//? off the server and then start the server again in order to see the changes
//? toh hum yeh changes or small-small changes ka liye server baar baar On or Off, On or Off
//? toh nhi karenge toh iske liye hum npm package install karenge 
//? package : npm i nodemon -g  (-g is for global installation)
//* Ab hum apni app ko kabhi bhi chal sakte hai nodemon se 
//* -> nodemon script.js , and if error shown then use
//* -> npx nodemon script.js
//* and ab change directly server pe simultaneously show honge when we refresh the
//* localhost:3000 page
//* as now nodemon itself restarting the server due to changes made in script.js file 


//! Routing : 

// const express = require('express');
// const app = express();

// app.get("/", function(req, res){
//     res.send("Champion");
// });

// app.get("/profile", function(req, res){
//     res.send("Myself Sukhpreet Singh");
// });

// app.listen(3000);


//! Middleware : 

// const express = require('express');
// const app = express();

// app.use(function(req, res, next){
//     console.log('middleware chala');
//     next();
// });

// app.use(function(req, res, next){
//     console.log('middleware chala ek aur baar');
//     next();
// });

// app.get("/", function(req, res){
//     res.send("Champion");
// });

// app.get("/about", function(req, res){
//     res.send("about page hai ye");
// });

// app.listen(3000);


//! Error Handling : 

const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log('middleware chala');
    next();
});

app.use(function(req, res, next){
    console.log('middleware chala ek aur baar');
    next();
});

app.get("/", function(req, res){
    res.send("Champion");
});

app.get("/about", function(req, res){
    res.send("about page hai ye");
});

app.get("/profile", function(req, res, next){
    return next(new Error("something went wrong"));   //* hume /profile route par error dekhana hai 
});

app.use(function(err, req, res, next){    //* default error handling 
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);