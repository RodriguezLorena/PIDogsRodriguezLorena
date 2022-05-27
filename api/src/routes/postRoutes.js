const { Router } = require("express")
const router = Router()
const {}=require("../controles/PostControles")

router.post("/dog", async (req, res)=>{
   
try {
    const datosDeRza= req.body;
    const razaNueva = await creandoRazas(datosDeRza)
    res.status(200).json(razaNueva) //ver si tengo  ue devolver o no
} catch (error) {
    console.log(error)
}
})

module.exports= router;