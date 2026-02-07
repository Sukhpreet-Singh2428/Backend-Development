const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("Heyy, Champion");
});

app.get("/about", function(req, res){
    res.send("This is an about page");
});

app.listen(3000);