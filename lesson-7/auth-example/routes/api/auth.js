const express = require("express");

const ctrl = require("../../controllers/auth");

const {ctrlWrapper} = require("../../helpers");

const {validationBody} = require("../../middlewares");

const {schemas} = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validationBody(schemas.registerSchema), ctrlWrapper(ctrl.register));

// signin
router.post("/login", validationBody(schemas.loginSchema), ctrlWrapper(ctrl.login));

module.exports = router;