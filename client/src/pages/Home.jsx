import { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { traerLosPerritos } from '../redux/actions'
import Cards from "../componentes/Cards";
import styles from "../pages/styles/Home.module.css"

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
   
    const paginas= (numPag)=>{   //paginado por numero
        setCurrentPage(numPag)
    }

    let numerosDePaginas=[];
    for(let i= 1; i <= Math.ceil(perritos.length/pageSize); i++){
        numerosDePaginas.push(i)
    }

    return(
        <Fragment>
            <div className={styles.button}>
                <button className={styles.btn} onClick={volverAnterior}>volver</button>
                {
                    numerosDePaginas && numerosDePaginas.map((num)=>{
                        return(
                            <button key={num} onClick={()=>paginas(num)}>{num}</button>
                        )
                    })
                }
                <button className={styles.btn} onClick={cambiarPagina}>siguiente</button>
            </div>
           
            <div className={styles.container}>    
                < Cards listDogs={listDogs}/>
            </div>
        </Fragment>
    )
}

export default Home;