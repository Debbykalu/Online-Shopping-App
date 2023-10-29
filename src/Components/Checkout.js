import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img src='https://qodeinteractive.com/magazine/wp-content/uploads/2020/07/How-to-Add-WordPress-Widgets-to-Your-Site.jpg' alt='' width={750} height={200}/>
            <div className='checkout_title'>
                <h2>Your Shopping Items</h2>
                <CheckoutProduct />
            </div>
        </div>
        <div className='checkout-right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout