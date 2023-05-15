import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Nav = () => {
  return (
    <div className="header">
        <img className="border-white header-logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

        <div className="header-nav">
            <div className="border-white header-delivery">
                <span className="option_lineOne">
                  Deliver to
                </span>
                <span className="option-lineTwo">
                  <LocationOnOutlinedIcon/>
                  Nigeria
                </span>
            </div>
          </div>

        <div id="header-search">
            <div className='header-searchSelect'><select>
              <option>All</option>
            </select></div>
            <input placeholder='Search Amazon' /*size={80}*/ type="text" className="header-searchInput" />
            <div className='header-searchIcon'><SearchIcon style={{fontSize: "30px"}}/></div>
        </div>
        

        <div className="header-nav">
            <div className="border-white header-option">
                <span style={{color: "#131921"}} className="option-lineOne">
                 f
                </span>
                <span className="option-lineTwo">
                   <img  className='american-flag' src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" alt="" /> En
                </span>
            </div>

            <div className="border-white header-option">
                <span className="option-lineOne">
                  Hello, sign in
                </span>
                <span className="option-lineTwo">
                  Account & Lists
                </span>
            </div>

            <div className="border-white header-option">
                <span className="option-lineOne">
                  Returns
                </span>
                <span className="option-lineTwo">
                  & Orders
                </span>
            </div>

            <div className='border-white option-basket'>
                <ShoppingCartOutlinedIcon/>
                <span className='option-lineTwo basket-count'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Nav