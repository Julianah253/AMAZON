import React from 'react'
import './nav.css'
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <>
        <nav className='nav'>
            <div className="container container-nav">
                <ul>
                    <li className='border-white'>
                        <span className="open-slider">
                            <MenuIcon/><p>All</p> 
                        </span> 
                    </li>
                    <li className='border-white'><a href="#">Today's Deals</a></li>
                    <li className='border-white'><a href="#">Customer Service</a></li>
                    <li className='border-white'><a href="#">Registry</a></li>
                    <li className='border-white'><a href="#">Gift Card</a></li>
                    <li className='border-white'><a href="#">Sell</a></li>
                </ul>
                
                    
               
            </div>
                <div className="great-deals"> 
                    <a className='border-white' href="#">Shop great deals now</a>
                </div>
        </nav>
    </>
  )
}

export default Nav