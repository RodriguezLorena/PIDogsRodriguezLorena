import {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { traerLosPerritos} from "../redux/actions"
function Home(){
    const dispatch= useDispatch()
    const perritos= useSelector(state=>state.perritos)


    useEffect(()=>{
        dispatch(traerLosPerritos())
        }, [dispatch])
        
        return(
            <div>
                {
                    perritos && perritos.map(e=>{
                        return (
                        <div key={e.id}>
                            <h3>{e.name}</h3>
                            <img src={e.image} alt={e.name}/>
                        </div>
                        )
                    })
                }
                
            </div>
        )
}

export default Home;