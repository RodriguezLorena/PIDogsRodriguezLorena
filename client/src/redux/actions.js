import axios from "axios"

export function traerLosPerritos(){
    return (dispatch)=>{
      return axios ("http://localhost:3001/dogs")
        .then(res=> dispatch({
            type:"GET_DOGS", 
            payload: res.data
        }))
        .catch(error=>console.log(error))
    }
}

export function traerLosTemperamentos() {
    return async function(dispatch) {
        try{
            let dataTemperamentos = await axios.get('http://localhost:3001/temperaments');
            return dispatch({
                type: "GET_TEMPERAMENTS",
                payload: dataTemperamentos.data
            })
        }catch(error) {
            console.log(error)
        }
    }
}


export function detallePerrito(id){
    return async function(dispatch) {
        try{
            let dataDetalle = await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                type: "SELECT_DOGS",
                payload: dataDetalle.data
            })
        }catch(error) {
            console.log(error)
        }
    }
}

export function selectRemuve(){
    return{
        type: "SELECT_REMUVE"
    }
}

export function actionOrdenAlfa(payload){
    return{
        type: "SELECT_ORDEN_ALFA",
        payload
    }
}

export function actionTemperamentos(payload){
    return{
        type: "SELECT_FILTRO_TEMPERAMENTOS",
        payload
    }
}

export function actionCambioDePeso(payload){
    return{
        type: "SELECT_CAMBIO_PESO",
        payload
    }
}

export function resetearFiltros(){
    return {
        type: "RESET_FILTERS"
    }
}

export const filtroDeCreados =(payload)=>{
    return async function(dispatch){
        try {
            return dispatch({
                type: "FILTROS_CREADOS",
                payload
            })
        } catch (error) {
            console.log( error)
        }
    }
}
export const searchBarFilter =(payload)=>{
    return async function(dispatch){
        try {
            return dispatch({
                type: "SEARCH_BAR",
                payload
            })
        } catch (error) {
            
        }
    }
}

export function crearPerro(payload){
    return async function(dispatch){
        const newPerro= await axios.post("/dogs", payload)
        return newPerro;
    }
}