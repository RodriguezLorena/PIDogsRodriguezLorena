import {React, useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {actionOrdenAlfa, actionTemperamentos, actionCambioDePeso, resetearFiltros, filtroDeCreados,searchBarFilter} from "../redux/actions"
// import logoHeader from "../img/fondoInicio.jpg"
import style from "../componentes/styles/Header.module.css"


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
    <div className={style.contenedor}>
        {/* <img  src={logoHeader} alt="logo"/> */}
        <div>
            <div>
                <button onClick={()=>resetFilters()}>Resetear Lista</button>
            </div>
            <div>
                <select onChange={(e)=>handlerCambiarOrden(e)} name="ordenAlfa">
                    <option value="aZ">A-Z</option>
                    <option value="zA">Z-A</option>

                </select>
            </div>
            <div>
                <select onChange={(e)=> handlerCambiaTemperamento(e)} name= "Temperamento">
                    <option value="all">Todos</option>
                    {
                        temperaments && temperaments.map((ele)=>{
                            return(
                                <option key={ele.id} value={ele.name}>{ele.name}</option>
                            )
                        })
                    }
                </select>
            </div>

            <div>
                <select onChange={(e)=>handlerCambioPeso(e)} name="Orden del peso">
                    <option value="minMax">peso minimo</option>
                    <option value="maxMin">peso maximo</option>
                </select>
            </div>
            <div>
                <select onChange={(e)=>handlerTipoCreados(e)} name="Creados">
                    <option value="todos">Todos</option>
                    <option value="creadosDb">Raza Creada</option>
                    <option value="creadosApi">Raza Api</option>
                </select>
            </div>
            <div>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <input type="text" value={message} onChange={(e)=>handlerMessenger(e)} placeholder="Search for names.."/>
                    <input type="submit" value="Enviar"/>
                   
                </form>
            </div>
        </div>
        <div>
                <h2>CREAR PERRITO</h2>
        </div>
    </div>
  )
}

export default Header