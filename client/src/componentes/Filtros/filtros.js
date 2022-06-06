import { upperIfString } from "./utils"

function filterPor(configIndividual, lista){
   if(configIndividual.propiedad === "weigth"){
       return lista.filter((item)=> configIndividual.value >= item[configIndividual.propiedad].min && configIndividual.value <= item[configIndividual.propiedad].max)

   }else if(configIndividual.propiedad === "temperament"){
       return lista.filter(
           (item)=> item[configIndividual.propiedad].includes(configIndividual.value)
       )
   }else{
       return lista.filter(
           (item)=> upperIfString(item[configIndividual.propiedad]) === upperIfString(configIndividual.value)
       )
   }
}


export default function aplicarFiltros(configFilter, lista){
    let listaFiltrada=lista;
    for(let i = 0; i < configFilter.length; i++){
        listaFiltrada=filterPor(configFilter[i], listaFiltrada)
    }
    return listaFiltrada
}