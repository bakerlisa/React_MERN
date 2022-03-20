const express = require("express");
const app = express();
const port = 8000;
const Order = require("./order");

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/order", (req,res) => {
    res.json(new Order())
})

app.listen( port, () => console.log(`Listening on port: ${port} Hell Yeah!`) );