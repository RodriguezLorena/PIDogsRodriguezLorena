import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles/Landing.module.css"


const Landing = () => {
  return (
    
      <div className={styles.Landing}>
         <h1 className={styles.Titulo}>Welcome to Huellita</h1>
        
         <Link to='/home' className={styles.Boton}>Ir a home</Link>
      
        
     
    </div>
  )
}

export default Landing