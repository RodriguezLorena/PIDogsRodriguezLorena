
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import { detallePerrito, selectRemuve } from '../redux/actions'
import styles from "../pages/styles/Home.module.css"

const Detalle = () => {
  const {id}=useParams()
  console.log(id)

  const unPerrito= useSelector((state)=>state.unPerrito) 
 
 
  const dispatch= useDispatch()
 

  useEffect(()=>{  
      dispatch(detallePerrito(id))
     
  }, [dispatch])
  
  return(
    <div>
       
       <div className={styles.card} key={unPerrito.id}>
       <img className={styles.img} src={unPerrito.image} alt={unPerrito.name}/>
        <div className={styles.container}>
         <h4 className={styles.title}>{unPerrito.name}</h4>
         <p>{unPerrito.heigth}</p>
         <p>{unPerrito.weigth}</p>
         <p>{unPerrito.life_span}</p>
         <p>{unPerrito.temperament}</p>
        </div>
     
     </div>
     
    </div>
  )
}

export default Detalle