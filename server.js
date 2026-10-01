require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/youtube", (req, res) => {
    res.send("<h1>Chai is good. Is it? Yes!!</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});