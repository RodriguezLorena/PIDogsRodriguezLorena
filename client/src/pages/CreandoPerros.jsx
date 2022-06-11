import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {useState,useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {crearPerro, } from "../redux/actions"

const CreandoPerros = () => {
  const dispatch= useDispatch()
  
  const perritos= useSelector((state)=>state.perritos)
  const perritosNm= useSelector((state)=>state.perritosNm)
 
  
useEffect(()=>{  
   
dispatch(crearPerro()) 

 }, [dispatch])
 
 
const [newPerro, setNewPerro]= useState({
    name:"",
    height:0,
    weight:"",
    life_span:"",
    temperaments:""
  })   

//errores



const handlerChangeInput=(e)=>{
  setNewPerro({
    ...newPerro,
    [e.target.name]: e.target.value
  })
    
}

  return (
    <div>
      <Link to="/home">Volver al Home</Link>
      <form >
        <div>
         <label>
          Name:
          <input id= "nameInput"
          type="text"
          name="name"
          value={newPerro.name}
          placeholder="Escribe el nombre"
          onChange={(e)=>handlerChangeInput(e)}
          autoComplete="off"/>
          </label> 
        </div>
        <div>
          <label>
            Peso
          <input />
          <input type=""/>
          </label> 
        </div>
       <div>
        <label>
          Altura
          <input type="text"  placeholder='escriba aca' />
          <input type=""/>
        </label>
       </div>
       <div>
        <label>
          Años de Vida
          <input type="text"  placeholder='escriba aca' />
          <input type=""/>
        </label>
       </div>
       <div>
       <label>
            <select>
                <option value="todos">Elegir Temperamentos</option>
               
                
            </select>
        </label>
       </div>
       <div>
        <button>Craer otro perrito</button>
       </div>
      </form>
    </div>
  )
}

export default CreandoPerros