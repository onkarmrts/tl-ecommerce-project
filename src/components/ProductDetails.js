import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = ({ products }) => {
     const { id } = useParams();
     const product = products.find((item) => item.id === parseInt(id));

     if(!product) {
          return <h2>Product Not found!</h2>
     }
  return (
      <div>
          <h1>{product.name}</h1>
          <p> <strong>Description:</strong>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
      </div>
  )
}

export default ProductDetails