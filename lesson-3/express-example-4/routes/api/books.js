const express = require("express");

const books = require("../../data/books");

const router = express.Router();

router.get("/", (req, res)=> {
    res.json(books)
});

router.get("/:id", (req, res)=> {
    const {id} = req.params;
    const result = books.find(item => item.id === id);
    res.json(result)
});

module.exports = router;