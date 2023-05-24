require("dotenv").config();
require("./config/databse");
const http = require("http");
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const server = http.createServer(app);

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

//using user route
app.use(userRoutes);

// server listening 
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});