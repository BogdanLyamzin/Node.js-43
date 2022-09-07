const {Book} = require("../../models/book");

const {RequestError} = require("../../helpers");

const getById = async(req, res) => {
    const {id} = req.params;
    const result = await Book.findById(id);
    // const result = await Book.findOne({_id: id})
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
}

module.exports = getById;