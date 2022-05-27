const { Router } = require('express');
const router = Router();


// Importar todos los routers;
const DogRoutes = require("./DogRoutes")
const temperamentoRoutes= require("./TemperamentosRoutes")
const postRoutes= require("./postRoutes")

// Configurar los routers
router.use("/dogs", DogRoutes)
router.use("/temperamentos", temperamentoRoutes)
router.use("/dog", postRoutes)
//aca apuntamos quien se va a encargar de cada ruta

module.exports = router;
