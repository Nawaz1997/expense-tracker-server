const express = require("express");
const {connectMongoDB} = require("./connection");

const app = express();
const PORT = 2000;

connectMongoDB("")
    .then(() => {console.log("MongoDB Connected...")})
    .catch((err) => {console.log(err)});

app.listen(PORT, () => {console.log("SERVER Started...")});