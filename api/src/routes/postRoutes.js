const { urlencoded } = require("body-parser")
const { Router } = require("express")
const router = Router()

//formulario de creacion
const {Dog, Temperamento}= require("../db")

router.post("/", async (req, res)=>{
   try {
     const {name, height,  weight, life_span, url, temperament}= req.body;
     
     const creandoRaza= await Dog.create({
         name: name,   //controlar que siempre este este acorde con mi modelo de creacion
         height: height,
         weight: weight,
         life_span:life_span,
         image: url,

     })
   const traeDb= await Temperamento.findAll({
       where:{name: temperament}
   })

   await creandoRaza.addTemperamento(traeDb)
   res.send("Se pudo cargar todo muy bien")
  
   }catch(error) {
       console.log(error)
   }
// try {
//     const datosDeRza= req.body;
//     const razaNueva = await creandoRazas(datosDeRza)
//     res.status(200).json(razaNueva) //ver si tengo  ue devolver o no
// } catch (error) {
//     console.log(error)
// }
})


// name: 
// height:
// weight: 
// life_span:
// image: 
// temperament: 
module.exports= router;