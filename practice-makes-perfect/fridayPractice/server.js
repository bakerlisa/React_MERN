const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const IceCream = require("./iceCream");
    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/orders", (req,res) => {
    res.json(new IceCream());
})

app.listen( port, () => console.log(`Listening on port: ${port} Hell Yeah!`) );