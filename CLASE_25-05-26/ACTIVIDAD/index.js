require("dotenv").config();
const app = require("./src/app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
}); 

/*
* REPASO GENERAL
* ESTRUCTURA
api/
│
├── src/
│   │
│   ├── data-access-object/
│   │   └── UserManager.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── services/
│   │   └── UserService.js
│   │
│   ├── controllers/
│   │   └── UserController.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   └── database/
│       └── connect.js
│   
├── app.js
├── index.js
├── .env
└── package.json

*/


