const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/march_2022_sundeas", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("Hey Dude you're connected to the freakin' database!"))
    .catch(err=> console.log("beep beep beep db connection was a flop",err))