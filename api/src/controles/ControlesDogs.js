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
        const allRazas= await nombreDePerrito()
        const filtrados= allRazas.filter(string=> string.toLowerCase().includes(name.toLowerCase()))
        return filtrados
        
    } catch (error) {
        console.log(error)
    }
}

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
    
    
}