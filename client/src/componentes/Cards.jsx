import {Fragment } from 'react'
import Card from './Card'
import styles from "./styles/Card.module.css"

const Cards = ({listDogs}) => {

    return (
        <div className={styles.contenedor}>
            {
                listDogs && listDogs.map((element)=>{
                    return(
                            <div key={element.id}>
                                <Card name={element.name} image={element.image} id={element.id} temperament={element.temperament} weight={element.weight}/>
                            </div>
                    ) 
                })
            }
        </div>
  )
}

export default Cards