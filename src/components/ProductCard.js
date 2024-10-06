import React from "react";
import './ProductCard.css';


const ProductCard = ({product}) => {
          return (
             <div className="productCard">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Price: </strong> RS {product.price}</p>
                    <button className="addtocart_btn">Add to Cart</button>

             </div>
          )
}

export default ProductCard;