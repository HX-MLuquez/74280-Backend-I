const userService = require("../services/userService");

class UserController {
  async createUser(req, res) {
    try {
      const nuevo = await userService.createUser(req.body);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const lista = await userService.getAllUsers();
      res.json(lista);
    } catch (error) {
      res.status(500).json({ error: "Error del servidor" });
    }
  }

  //* Return vista
  // async getAllUsersRenderA(req, res) {
  //   try {
  //     const lista = await userService.getAllUsers();
  //     res.render("listUsers.hbs", lista);
  //   } catch (error) {
  //     res.status(500).json({ error: "Error del servidor" });
  //   }
  // }
  // async getAllUsersRenderB(req, res) {
  //   try {
  //     const lista = await userService.getAllUsers();
  //     res.render("listUsers.hbs", lista);
  //   } catch (error) {
  //     res.status(500).json({ error: "Error del servidor" });
  //   }
  // }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updateUserById(req, res) {
    try {
      const actualizado = await userService.updateUserById(
        req.params.id,
        req.body
      );
      res.json(actualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUserById(req, res) {
    try {
      const eliminado = await userService.deleteUserById(req.params.id);
      res.json(eliminado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();

//-------------------------------------
