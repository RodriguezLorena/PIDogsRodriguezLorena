import React from 'react'
import styles from "./styles/Card.module.css"
import { Link } from 'react-router-dom'


const Card = ({ name, image, id, temperament, weight}) => {
  
    
  return (
    
    <div className={styles.card} key={id}>
      <Link to={`/detalle/${id}`}>
       <img className={styles.img} src={image} alt={name}/>
        <div className={styles.container}>
         <h4 className={styles.title}>{name}</h4>
         <p>{temperament}</p>
         <p>{weight}</p>
        </div>
        </Link>
     </div>
     
     
  )
}

export default Card