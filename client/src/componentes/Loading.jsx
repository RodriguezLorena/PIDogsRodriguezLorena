import React from 'react'
import styles from "../componentes/styles/Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loading}>
        <h2 className={styles.title}>Estamos Cargando los datos...</h2>
        <p className={styles.span}>Pequeños peluditos en camino</p>
        
    </div>
  )
}

export default Loading