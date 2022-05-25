require('dotenv').config();
const axios = require("axios")
const {getAllDogs} = require("./ControlesDogs")
const {
    YOUR_API_KEY
   } = process.env;

  


const getAllTemperamentos = async() =>{
    console.log( "ACA ESTA EL ERROR", YOUR_API_KEY)
    try{
        let todosLosTemperamentos = await getAllDogs()
        let temperamentos= todosLosTemperamentos.map((objeto)=> objeto.temperament)
        return temperamentos;
        // let temperamentos = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data
        // res.send(temperamentos)
    
    }catch(err){
        console.log(err)
    }

}

const cadaTemperamento= async()=>{
    try {
       let todosLosTemperamentos= await getAllTemperamentos();
       let todosUnidos= todosLosTemperamentos.join(", ")
       let separados = todosUnidos.split(", ")
       let filtros= separados.filter((elementos)=> elementos !== "")
       
       const TodosLosDatos= [];

       filtros.forEach(elemento => {
           if(!TodosLosDatos.includes(elemento)){
               TodosLosDatos.push(elemento)
           }
       });
       const datosFinales= TodosLosDatos.map(elemento=>{
           return {name:elemento}
       })


       return datosFinales;


    } catch (error) {
       console.log(error)
    }
}

module.exports={
    getAllTemperamentos,
    cadaTemperamento
}