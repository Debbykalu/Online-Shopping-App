import React from 'react';
import '../Components/Product.css';


function Product({products}) {
  return (
    <div className='products_item'>
        {products.map(product => (
            <div className='content-wrap' key={product.id}>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <p>{product.rating}</p>
                <img src={product.image} alt='' width={360}/>
                <div className='button-container'>
                <button type='button'>Add to Cart</button>
                </div>
            </div>
            

        ))}
    </div>
  )
}

export default Product