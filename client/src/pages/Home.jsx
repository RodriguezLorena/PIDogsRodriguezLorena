import {useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { traerLosPerritos} from "../redux/actions"

function Home(){
    const dispatch= useDispatch()  //activa una accion
    const perritos= useSelector(state=>state.perritos)  //trae un estado con sus datos


    useEffect(()=>{  //trabaja con el ciclo de vida de un componente
        dispatch(traerLosPerritos())  //dispara una accion
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