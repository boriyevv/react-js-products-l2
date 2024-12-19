import React from 'react'
import products from '../data/products.json'
import { Link, useLocation, useParams } from 'react-router-dom'

function Details() {
   const params = useParams()
   const location = useLocation()

   // console.log(location)
   // console.log(params)

   const {productId} = params
   console.log(productId)

   const product = products.find((p)=>p.id == productId)
   console.log(product)

  return (
    <div>
      <Link to='/products'>Back to products</Link>
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <p>{product.company}</p>
    </div>
  )
}

export default Details
