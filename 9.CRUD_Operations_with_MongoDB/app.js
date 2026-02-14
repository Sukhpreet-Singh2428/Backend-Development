const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("hey");
});

//? create
app.get('/create', async (req, res) => {
    let createdUser =  await userModel.create({
        name: "Sukhpreet",
        email: "sukhpreetsingh3910a@gmail.com",
        username: "Sukhpreet"
    });
    
    res.send(createdUser);
});

//? update
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username: "Sukhpreet"}, {name: "Sukhpreet Singh"}, {new: true});    //? userModel.findOneUpdate(findOne, update, {new: true})

    res.send(updatedUser);
});

//? read
app.get('/read', async (req, res) => {
    let users = await userModel.find();  //? read all
    // let users = await userModel.find({username: "Sukhpreet"});  //? read one
    // let users = await userModel.findOne({username: "Sukhpreet"});  //? read one
    res.send(users);

    //* find -> read one -> In array -> if no user exists gives empty array
    //* findOne -> read one -> In object -> if no user exists gives blanck screen in that particular route
})

//? delete
app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({username: "harsh"});
    res.send(users);
})

app.listen(3000);