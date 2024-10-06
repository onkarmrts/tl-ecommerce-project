import React, { useState } from 'react';
import ProductCard from './ProductCard';
import productData from '../data';


const ProductList = () => {

          // const [products, setProducts] = useState('');

          // const filerProducts = () => {

          // }
          return (
                    <div>
                              <div>
                                        {productData.map(product => (
                                                  <ProductCard key={product.id} product={product}/>
                                        ))

                                      }
                                      

                              </div>
                    </div>
          )
}


export default ProductList;