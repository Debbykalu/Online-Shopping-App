import React from 'react';
import '../Components/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
const [{cart}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left' width={800}>
            <img src='https://qodeinteractive.com/magazine/wp-content/uploads/2020/07/How-to-Add-WordPress-Widgets-to-Your-Site.jpg' alt='' width={750} height={200}/>
            <div className='checkout_title'>
                <h2>Your Shopping Items</h2>
                {cart.map((item) => (
                    <CheckoutProduct 
                        id = {item.id}
                        item = {item.title}
                        price = {item.price}
                        rating = {item.rating}
                        image = {item.image}
                    />
                ))}
                
            </div>
        </div>
        <div className='checkout-right' width={300}>
            <h2>Move it to the right</h2>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout