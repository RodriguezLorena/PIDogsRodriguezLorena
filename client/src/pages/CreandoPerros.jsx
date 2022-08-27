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


const handlerChangeInput=(e)=>{
  setNewPerro({
    ...newPerro,
    [e.target.name]: e.target.value
  })
  setErrores(validacion({
    ...newPerro, 
    [e.target.name]: e.target.value
  }))
    
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
 if(Object.keys(errores).length === 0){
  alert("controla que todos los campos esten llenos y no tengan ningun error")
 }else{
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
}


//errores
const [errores, setErrores] = useState({})

function validacion(newPerro){
  let errores= {};

  if(newPerro.name.length < 2) errores.name = "Necesita tener un minimo de 2 caracteres"
  if(newPerro.name.length > 15) errores.name= "Tiene que tener un maximo de 15 caracteres"
  if(!newPerro.name) errores= "No puede contener numeros"

  if(Number(newPerro.alturaMin) < 15) errores.alturaMin= "tienen que tener una altura minima de 15"
  if(Number(newPerro.alturaMin) > Number(newPerro.alturaMax)) errores.alturaMin ="la altura minima no puede ser mayor al maximo"
  if(Number(newPerro.alturaMax) > 100) errores.alturaMax = "Es un perro surrealista"

  if(Number(newPerro.pesoMin) < 1) errores.pesoMin= "Necesita tener un peso minimo de 1kg"
  if(Number(newPerro.pesoMin) > Number(newPerro.pesoMax)) errores.pesoMin= "el peso minimo no puede ser mayor al maximo"
  if(Number(newPerro.pesoMax) > 100) errores.pesoMax= "el peso del perro es surrealista"

  if(Number(newPerro.life_span_min) <= 5) errores.life_span_min= "debe tener una vida minima de 5 años"
  if(Number(newPerro.life_span_max) > 28) errores.life_span_max= "debe tener una vida maxima de 28 años"
  if(Number(newPerro.life_span_min)> Number(newPerro.life_span_max)) errores.life_span_min=  "su vida minima no puede ser mayor a su vida maxima"

  if(!newPerro.url.includes("https://")) errores.url= "Debe comenzar con: https://"
  if(!/\.(jpg|png|gif)$/i.test(newPerro.url)) errores.url= "Debe finalizar con: jpg, png o gif"
   
  //  if(!newPerro.temperament.length) errores.temperament = "Debe selecccionar al menos un temperamento"
  return errores
}

  return (
    <div>
      <Link to="/home">Volver al Home</Link>
      <form>
        <div>
         <label>Name: 
          <input id="nameInput" type="text" name="name" value={newPerro.name} placeholder="Escribe el nombre"
          onChange={(e)=>handlerChangeInput(e)}/>   
            {errores.name && <p>{errores.name}</p>} 
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
             {errores.alturaMin && <p>{errores.alturaMin}</p>}
          {errores.alturaMax && <p>{errores.alturaMax}</p>}
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
              {errores.pesoMin && <p>{errores.pesoMin}</p>}
        {errores.pesoMax && <p>{errores.pesoMax}</p>}
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
             {errores.life_span_min && <p>{errores.life_span_min}</p>}
        {errores.life_span_max && <p>{errores.life_span_max}</p>}
        </label>
       
       </div>
       
       <div>
        <label>
          Imagen url
          <input type="text" name="url" 
            value={newPerro.url} 
            onChange={(e)=>handlerChangeInput(e)}
            placeholder="coloque su imagen aqui"/>
             {errores.url && <p>{errores.url}</p>}
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
            {/* {errores.temperament && <p>{errores.temperament}</p>} */}
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