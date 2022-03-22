const express = require('express');
const cors = require('cors') // This is new

const port = 8000;

const app = express();
app.use(cors()) // This is new

require('./server/routes/person.route')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port} Hell yeah!`) );