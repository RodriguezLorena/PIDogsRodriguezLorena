import React from "react";
import {filtroOrdenamiento} from "./index"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { traerLosPerritos } from '../../redux/actions'
//Inicio del filtrado y ordenamiento

const Filtro = () => {
    const dispatch= useDispatch()
    const perritos= useSelector((state)=>state.perritos) 



const [ordenAndFilter, setOrderAndfilter]=useState({
    orden: [],
    filter: []
})

const handleSubmit=(e)=>{
    e.prevenDefault();
    console.log(ordenAndFilter)
    console.log(filtroOrdenamiento(ordenAndFilter, perritos)[0])
}

const handleChange=(e)=>{
    const {name, value}=e.target;
    if(name=== "name" || name === "weight"){
        setOrderAndfilter({
            ...ordenAndFilter,
            orde:[... ordenAndFilter.orden.filter(item=>item.propiedad !== name), {propiedad: name, valor: value}]
        })
    }else{
        setOrderAndfilter({
            ...ordenAndFilter,
            filter:[...ordenAndFilter.filter.filter(item=>item.propiedad !== name),{ propiedad: name, valor: value}]
        })
    }
}
useEffect(()=>{  
    dispatch(traerLosPerritos())
}, [dispatch])
//fin del filtrado y ordenamiento

  return (
    <div>  
    <form onSubmit={handleSubmit}>
        <select name='name' onChange={handleChange}> 
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>
        <select name="weight"onChange={handleChange}>
            <option value="max" >Peso Mayor</option>
            <option value= "min">Peso Menor</option>
        </select>

    </form>
</div>
  )
}

export default Filtro