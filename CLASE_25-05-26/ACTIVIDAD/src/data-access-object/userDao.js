const User = require("../models/user.model");
const mongoose = require("mongoose"); //* ODM -> manejando la data en nuestra MONGO DB

class UserManager {
  async createUser(data) {
    try {
      const user = new User(data);
      return await user.save();
    } catch (error) {
      throw new Error("Error al crear usuario");
    }
  }
  async getAllUsers() {
    try {
      //* Aplicamos PROYECCIÓN (filtrar los campos que vamos a requerir)
      const listUser = await User.find({}, "firstName lastName course");
      return listUser;
    } catch (error) {
      throw new Error("Error al obtener usuarios");
    }
  }
  async getUserById(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error("Error obteniendo usuario:", error);
      return null;
    }
  }
  async updateUserById(id, data) {
    try {
      //* { new: true } <- le solicitamos devuelva el doc actualizado y no el original
      const user = await User.findByIdAndUpdate(id, data, { new: true });
      return user;
    } catch (error) {
      console.error("Error actualizando:", error);
      throw new Error("Error al actualizar");
    }
  }
  async deleteUserById(id) {
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (error) {
      console.error("Error eliminando:", error.message);
      return null;
    }
  }
  async getUserByDni(dni) {
    try {
      const user = await User.findOne({ dni });
      return user;
    } catch (error) {
      console.error("Error buscando por DNI:", error);
      return null;
    }
  }
}

module.exports = UserManager;

/*

El model User

User {
create:
save:
find:
findById:
findOne:
findByIdAndUpdate:
findByIdAndDelete:

}




User: {
Model()
Model.$where()
Model.aggregate()
Model.applyDefaults()
Model.applyTimestamps()
Model.applyVirtuals()
Model.bulkSave()
Model.bulkWrite()
Model.castObject()
Model.cleanIndexes()
Model.clientEncryption()
Model.countDocuments()
Model.create()
Model.createCollection()
Model.createIndexes()
Model.createSearchIndex()
Model.db
Model.deleteMany()
Model.deleteOne()
Model.diffIndexes()
Model.discriminator()
Model.distinct()
Model.dropSearchIndex()
Model.ensureIndexes()
Model.estimatedDocumentCount()
Model.events
Model.exists()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.hydrate()
Model.init()
Model.insertMany()
Model.insertOne()
Model.inspect()
Model.listIndexes()
Model.listSearchIndexes()
Model.namespace()
Model.populate()
Model.prototype.$model()
Model.prototype.$where
Model.prototype.base
Model.prototype.baseModelName
Model.prototype.collection
Model.prototype.collection
Model.prototype.db
Model.prototype.deleteOne()
Model.prototype.discriminators
Model.prototype.increment()
Model.prototype.model()
Model.prototype.modelName
Model.prototype.save()
Model.recompileSchema()
Model.replaceOne()
Model.schema
Model.startSession()
Model.syncIndexes()
Model.translateAliases()
Model.updateMany()
Model.updateOne()
Model.updateSearchIndex()
Model.useConnection()
Model.validate()
Model.watch()
Model.where()
}

*/

//* DESCANSO hasta las 21:36 !!!!!!!!!
