const books = require("../../models/books");

const getAll = async(_, res) => {
    const result = await books.getAll();
    res.json(result);
}

module.exports = getAll;