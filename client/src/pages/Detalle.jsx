
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from "react-router-dom"
import { useEffect } from 'react'
import { detallePerrito, deletePerrito} from '../redux/actions'
import styles from "./styles/Detalle.module.css"



const Detalle = () => {
  const {id}=useParams()
  console.log(id)

  const unPerrito= useSelector((state)=>state.unPerrito) 
 
 
  const dispatch= useDispatch()
 

  useEffect(()=>{
     dispatch(detallePerrito(id))
     dispatch(deletePerrito()) 
  }, [dispatch, id])
  
  return(
     <div className={styles.contentGral}>
     <div><Link to="/home">volver</Link></div>
    <div className={styles.contentCard}>
    <div className={styles.contentCardInner}>
      <div className={styles.contentCardFront}>
        <img className={styles.img} src={unPerrito.image} alt={unPerrito.name}/>
      </div>
      <div className={styles.ContentCardBack}>
        <h4>{unPerrito.name}</h4> 
          <p>{unPerrito.height}</p>
          <p>{unPerrito.weight}</p>
          <p>{unPerrito.life_span}</p>
          <p>{unPerrito.temperament}</p>
      </div>
    </div>
  </div>
     
 </div>
   
  
  )
}

export default Detalle