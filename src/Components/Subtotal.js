import React from 'react';
import '../Components/Checkoutproduct.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className='subtotal'>
       <CurrencyFormat 
        renderText={(value) =>(
            <>
                <p>
                    Subtotal(0 items):
                    <strong>$0</strong>
                </p>
                <small className="subtotal-gift">
                    <input type="checkbox" /> this order contains a gift
                </small>
            </>
        )}
        decimalScale={2}
        value={0}
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