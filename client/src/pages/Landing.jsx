import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles/Landing.module.css"


const Landing = () => {
  return (
    
      <div className={styles.Landing}>
         <h1 className={styles.Titulo}>Bienvenidos a Huellita</h1>
         <span className={styles.span}>Un proyecto hecho con mucho mate y amor</span>
        <div className={styles.btnConten}>
        <Link to='/home' className={styles.Boton}>Ir a Casa</Link>
        </div>
        
      
        
     
    </div>
  )
}

export default Landing