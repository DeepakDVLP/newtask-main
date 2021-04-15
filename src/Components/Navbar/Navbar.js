import React from 'react';
import './Navbar.css';
import avatar from '../../assets/pic.png';
import { FaBars } from 'react-icons/fa';
// import {AiOutlineSearch} from 'react-icons/go';
import {AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import { ImIndentIncrease } from 'react-icons/im';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='nav_icon' onClick={() => openSidebar()}>
          <FaBars className='toggle--btn' />
        </div>
        {/* <div className='navbar__left'>
          <Link to='#'>Subscribers</Link>
          <Link to='#'>Bank Mangement</Link>
          <Link to='#' className='active_link'>
            Admin
          </Link>
        </div> */}
        <div className='navbar__right'>
          <Link to='#'>
            <AiOutlineSearch className='right--icon' />
          </Link>
          <Link to='#'>
            <AiOutlineBell className='right--icon' />
          </Link>
          <Link to='#'>
            <FaUserCircle className='right--icon' />
          </Link>
          <Link to='#'>
            <ImIndentIncrease className='right--icon' />
          </Link>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
