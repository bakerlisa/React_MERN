const express = require('express');
const cors = require('cors') // This is new
const app = express();
app.use(cors()) // This is new

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

require('./server/routes/cat.route')(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000 Hell Yeah"));
