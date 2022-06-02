import { useEffect } from 'react'
import { useDispatch,  useSelector } from 'react-redux'
import { traerLosPerritos } from '../redux/actions'
import Card from './Card'




const Cards = () => {
    const dispatch= useDispatch()
    const perritos= useSelector((state)=>state.perritos) 

    useEffect(()=>{  
        dispatch(traerLosPerritos()) 
    }, [dispatch])
  
    return (
    <div>
        {
            perritos && perritos.map((element)=>{
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