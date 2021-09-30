import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

const Shop = (props) => {
  
  const products = props.product;
  console.log(products.length);
  for(let i=0; i<products.length; i++){
    console.log(products[i].name);
  }
  
  const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="products">

     {
       products.map(product => 
        <div className="product">
          <h4>"<span className="book-name">{product.name}</span>"</h4>          
          <img src={product.img} alt="" />
          <p>Auther: {product.auther}</p>
          <p>Total Page: {product.page}</p>
          <p>Price: {product.price}</p>
          <button className="btn-regular" onClick={()=> props.handleAddToCart(props.product)}>{element} Add to Cart</button>
        </div>        
       )
     }
         
           

            
        </div>
    );
};

export default Shop;