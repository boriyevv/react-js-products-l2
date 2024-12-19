import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <div>
      <h2>{product.name}</h2>
      <Link to={`/products/${product.id}`}>Learn more</Link>
    </div>
  )
}

export default Product
