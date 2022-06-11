import {React, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {actionOrdenAlfa, actionTemperamentos, actionCambioDePeso, resetearFiltros, filtroDeCreados,searchBarFilter} from "../redux/actions"
// import logoHeader from "../img/fondoInicio.jpg"
import style from "../componentes/styles/Header.module.css"
import { Link } from 'react-router-dom'
import img from "../img/craerPerrito.png"
import logoHeader from "../img/fondoInicio2.png"



const Header = ({setCurrentPage}) => {
    const dispatch= useDispatch()
    const temperaments= useSelector(state=> state.temperamentos)

    //ARRANCO CON LOS HANDLERS , SON LOS MANIPULADORES DE EVENTOS
    const handlerCambiarOrden=(e)=>{
        let valor=e.target.value;
        dispatch(actionOrdenAlfa(valor))
    }

    const handlerCambiaTemperamento=(e)=>{
        let valor = e.target.value;
        dispatch(actionTemperamentos(valor))
        setCurrentPage(1)
    }
    
    const handlerCambioPeso=(e)=>{
        let valor = e.target.value;
        dispatch(actionCambioDePeso(valor))
    }

    const handlerTipoCreados=(e)=>{
        let valor= e.target.value;
        dispatch(filtroDeCreados(valor))
        setCurrentPage(1)
    }

    const resetFilters = ()=>{
        dispatch(resetearFiltros())
      }
    
    //searchBar
   const [ message, setMessenger] = useState("")

   function handlerMessenger(e){
    let busqueda= e.target.value.toLowerCase().trim()
    setMessenger(busqueda)  
}

   function onSubmit(e){
       e.preventDefault();
       dispatch(searchBarFilter(message))
       setMessenger("");
       setCurrentPage(1)
       
   }

  
  return (
    <div className={style.contenedor} >
        <Link className={style.logoText} to="/">
        <p >Huellitas</p>
        <img className={style.logoHeader} src={logoHeader} alt="logo"/>
        
        </Link>
       
        
           
                <button onClick={()=>resetFilters()}>Resetear Lista</button>
          
           
                <select onChange={(e)=>handlerCambiarOrden(e)} name="ordenAlfa">
                    <option value="aZ">A-Z</option>
                    <option value="zA">Z-A</option>

                </select>
           
           
                <select onChange={(e)=> handlerCambiaTemperamento(e)} name= "Temperamento">
                    <option value="all">Todos los Temperamentos</option>
                    {
                        temperaments && temperaments.map((ele)=>{
                            return(
                                <option key={ele.id} value={ele.name}>{ele.name}</option>
                            )
                        })
                    }
                </select>
           

            
                <select onChange={(e)=>handlerCambioPeso(e)} name="Orden del peso">
                    <option value="minMax">peso minimo</option>
                    <option value="maxMin">peso maximo</option>
                </select>
           
            
                <select onChange={(e)=>handlerTipoCreados(e)} name="Creados">
                    <option value="todos">Todos</option>
                    <option value="creadosDb">Raza Creada</option>
                    <option value="creadosApi">Raza de Api</option>
                </select>
           
          
                <form onSubmit={(e)=>onSubmit(e)}>
                    <input type="text" value={message} onChange={(e)=>handlerMessenger(e)} placeholder="Search for names.."/>
                    <input type="submit" value="Enviar"/>
                   
                </form>
            
        

        
       
        <Link className={style.linkCreaccion} to="/newdogs">
            <img className={style.imgBoton}src={img} alt="img"/>
             <h4 className={style.text}>Me Creas?</h4>  

        </Link>
        
    </div>
  )
}

export default Header