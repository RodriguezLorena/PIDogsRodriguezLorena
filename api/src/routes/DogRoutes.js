const { Router } = require('express');
const router = Router();


const { getAllDogs, perrito, nombreDePerrito } = require('../controles/ControlesDogs');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// localhost:3001/dogs/primerPerrito
// router.get("/primerPerrito", async(req, res)=>{
//     let llamadaDeperrito= await perrito();
//     console.log(llamadaDeperrito)
//     res.status(200).json(llamadaDeperrito);
// })

// router.get("/nombres", async(req, res)=>{
//     try {
//         const nombress= await nombreDePerrito()
//         res.status(200).json(nombress)  
//     } catch (error) {
//         console.log(error)
//     }
// })

//localhost:3001/dogs

router.get("/", async(req, res) => {
    let datosGenerales= await getAllDogs();
    res.status(200).json(datosGenerales)
  })




module.exports = router;
