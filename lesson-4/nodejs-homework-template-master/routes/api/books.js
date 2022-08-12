const express = require("express");
const Joi = require("joi");

const books = require("../../models/books");

const {RequestError} = require("../../helpers");

const router = express.Router();

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
})

router.get("/", async(_, res, next) => {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        next(error)
        // res.status(500).json({
        //     message: "Server error"
        // })
    }
});

router.get("/:id", async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await books.getById(id);
        if(!result) {
            throw RequestError(404, "Not found");
            // const error = new Error("Not found");
            // error.status = 404;
            // throw error;
            // res.status(404).json({
            //     message: "Not found"
            // });
            // return;
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.post("/", async(req, res, next) => {
    try {
        const {error} = bookSchema.validate(req.body);
        if(error) {
            throw RequestError(400, error.message);
        }
        const result = await books.add(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
})

router.put("/:id", async(req, res, next)=> {
    try {
        const {error} = bookSchema.validate(req.body);
        if(error) {
            throw RequestError(400, error.message);
        }
        const {id} = req.params;
        const result = await books.updateById(id, req.body);
        if(!result) {
            throw RequestError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
})

router.delete("/:id", async(req, res, next) => {
    try {
        const {id} = req.params;
        const result = await books.removeById(id);
        if(!result){
            throw RequestError(404, "Not found");
        }
        res.json({
            message: "Book deleted"
        })
        // res.status(204).json({
        //     message: "Book deleted"
        // })
    } catch (error) {
        next(error);
    }
})

module.exports = router;