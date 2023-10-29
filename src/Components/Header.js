import React from 'react';
import '../Components/Header.css'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className='header_section'>
            <Link to={'/'}>
              <div className='header_logo'>
                <StorefrontIcon />
                <h1 className='header-logo-title'>Online Store</h1>
              </div>
            </Link>
            <div className='header_search'>
          <input type='text' className='searchInput'/>
          <SearchIcon  className='searchBarIcon'/>
            </div>
            <div className='header_nav'>
          <div className='nav_itemNav'>
          <span>Hello</span>
          <span>Guest</span>
          </div>
          <div className='nav_itemNav'>
          <span>Your</span>
          <span>Shop</span>
          </div>
          <Link to='/checkout' style={{textDecoration:'none'}}>
          <div className='nav_itemNav'>
            <div className='ourBasket'>
            <ShoppingBasketIcon  className='itemsBasket'/>
            <span className='basketCount'>0</span>
            </div>
          </div>
          </Link>
            </div>

        </div>
    </div>
  )
}

export default Header
