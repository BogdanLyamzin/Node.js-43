const {Schema, model} = require("mongoose");
const Joi = require("joi");

const {handleSchemaValidationErrors} = require("../helpers");

const genreList = ["fantastic", "love"];
const isbnRegexp = /^\d{3}-\d-\d{3}-\d{5}-\d$/;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title must be exist"],
    },
    author: {
        type: String,
        required: [true, "Title must be exist"],
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: genreList,
        required: true,
    },
    isbn: {
        type: String,
        match: isbnRegexp,
        unique: true,
        required: true,
    }
}, {versionKey: false, timestamps: true});

bookSchema.post("save", handleSchemaValidationErrors)

const addSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    favorite: Joi.bool(),
    genre: Joi.string().valueOf(...genreList).required(),
    isbn: Joi.string().pattern(isbnRegexp).required(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.bool().required(),
})

const schemas = {
    addSchema,
    updateFavoriteSchema,
}

const Book = model("book", bookSchema);
// category => categories
// mouse => mice

module.exports = {
    Book,
    schemas,
}