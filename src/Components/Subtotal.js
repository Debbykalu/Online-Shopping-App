import React from 'react';
import '../Components/Checkoutproduct.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './Reducer';

function Subtotal() {
  const[{cart}] = useStateValue();
  return (
    <div className='subtotal'>
       <CurrencyFormat 
        renderText={(value) =>(
            <>
                <p>
                    Subtotal({cart.length} item):
                    <strong>${value}</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox" /> this order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
       />
       <div className='button-container'>
       <button>Proceed to checkout</button>
       </div>
    </div>
  )
}

export default Subtotal