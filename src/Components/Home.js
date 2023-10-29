import React from 'react';
import '../Components/Home.css'
import Product from './Product';
import products from '../data';
function Home() {
  return (
    <div className='home_container'>
        <div className='home_items_rows'>
            <Product products={products}/>
        </div>
       
        
    </div>
  )
}

export default Home