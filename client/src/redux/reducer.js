const inicialState = {
    perritos: [],
    unPerrito: {},
    temperamentos:[]
}

 function reducer(state=inicialState, {type, payload}){
    switch(type){
        case "GET_DOGS":
            return{
                ...state,
                perritos: payload
            }
        case "SELECT_DOGS":
                return   {
                    ...state, 
                    unPerrito: payload
                }  
        case "SELECT_REMUVE":
                    return   {};     
        default:
            return state    
    }
}

export default reducer