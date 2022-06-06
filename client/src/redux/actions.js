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