const UserManager = require("../data-access-object/userDao");
const userDAO = new UserManager();

class UserService {
  async createUser(data) {
    const { firstName, lastName, dni } = data;

    if (!firstName || !lastName || !dni) {
      throw new Error("Faltan campos requeridos: firstName, lastName o dni");
    }

    const existente = await userDAO.getUserByDni(dni);
    if (existente) {
      throw new Error("El usuario con ese DNI ya existe");
    }

    return await userDAO.createUser(data);
  }

  async getAllUsers() {
    return await userDAO.getAllUsers();
  }

  async getUserById(id) {
    const user = await userDAO.getUserById(id);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  }

  async updateUserById(id, data) {
    const actualizado = await userDAO.updateUserById(id, data);
    if (!actualizado) {
      throw new Error("No se pudo actualizar");
    }
    return actualizado;
  }

  async deleteUserById(id) {
    const eliminado = await userDAO.deleteUserById(id);
    if (!eliminado) {
      throw new Error("No se encontró usuario para eliminar");
    }
    return eliminado;
  }
}

module.exports = new UserService();
