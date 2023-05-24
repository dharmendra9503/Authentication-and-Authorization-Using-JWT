const mongoose = require("mongoose");

//Here i'm using mongoose module to connect the databse

mongoose
    .connect("mongodb://127.0.0.1:27017/testdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to database");
    })
    .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });