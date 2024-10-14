import React from "react";
import './ProductCard.css';
import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
          return (
            <Link to={`/product/${product.id}`}>
             <div className="productCard">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Price: </strong> RS {product.price}</p>
                    <button className="addtocart_btn">Add to Cart</button>

             </div>
             </Link>
          )
}

export default ProductCard;