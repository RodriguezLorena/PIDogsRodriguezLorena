const inicialState = {
    perritos: [],
    unPerrito: {},
    perritosNm:[],
    temperamentos:[]
}

 function reducer(state=inicialState, {type, payload}){
    switch(type){
        case "GET_DOGS":
            return{
                ...state,
                perritos: payload,
                perritosNm: payload
            }
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperamentos: payload
            }    
        case "SELECT_DOGS":
                return   {
                    ...state, 
                    unPerrito: payload
                }  
                    
        case "SELECT_ORDEN_ALFA":
            const listaDePerritos= [...state.perritos]
            if(payload === "aZ"){
                listaDePerritos.sort((obj1, obj2)=>{
                    if(obj1.name < obj2.name){
                        return -1
                    }else{
                        return 1
                    }
                })
            }

            if(payload === "zA"){
                listaDePerritos.sort((obj1, obj2)=>{
                    if(obj1.name < obj2.name){
                        return 1
                    }else{
                        return -1
                    }
                })
            }
            return{
                ...state,
                perritos: listaDePerritos
                
            } 
        case "SELECT_FILTRO_TEMPERAMENTOS":
            const listadogs = [...state.perritosNm] 
            let listaDeTemperamentos;
            if(payload === "all"){
                listaDeTemperamentos = listadogs
            }else{
                listaDeTemperamentos = listadogs.filter((ele)=>ele.temperament?.includes(payload))
            }
            return{
                ...state,
                perritos: listaDeTemperamentos
            }  
            case "SELECT_CAMBIO_PESO":
                let listaPeso= [...state.perritos]
                if(payload === 'minMax') {
                    listaPeso.sort( (obj1, obj2) => {
                        if( Number(obj1.weight.split(" - ")[0]) < Number(obj2.weight.split(" - ")[0])) {
                            return -1
                        } else {
                            return 1
                        }
                    } )
                }
                if(payload === 'maxMin') {
                    listaPeso.sort( (obj1, obj2) => {
                        if( Number(obj1.weight.split(" - ")[1]) < Number(obj2.weight.split(" - ")[1])) {
                            return 1
                        } else {
                            return -1
                        }
                    } )
                }
                return{
                    ...state,
                    perritos:listaPeso
                }   
            case "RESET_FILTERS" :
                let listDogs3 = [...state.perritosNm]
                return{
                    ...state,
                    perritos: listDogs3
                } 
        case "FILTROS_CREADOS":
            let losPerros= [...state.perritosNm]
            let filtrados;
            if(payload === "todos"){
                filtrados = losPerros
            } else{
                filtrados= payload === "creadosDb" ? losPerros.filter(x=>(x.id).toString().length > 10) : losPerros.filter(x=>(x.id).toString().length < 10)
            }
            return{
                ...state,
                perritos: filtrados
            } 
        case "SEARCH_BAR":
            let busquedaDeperros= [...state.perritosNm]
            let resultado= busquedaDeperros.filter(e=>(e.name.toLowerCase()).includes(payload.toString().toLowerCase()))
            if(resultado){
                return{
                    ...state,
                    perritos: resultado
                }        
            }else{
               
                return{
                    ...state,
                    
                }        
            }
        case "DELETE_PERRITO":
            return{
                ...state,
                unPerrito:{}
            }
           
        default:
            return state    
    }
}

export default reducer