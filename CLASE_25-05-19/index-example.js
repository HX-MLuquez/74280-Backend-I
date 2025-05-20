//* MANAGER

class ProductManager {
  constructor() {
    this.products = [];
  }
  static async getAllProducts() {
    try {
      // Lee o busca data en archivo o en db
    } catch (error) {}
  }
  static async getProductById(id) {
    try {
      // Lee o busca data en archivo o en db
    } catch (error) {}
  }
}

// class UserManager {
//   constructor() {
//     this.id = null;
//   }
//   static async getUserById() {
//     try {
//       // Lee o busca data en archivo o en db
//     } catch (error) {}
//   }
// }

module.exports = { ProductManager };

// //--------------------------------

// module.exports = {
//   getAllProducts: async () => {},
//   getProductById: async () => {},
// };

//* SERVICES
const { ProductManager } = require("./product.manager.js");

// const products = new ProductManager // con métodos static no hace falta 


// ProductManager.getAllProducts
class ProductService {
  static async getAllProducts() {
    try {
      // Lee o busca data en archivo o en db
      const allProducts = await ProductManager.getAllProducts
    } catch (error) {}
  }
  static async getProductById(id) {
    try {
      // Lee o busca data en archivo o en db
    } catch (error) {}
  }
}