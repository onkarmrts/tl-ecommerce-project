import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productData from '../data.js';
import './ProductList.css';
import { Link } from 'react-router-dom';


const ProductList = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(productData);

  const handleSearch = (event) =>  {
      setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())
);




 
          // const filerProducts = () => {

          // }
          return (
                    <div>

                      <div className='search'>
                     <h3>Search for Products:</h3>
                      {/* <input 
                      type="text" 
                      className='searchbar'
                      value={searchTerm}
                      onChange={handleSearch}

                      /> */}

</div>
                             <ul>
                              {products.map((product) => (
                                <li key={product.id}>
                                  <Link to={`/product/${product.id}`}>
                                  {product.name} - ${product.price}
                                  </Link>
                                </li>
                              ))}
                             </ul>
                    </div>
          )
}


export default ProductList;