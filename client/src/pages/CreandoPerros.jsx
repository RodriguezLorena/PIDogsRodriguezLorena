// import React from 'react'
// import { Link } from 'react-router-dom'
// import {useState,useEffect} from "react"
// import { useDispatch } from 'react-redux'
// import actualizarNewDogs from "../redux/actions"

// const CreandoPerros = () => {
//   const dispatch= useDispatch()
//   const [newPerro, setNewPerro]= useState({
//     name:"",
//     height:0,
//     weight:"",
//     life_span:"",
//     temperaments:""
//   })
  
//   useEffect(()=>{  
//     dispatch(actualizarNewDogs()) 
   
// }, [dispatch])

// const handlerChangeInput=(e)=>{
//   setNewPerro({
//     ...newPerro,
//     [e.target.name]: e.target.value
//   })
    
// }

//   return (
//     <div>
//       <Link to="/home">Volver al Home</Link>
//       <form onSubmit={()=>handlerOnSubmit()}>
//         <div>
//          <label>
//           Name:
//           <input/>
//           </label> 
//         </div>
//         <div>
//           <label>
//             Apellido
//           <input />
//           </label> 
//         </div>
//        <div>
//         <label>
//           Altura
//           <input type="" value="" placeholder='' />
//           <input type=""/>
//         </label>
//        </div>
       
//       </form>
//     </div>
//   )
// }

// export default CreandoPerros