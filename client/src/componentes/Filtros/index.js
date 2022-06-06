import { traerLosPerritos } from "../../redux/actions";
import aplicarFiltros from "./filtros";
import aplicarOrdenamiento from "./ordenamientos";




const normalizarObjetosDog=(obj)=>{
    if(obj.weigth){
        obj.weigth ={
            min: Number(obj.weigth.split("-")[0].trim()),
            max: Number(obj.weigth.split("-")[1].trim())
        }
        return obj
    }
}

const dogsNormalizados = traerLosPerritos.map(normalizarObjetosDog)
console.log(dogsNormalizados)


const configOrder= [{propiedad: "name", orden: "asc"}, {propiedad: "weight", orden: "asc"}]
const configFiltro=[{propiedad: "temperament", value: "gay"}]

const config = {
    orden: configOrder,
    filtro: configFiltro
}

export function filtroOrdenamiento(config, lista){
    let resultFilterOrden=lista;
    if(config.filtro && config.filtro[0]){
        resultFilterOrden = aplicarFiltros(config.filtro, resultFilterOrden)
    }
    if(config.orden && config.orden[0]){
        resultFilterOrden= aplicarOrdenamiento(config.orden, resultFilterOrden)
    }
    return resultFilterOrden
}

console.log(filtroOrdenamiento(config, dogsNormalizados))