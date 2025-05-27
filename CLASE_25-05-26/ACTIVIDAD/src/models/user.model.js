const mongoose = require("mongoose");

//* Definimos el Schema

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    index: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  dni: {
    type: String,
    require: true,
    unique: true,
  },
  course: {
    type: String,
    require: true,
  },
  grade: {
    // la calificación
    type: String,
    require: true,
  },
  image: {
    type: String,
    default: null,
  },
});

//* Para crear un modelo necesitamos el nombre del model y el schema

module.exports = mongoose.model("User", userSchema)
//* Este model 'User' en la MONGO DB esta colección se llamará 'users' 