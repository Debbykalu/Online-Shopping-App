import React from 'react';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat 
            textRender = {((value) => (
                <>
                <p>Subtotal (0 item): <strong>$0</strong></p>
                <small className='subtotal_gift'>
                    <input type='checkbox'/> This order contain a gift.
                </small>
                </>
            ))}
            decimalScale={2}
            value={0}
            displayType='text'
            thousandSeparator= {true}
        />
    </div>
  )
}

export default Subtotal