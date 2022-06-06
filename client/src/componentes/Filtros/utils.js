export function upperIfString(value){
    if(typeof value === "string"){
        return value.toLocaleUpperCase()
    }else{
        return value
    }
}