const { Router } = require('express');
const router = Router();

const {Temperamento}= require("../db")

const { cadaTemperamento } = require('../controles/ControlesTemperamentos')




router.get("/", async(req,res)=>{
    try {
        let temperamentosDataBase= await Temperamento.findAll()

        if(!temperamentosDataBase.length){
            const temperamentosDeLaApi= await cadaTemperamento();

            await Temperamento.bulkCreate(temperamentosDeLaApi)

            let nuevaLlamadaDataBase= await Temperamento.findAll()
            return res.status(200).json(nuevaLlamadaDataBase)
        }

        res.status(200).json(temperamentosDataBase)
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;
