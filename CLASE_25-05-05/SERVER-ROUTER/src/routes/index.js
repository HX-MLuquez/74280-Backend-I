const express = require("express");
const router = express.Router();
const productsRouter = require("./product.router");
const usersRouter = require("./user.router");

router.use("/products", productsRouter);
router.use("/users", usersRouter);

module.exports = router;
