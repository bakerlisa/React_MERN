const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const IceCream = require("./companies");
    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port} Hell Yeah!`) );