import React from 'react';
import '../Components/Checkoutproduct.css';

function CheckoutProduct({id, title, price, rating, image}) {
  return (
    <div className='checkoutproduct'>
      <div className='product_info' >
        <div className='checkoutproduct_content' key={id}>
            <img src={image} alt='' width={360}/>
            <p className='checkoutproduct_title'>{title}</p>
            <p className='checkoutproduct_price'>{price}</p>
            <p className='checkoutproduct_rating'>{rating}</p>
        </div>
        <div className='button-container'>
                <button type='button'>Remove from Cart</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct