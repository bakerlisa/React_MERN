const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
const Order = require("./orders");
    

app.get("/api", (req, res) => {
    console.log("we're trying to connect to the database")
    res.json({ message: "Hello World" });
});


app.get("/api/order",(req,res) => {
    res.json(new Order())
})


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port} hell yeah!`) );
