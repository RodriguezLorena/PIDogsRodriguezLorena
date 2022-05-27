const { Router } = require('express');
const router = Router();


const { getAllDogs, perrito, nombreDePerrito, buscaRazas } = require('../controles/ControlesDogs');




// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// localhost:3001/dogs/primerPerrito
// router.get("/primerPerrito", async(req, res)=>{
//     let llamadaDeperrito= await perrito();
//     console.log(llamadaDeperrito)
//     res.status(200).json(llamadaDeperrito);
// })

//1°)
//este nos trae todos las razas de perros y los nombres por seleccion de query
 router.get("/", async(req, res)=>{
     const {name} = req.query;
    if(name){
        try {
            const resultado = await buscaRazas(name)
            res.status(200).json(resultado) 
         } catch (error) {
             console.log(error)
         }
    }else if(name){
           res.status(404).send(`${req.query.name} la raza no es la adecuada`) //ver este error
    }else {
        try {
            const nombress= await nombreDePerrito()
            res.status(200).json(nombress)  
        } catch (error) {
             console.log(error)
         }
    }
    
 })

 //3°)
//  router.get("/", async(req, res)=>{
    
//      try {
//         const {detalles} = req.body;
//         const detallesListos= await obtieneDetalleDeRaza(detalles)
//         res.status(200).json(detallesListos)
//      } catch (error) {
//          console.log(error)
//      }
//  })



 //rutas temperamentos(maneja temperamentos router)
//localhost:3001/dogs

router.get("/", async(req, res) => {
    let datosGenerales= await getAllDogs();
    res.status(200).json(datosGenerales)
  })




module.exports = router;
