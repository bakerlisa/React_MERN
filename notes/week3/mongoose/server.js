const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.cofig")

app.use(express.json(),express.urlencoded({extended:true}))

require("./server/routes/sundea.routes")(app);

app.listen(port,()=>console.log(`running on port ${port} Hell Yeah!`));
