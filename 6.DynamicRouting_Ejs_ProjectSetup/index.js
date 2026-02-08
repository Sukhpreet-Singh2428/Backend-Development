const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.render("index");
    // res.send("Chal raha hai");
});

app.get("/profile/:username", function(req, res){
    // res.send("chal raha hai");
    // res.send(req.params.username);
    res.send(`Welcome, ${req.params.username}`);
});

app.get("/author/:username/:age", function(req, res){
    res.send(`welcome, ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, function(){
    console.log("its running");
});