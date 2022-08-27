import React from 'react'
import styles from "./styles/Card.module.css"
import { Link } from 'react-router-dom'


const Card = ({ name, image, id, temperament, weight}) => {
  
    
  return (
    
    <div className={styles.cardConten}>
      <Link className={styles.link}  to={`/detalle/${id}`}>
        <div>
             <img className={styles.img}  src={image} alt={name}/>
        </div>
      
        <div >
         <h4 className={styles.nombre}>{name}</h4>
         <p className={styles.temperamento}>{temperament}</p><br/>
         <p className={styles.temperamento}>{weight}</p>
        </div>
        </Link>
     </div>
     
     
  )
}

export default Card