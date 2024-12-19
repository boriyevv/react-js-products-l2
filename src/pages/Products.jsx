import React from 'react'
import products from '../data/products.json'
import Product from '../components/Product'

function Products() {
  return (
    <div>
      <Product product={products[0]}/>
      <Product product={products[1]}/>
      <Product product={products[2]}/>
      <Product product={products[3]}/>
      <Product product={products[4]}/>
      <Product product={products[5]}/>
    </div>
  )
}

export default Products
