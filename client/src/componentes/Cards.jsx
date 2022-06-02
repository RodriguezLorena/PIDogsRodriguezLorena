import { useEffect } from 'react'
import Card from './Card'

const Cards = ({listDogs}) => {

    return (
        <div>
            {
                listDogs && listDogs.map((element)=>{
                    return(
                            <div key={element.id}>
                                <Card name={element.name} image={element.image}/>
                            </div>
                    ) 
                })
            }
        </div>
  )
}

export default Cards