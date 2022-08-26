const {Book} = require("../../models/book");

const {RequestError} = require("../../helpers");

const removeById = async(req, res) => {
    const {id} = req.params;
    const result = await Book.findByIdAndRemove(id);
    if(!result){
        throw RequestError(404, "Not found");
    }
    res.json({
        message: "Book deleted"
    })
}

module.exports = removeById;