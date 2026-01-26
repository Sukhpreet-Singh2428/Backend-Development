# **Express.js Framework :**

# **Introduction to Express.js**

- [ ] express js ek npm package hai
- [ ] framework → flow of doing work
- [ ] manages **everything from receiving the request and giving the response**
- [ ] **Express.js simplifies server creation, routing, middleware and error handling compared to using Node HTTP module directly.**

> → **Relation between http module and Express.js**

> Express.js is built on top of Node.js’s http module.

> The http module provides low-level functionalities like:

> * Creating servers
> * Handling requests and responses manually

> Express.js wraps the http module and simplifies:

> * Server creation
> * Routing
> * Middleware handling
> * Error handling

> So, Express.js does not replace http internally, but provides a higher-level and easier interface for building backend applications.

# **Setting up a basic Express application**

* installing the express package :   `npm i express`
* express.js Setup

  `const express = require('express'); `

  `const app = express();  `

  `app.get(‘/’, function(req, res){     `

  `       res.send('Hello world’);`

  `});  `

  `app.listen(3000);`

# **Routing**

`const express = require('express'); `

`const app = express();  `

* routes create karna
* routes means : sheryians.com/profile
* domain wala part chodho, baki joh bhi rehta hai woh route kelhata hai and here i.e, `/profile` and for youtube.com that is youtube.com/ and `/`  is route here
* app.get(route, requestHandler)   requestionHandler is an middleware
* routes :
  * `app.get(‘/’, function(req, res){     `

    `       res.send('Hello world’);`

    `});  `
* `app.listen(3000)`    is the server which send response to 3000 port

- [ ] agar hum res.send me kuch change karte hai or means woh thoda sa hi change ho like res.send(“Hello world”) to res.send(“Hello World”) or res.send(“luffy”) yeh change directly at the same time par server show nhi karega, we need to off the server and then start the server again in order to see the changes toh hum yeh changes or small-small changes ka liye server baar baar On or Off toh nhi kareneg toh iske liye hum npm package install karenge
- [ ] package : `npm i nodemon -g`  (-g is for global installation, which is required for operating system to understand the `nodemon script.js` command)
- [ ] Ab hum apni app ko kabhi bhi chal sakte hai nodemon se
- [ ] `nodemon script.js`  , if error shows with command (which is shown for some systems) then use
- [ ] `npx nodemon script.js`
- [ ] and ab changes directly server pe simultaneously show honge when we refresh the `localhost:3000`  page
- [ ] As now nodemon itself restarting the server due to changes made in `script.js` file

`const express = require('express'); `

`const app = express(); `

`app.get("/", function(req, res){     `

`res.send("Champion");`

`});  `

`app.get("/profile", function(req, res){ `

`res.send("Myself Sukhpreet Singh"); `

`});`

`app.listen(3000);`

- [ ] Now here above, two routes are created : `“/”`  and `“/profile”`
- [ ] and server is started with `nodemon script.js`  and if there is any changes in res.send then just save the file nodemon automatically restarting the server: due to changes made in script.js and that changes are shown in localhost:3000 with just refresh the page, not need of manually On and Off the server again and again

# **Middleware**

jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuchh perform karte ho, to ye element middleware kehlaata hai

`const express = require('express'); `

`const app = express(); `

`app.use(function(req, res, next){     `

`console.log('middleware chala');`

`   next();`

`}); `

`app.use(function(req, res, next){     `

`console.log('middleware chala ek aur baar'); `

`   next();`

`});  `

`app.get("/", function(req, res){     `

`    res.send("Champion");`

`});  `

`app.get("/about", function(req, res){     `

`    res.send("about page hai ye");`

`});  `

`app.listen(3000);`

# **Request and Response Handling**

first we go on browser, we first search the url like `localhost:3000/profile`  and if this route is not exist or coded the browser gives `cannot GET /profile`  then we come back the coded the `/profile` route and send msg `res.send(“This is the Profiile page”)` and now if we go and check `localhost:3000/profile` so now we can see the server response `“This is the Profile page”` so all this **frontend (typed url, request) → backend (code route) → frontend (server response)** is called **request and response handling**

* Request from browser
* Route matching
* Response from server

# **Error handling**

* **Error-handling middleware is a special type of middleware**
* It is usually placed **at the END of all routes and middlewares**
* `// Normal middleware `

  `app.use(...);`

  `// Routes `

  `app.get(...);`

  `// Error handling middleware (always at end) `

  `app.use((err, req, res, next) => { `

  `   res.status(500).send("Error occurred");`

  `});`

  \

```javascript
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
```

so above is the code snippet for error handling

- [ ] so we when to give error for `“/profile”` route so we write :

  `app.get("/profile", function(req, res, next){     `

  `    return next(new Error("something went wrong"));`

  `});`
- [ ] the default error handling :

  `app.use(function(err, req, res, next){  `

  `   console.error(err.stack);`

  `   res.status(500).send('Something broke!');`

  `});`
- [ ] so `console.error(err.stack)` print the error msg in the console/terminal that is pass in `new Error(“something went wrong”)`
- [ ] `res.status(500).send(“Something broke!”) gives` the error msg in the frontend when user try to reach in `/profile` route


