const express = require("express");
const app = express();
const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello Lisa" });
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port} Hell Yeah!`) );