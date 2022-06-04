import React from 'react'
import styles from "./styles/Card.module.css"
import { Link } from 'react-router-dom'


const Card = ({ name, image,}) => {
  
    
  return (
    
    <div className={styles.card}>
       <img className={styles.img} src={image} alt={name}/>
        <div className={styles.container}>
         <h4 className={styles.title}>{name}</h4>
        </div>
     </div>
     
  )
}

export default Card