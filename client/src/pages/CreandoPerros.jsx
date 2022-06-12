import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

import {useState,useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {crearPerro, traerLosTemperamentos } from "../redux/actions"

const CreandoPerros = () => {
  const dispatch= useDispatch()
  const navigate= useNavigate()
  
  const temperamentos= useSelector((state)=>state.temperamentos)
 
  
useEffect(()=>{  
dispatch(traerLosTemperamentos())  
dispatch(crearPerro()) 

 }, [dispatch])
 
 
const [newPerro, setNewPerro]= useState({
    name:"",
    alturaMin: 0,
    alturaMax: 0,
    pesoMin: 0,
    pesoMax:0,
    life_span_min: 0,
    life_span_max: 0,
    url: "",
    temperament:[]
  })   

//errores



const handlerChangeInput=(e)=>{
  setNewPerro({
    ...newPerro,
    [e.target.name]: e.target.value
  })
    
}

const handlerCambiarTemperamento=(e)=>{
  if(newPerro.temperament.includes(e.target.value)){
    return;
  }else{
    setNewPerro({
      ...newPerro,
      temperament: [
        ...newPerro.temperament,
         e.target.value]
    })
  }
}

const handlerDeleteTemperamento=(e)=>{
  const filtrado= newPerro.temperament.filter(ele=> ele !== e.target.innerHTML) 
  setNewPerro({
    ...newPerro,
    temperament: filtrado

  })
}

const handlerCrearPerrito=(e)=>{
  e.preventDefault()
  const perritoCreadoDefinitivamente={
    ...newPerro,
    height:`${newPerro.alturaMin} - ${newPerro.alturaMax}`,
    weight: `${newPerro.pesoMin} - ${newPerro.pesoMax}`,
    life_span: `${newPerro.life_span_min} - ${newPerro.life_span_max}`
  }
  dispatch(crearPerro(perritoCreadoDefinitivamente))
  alert("Tu Peludito ya esta creado")
  setTimeout(() => {
    navigate("/home")
  }, 500);
}

  return (
    <div>
      <Link to="/home">Volver al Home</Link>
      <form>
        <div>
         <label>
          Name: 
          <input id="nameInput" 
          type="text"
          name="name"
          value={newPerro.name}
          placeholder="Escribe el nombre"
          onChange={(e)=>handlerChangeInput(e)}/>
        </label>  
        </div>

        <div>
          <label>
            Altura
            <input type="number"
              name="alturaMin" 
              value={newPerro.alturaMin} 
              onChange={(e)=>handlerChangeInput(e)} 
              placeholder= "Coloque altura minima"/>
            <input type="number" name= "alturaMax" 
            value={newPerro.alturaMax} 
            onChange={(e)=>handlerChangeInput(e)} 
            placeholder= "Coloque altura Maxima"/>
          </label> 
        </div>

       <div>
        <label>
         Peso
          <input type="number" 
          name="pesoMin" value={newPerro.pesoMin} 
          onChange={(e)=>handlerChangeInput(e)} 
          placeholder="escriba el peso minimo" />
          <input type="number" name="pesoMax" 
          value={newPerro.pesoMax} 
          onChange={(e)=>handlerChangeInput(e)} 
          placeholder="escriba el peso maximo"/>
        </label>
       </div>
       <div>
        <label>
          Años de Vida
          <input type="number" 
          name="life_span_min" value={newPerro.life_span_min} 
          onChange={(e)=>handlerChangeInput(e)} 
          placeholder="escriba los años de vida min"/>
          <input type="number" 
          name="life_span_max" value={newPerro.life_span_max} 
          onChange={(e)=>handlerChangeInput(e)} 
          placeholder="escriba los años de vida max"/>
        </label>
       </div>
       
       <div>
        <label>
          Imagen url
          <input type="text" name="url" 
          value={newPerro.url} 
          onChange={(e)=>handlerChangeInput(e)}
          placeholder="coloque su imagen aqui"/>
        </label>
       </div>
       
       <div>
       
            <select onChange={(e)=>handlerCambiarTemperamento(e)} 
            defaultValue={"default"}>
                <option value="default" 
                disabled>Elegir Temperamentos</option>
                {
                  temperamentos && temperamentos.map(ele=> {  
                    return (
                      <option value={ele.name}
                       key={ele.id}>{ele.name}</option>
                    )
                  })
                }      
            </select>
            <ul>
              {newPerro.temperament.length > 0 && newPerro.temperament.map
              (ele=> <li key={ele} onClick={(e)=>handlerDeleteTemperamento(e)}>{ele}</li>)}
            </ul>
      
       </div>
       <div>
        <button onClick={(e)=>handlerCrearPerrito(e)}>Craer otro perrito</button>
       </div> 
      </form>
    </div>
  )
}

export default CreandoPerros