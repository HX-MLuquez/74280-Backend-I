const express = require("express");
const router = express.Router();
const { getBooksController } = require("../controllers/book.controller");

router.get("/", getBooksController);
// router.get("/dos", getBooks);
// router.get("/tres", getBooks);

module.exports = router;