import React from 'react';
import '../Components/Product.css';
import { useStateValue } from './StateProvider';

import products from '../data';


function Product({id, title, price,rating, image}) {
    const [, dispatch] = useStateValue(); // Access cart from the state

  const addToCart = () => {
    dispatch({
        type: 'ADD_TO_CART',
        item: {
          id: id,
          title: title,
          price: price,
          rating: rating, 
          image: image,   
        },
      });    
  };


  return (
    <div className='products_item'>
        {products.map(product => (
            <div className='content-wrap' key={product.id}>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>{product.rating}</p>
                <img src={product.image} alt='' width={360}/>
                <div className='button-container'>
                <button type='button' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            

        ))}
    </div>
  )
}

export default Product