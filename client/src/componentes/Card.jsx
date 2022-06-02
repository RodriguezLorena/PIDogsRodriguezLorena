import React from 'react'
import styles from "./styles/Card.module.css"

const Card = ({ name, image}) => {
   
    
  return (
    <div className={styles.card}>
       <img className={styles.img} src={image} alt={name}/>
        <div className={styles.container}>
         <h4>{name}</h4>
        </div>
     </div>
  )
}

export default Card