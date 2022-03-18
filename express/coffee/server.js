const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
    

// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


app.get("/api/order",(req,res) => {
    res.json(new Order())
})


// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port} hell yeah!`) );
