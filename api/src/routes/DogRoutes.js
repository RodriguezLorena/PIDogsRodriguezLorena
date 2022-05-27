const { Router } = require('express');
const router = Router();


const { buscaRazas, objetoPerrito, perritoPorId} = require('../controles/ControlesDogs');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//1°)
//este nos trae todos las razas de perros y los nombres por seleccion de query
 router.get("/", async(req, res)=>{
     const {name} = req.query;
    if(name){
        try {
            const resultado = await buscaRazas(name)
          if(resultado.length && resultado.length > 0)res.status(200).json(resultado) 
         } catch (error) {
            res.status(404).send(`${name} la raza no es la adecuada`)
             console.log(error)
         }
    }else {
        try {
            const nombress= await objetoPerrito()
            res.status(200).json(nombress)  
        } catch (error) {
             console.log(error)
         }
    }
    
 });

 //3°)
 router.get("/:id", async(req, res)=>{
     try {
        const {id} = req.params;
        const filtradoPerrito= await perritoPorId(id)
        res.status(200).json(filtradoPerrito)
     } catch (error) {
         console.log(error)
     }
 })



 //rutas temperamentos(maneja temperamentos router)
//localhost:3001/dogs





module.exports = router;
