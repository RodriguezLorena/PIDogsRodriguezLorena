const { Router } = require('express');
const router = Router();


// Importar todos los routers;
const DogRoutes = require("./DogRoutes")
const temperamentoRoutes= require("./TemperamentosRoutes")


// Configurar los routers
router.use("/dogs", DogRoutes)
router.use("/temperamentos", temperamentoRoutes)

//aca apuntamos quien se va a encargar de cada ruta

module.exports = router;
