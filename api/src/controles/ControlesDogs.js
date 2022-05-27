require("dotenv").config()
const axios = require("axios")
const {
    YOUR_API_KEY
   } = process.env;

const getAllDogs = async() => {
    try {
        let dogs = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)).data
        return dogs
    } catch (err) {
        console.log(err)
    }
}



const nombreDePerrito = async()=>{
    try {
       const nombre= await getAllDogs();
       const resultNombre= nombre.map((obj)=>obj.name);
        return resultNombre;
        
    } catch (error) {
        console.log(error);
    }
}


const buscaRazas = async(name)=>{
    try {
        const allRazas= await objetoPerrito()
        const filtrados= allRazas.filter(objeto=> objeto.name.toLowerCase().includes(name.toLowerCase()))
        if(filtrados.length > 0) return filtrados
                  
    } catch (error) {
        console.log(error)
    }
}


const objetoPerrito= async()=>{
    try {
        const todosLosDogs= await getAllDogs();
        const plantillaPerrito= todosLosDogs.map(objeto=>{
            return{
                id:objeto.id,
                name: objeto.name,
                height: objeto.height,
                weight: objeto.weight,
                life_span: objeto.life_span,
                image: objeto.image.url,
                temperament: objeto.temperament
            }
        })
        return plantillaPerrito;
    } catch (error) {
        console.log(error)
    }
}


const perritoPorId= async (id)=>{
    try {
        const llamarTodoLosPerrito= await objetoPerrito();
        const buscarLosPerritos= llamarTodoLosPerrito.find(elemento=> elemento.id == id);
        return buscarLosPerritos;
    } catch (error) {
       console.log(error) 
    }
}

//pruebaaaaaa!!!!
// const perrito = async()=>{
//     try {
//         let perritosGeneral= await getAllDogs();
//         let primerPerrito= perritosGeneral[0];
//         console.log(primerPerrito);
//         return primerPerrito;
//     } catch (error) {
//          console.log(error);
//     }    
// }

module.exports={
    getAllDogs,
    // perrito,
    nombreDePerrito,
    buscaRazas,
    objetoPerrito,
    perritoPorId
    
    
}