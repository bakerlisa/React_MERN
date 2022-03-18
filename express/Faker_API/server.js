const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const User = require("./users");
const Company = require("./companies");


app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req,res) => {
    res.json(new User());
});

app.get("/api/users/company", (req,res) => {
    res.json(new Company());
})

app.listen( port, () => console.log(`Listening on port: ${port} Hell Yeah!`) );