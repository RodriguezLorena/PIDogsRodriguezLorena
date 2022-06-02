import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { traerLosPerritos } from '../redux/actions'
import Cards from "../componentes/Cards";

function Home(){
    const dispatch= useDispatch()
    const perritos= useSelector((state)=>state.perritos) 

    useEffect(()=>{  
        dispatch(traerLosPerritos()) 
    }, [dispatch])

    /** Inicio del paginado */
    const [currentPage, setCurrentPage]= useState(1)

    const pageSize = 8;
    const lastIndex= currentPage * pageSize;
    const firstIndex= lastIndex - pageSize;

    
    const listDogs = perritos.slice(firstIndex,lastIndex)

    const cambiarPagina=()=>{
        if(currentPage >= Math.ceil(perritos.length/pageSize)) return;

        setCurrentPage(currentPage +1)
    }

    const volverAnterior= ()=>{
        if(currentPage === 1)return;
        setCurrentPage(currentPage -1)
    }
   

    return(
        <div>
            <button onClick={volverAnterior}>volver</button>
            <button onClick={cambiarPagina}>siguiente</button>
            <Cards listDogs={listDogs}/>
        </div>
    )
}

export default Home;