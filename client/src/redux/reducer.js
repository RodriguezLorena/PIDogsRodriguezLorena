const inicialState={
    perritos: [],
    temperamentos:[]
}

function reducer(state=inicialState, {type, payload}){
    switch(type){
        case "GET_DOGS":
            return{
                ...state,
                perritos: payload
            }
        default: return state    
    }
}

export default reducer;