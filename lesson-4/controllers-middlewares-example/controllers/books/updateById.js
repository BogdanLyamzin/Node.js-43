const books = require("../../models/books");

const {RequestError} = require("../../helpers");

const updateById = async(req, res)=> {
    const {id} = req.params;
    const result = await books.updateById(id, req.body);
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
}

module.exports = updateById;