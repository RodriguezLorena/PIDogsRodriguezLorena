import {Fragment } from 'react'
import Card from './Card'

const Cards = ({listDogs}) => {

    return (
        <Fragment>
            {
                listDogs && listDogs.map((element)=>{
                    return(
                            <div key={element.id}>
                                <Card name={element.name} image={element.image} id={element.id}/>
                            </div>
                    ) 
                })
            }
        </Fragment>
  )
}

export default Cards