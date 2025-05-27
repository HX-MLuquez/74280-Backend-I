const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

//* Implementar upload de imagenes
const upload = require("../middelwares/multerConfig.js");
const UserManager = require("../data-access-object/userDao");
const userDAO = new UserManager();
router.post("/add-image/:id", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No se ha subido ninguna imagen" });
    }

    const user = await userDAO.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    user.image = req.file.path;
    await user.save();

    res.json({ message: "Imagen subida exitosamente", user });
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    res.status(500).json({ error: "Error al subir la imagen" });
  }
});

module.exports = router;

/*
http://localhost:3000/api/users

objeto usuario ejemplo:
{
  "firstName": "Juan",
  "lastName": "Perez",
  "age": 30,
  "dni": "12345678",
  "course": "Fullstack",
  "grade": 10
},
{
  "firstName": "Maria",
  "lastName": "Gomez",
  "age": 25,
  "dni": "87654321",
  "course": "Backend",
  "grade": 9
}

* Test POST http://localhost:3000/api/users 
body:
{
  "firstName": "Cami",
  "lastName": "Diaz",
  "age": 30,
  "dni": "12345888",
  "course": "Fullstack",
  "grade": 10
}

* Test POST http://localhost:3000/api/users/add-image/6834eb76ba9c2790a84df781
body: FormData con campo 'image' que contenga un archivo de imagen
Nota: Asegúrate de que el usuario con ID 6834eb76ba9c2790a84df781 exista en la base de datos antes de probar este endpoint
*/
