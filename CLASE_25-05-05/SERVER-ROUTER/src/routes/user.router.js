const express = require("express");
const router = express.Router();

const users = []
const user = {
    name: "Pepe"
}
//* Todos los users
router.get("/", (req, res) => {
  res.status(200).json({ success: true, users });
});

//* GET User by ID
router.get("/:id", (req, res) => {
  res.status(200).json({ success: true, user });
});

//* DELETE User by ID
router.delete("/:id", (req, res) => {
  res.status(200).json({ success: true, user });
});

//* PUT User by ID + body {}
router.put("/:id", (req, res) => {
  res.status(200).json({ success: true, user });
});

//* POST User by body {}
router.post("/", (req, res) => {
  res.status(200).json({ success: true, user });
});

//-----------------------
//! CUIDADO
//* Todos los users Male
// router.get("/male", (req, res) => {
//   res.status(200).json({ success: true, users });
// });

//* Todos los users Male - SOLUTION
router.get("/all/male", (req, res) => {
  res.status(200).json({ success: true, users });
});

module.exports = router