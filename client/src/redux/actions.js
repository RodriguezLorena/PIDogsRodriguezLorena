import axios from "axios"

export function traerLosPerritos(){
    return (dispach)=>{
        return axios ("http://localhost:3001/dogs")
        .then(res=> dispach({type:"GET_DOGS", payload: res.data}))
    }
}