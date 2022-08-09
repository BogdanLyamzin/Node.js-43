const express = require("express");

const books = require("./books");

const app = express();

app.get("/books", (req, res) => {
    res.json(books);
    // res.json(null)
    // res.send(null)
})

app.listen(3000);