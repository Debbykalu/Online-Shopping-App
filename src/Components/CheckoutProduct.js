import React from 'react';
import '../Components/Checkoutproduct.css'

function CheckoutProduct() {
  return (
    <div className='checkoutproduct'>
      <img src='https://uploads-ssl.webflow.com/621f43c49dec9b0ca2794276/624abe517fff1b6ed5a5f05c_E-commerce-Photo-Editing-and-Retouching-Services-1.jpg' alt='' width={360}/>
      <div className='product_info'>
        <div className='checkoutproduct_content'>
            <p className='checkoutproduct_title'>lorem</p>
            <p className='checkoutproduct_price'>$40</p>
        </div>
        <div className='button-container'>
                <button type='button'>Remove from Cart</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct