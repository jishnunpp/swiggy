import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartBold } from "react-icons/pi";
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <img src='data:image/jpeg;base64,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' alt='logow' />
            <ul>
                <li>others</li>
                <li ><IoIosArrowDown className='logo-arrow'/></li>
            </ul>

        </div>
        <div className='header-menu'>
        <ul>
                <li> <span><HiOutlineComputerDesktop  className='menu-icon'/></span> <span>Swiggy corporate</span></li>
                <li> <span ><IoSearch  className='menu-icon'/></span> <span>Search</span></li>
                <li> <span><BiSolidOffer  className='menu-icon'/></span> <span>Offers</span></li>
                <li> <span ><IoMdHelpCircleOutline  className='menu-icon'/></span> <span>Help</span></li>
                <li> <span ><CgProfile  className='menu-icon'/></span> <span>Signin</span></li>
                <li> <span ><PiShoppingCartBold  className='menu-icon'/></span> <span>Cart</span></li>
                
            </ul>            
        </div>
    </div>
  )
}

export default Header