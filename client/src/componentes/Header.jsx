import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actionOrdenAlfa, actionTemperamentos, actionCambioDePeso, resetearFiltros} from "../redux/actions"
// import logoHeader from "../img/fondoInicio.jpg"


const Header = () => {
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
    }
    
    const handlerCambioPeso=(e)=>{
        let valor = e.target.value;
        dispatch(actionCambioDePeso(valor))
    }

    const resetFilters = ()=>{
        dispatch(resetearFiltros())
      }


  return (
    <div>
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
        </div>
        <div>
                <h2>CREAR PERRITO</h2>
        </div>
    </div>
  )
}

export default Header