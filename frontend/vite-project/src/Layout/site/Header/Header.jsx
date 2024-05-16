import React from 'react'
import Home from '../../../../../../../rout_exp/routing/src/Pages/site/Home/Home'
import Shop from '../../../../../../../rout_exp/routing/src/Pages/site/Shop/Shop'
import Details from '../../../../../../../rout_exp/routing/src/Pages/site/Details/Details'
import AddProducts from '../../../../../../../rout_exp/routing/src/Pages/admin/AddProducts/AddProducts'
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
  return (
    <header>
      <div className="header_top">
         <div className="header_top_left">
         <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <input type="search" name="" id=""  placeholder='Search' />
         </div>
         <div className="header_top_middle">
          <button>SHOPPERS</button>
         </div>
         <div className="header_top_right">
          <li><i className="fa-regular fa-user"></i></li>
          <li><i className="fa-regular fa-heart"></i></li>
          <li><i className="fa-solid fa-cart-shopping"></i></li>
         </div>
      </div>

      <div className="header_bottom">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='shop'>Shop</Link></li>
          <li><Link to='details'>Details</Link></li>
          <li><Link to='/admin'>AddProducts</Link></li>
          <li><Link>Catalogue</Link></li>
          <li><Link>About</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
