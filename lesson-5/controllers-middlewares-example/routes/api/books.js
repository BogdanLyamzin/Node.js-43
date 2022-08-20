const express = require("express");

const ctrl = require("../../controllers/books");

const {ctrlWrapper} = require("../../helpers");

const {validationBody} = require("../../middlewares");

const schemas = require("../../schemas/book")

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validationBody(schemas.add), ctrlWrapper(ctrl.add));

router.put("/:id", validationBody(schemas.add), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;