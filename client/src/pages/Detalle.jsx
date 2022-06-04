import React from 'react'
import { useParams } from "react-router-dom"

const Detalle = () => {
  const {productId}=useParams()
  console.log(productId)
  return (
    <div>Esta es la ruta de Detalle</div>
  )
}

export default Detalle