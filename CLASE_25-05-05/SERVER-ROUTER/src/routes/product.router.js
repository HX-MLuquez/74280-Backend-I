const express = require("express");
const router = express.Router();

const products = [
    {
        id: 1,
        title: "Producto 1",
        price: 100,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/Calculator-Math-Learn-School-256.png"
    },
    {
        id: 2,
        title: "Producto 2",
        price: 200,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/Calculator-Math-Learn-School-256.png"
    },
]

router.get("/", (req, res)=>{
    res.status(200).json(products)
})


module.exports = router;