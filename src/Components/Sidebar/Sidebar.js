import React, { useState } from 'react';
import './Sidebar.css';
import icon from '../../assets/logoicon.png';
import { FaTimes, FaUserSecret } from 'react-icons/fa';
import { AiOutlineHome, AiOutlineLogout, AiOutlineInbox } from 'react-icons/ai';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';
import { RiPriceTagLine, RiPagesLine } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';
import UserData from '../../User/UserData';
import Loan from '../../Loan/Loan';

import { API } from '../../config';
import { icons } from 'react-icons/lib';

const Sidebar = ({
  sidebarOpen,
  closeSidebar,
  setClassActive,
  classActive,
}) => {
  const history = useHistory();

  const signout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwt');
      return fetch(`${API}/signout`, {
        method: 'GET',
      })
        .then((response) => {
          console.log('signout', response);
          // window.location.reload();
          history.push('/');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__img'>
          <img src={icon} alt='avtar' />
        </div>
        <h2>DataSciencx</h2>
        <FaTimes id='sidebarIcon' onClick={() => closeSidebar()} />
      </div>
      <div className='sidebar__menu'>
        {/* <div className='sidebar__link active__menu--link'> */}
        <div
          onClick={() => setClassActive('dashboard')}
          className={
            classActive === 'dashboard'
              ? 'sidebar__link active__menu--link'
              : 'sidebar__link'
          }>
          <AiOutlineHome className='sidebar__icon' />
          <Link to='#'>Dashboard</Link>
        </div>
        <div
          className='sidebar__link'>
          <AiOutlineHome className='sidebar__icon' />
          <Link to='#'>Boost Sales</Link>
        </div>
        <div
          className='sidebar__link'>
          <AiOutlineHome className='sidebar__icon' />
          <Link to='#'>Competitor Recon</Link>
        </div>
        <div
          className='sidebar__link'>
          <AiOutlineHome className='sidebar__icon' />
          <Link to='#'>Monitor Business</Link>
        </div>
        <div
          className='sidebar__link'>
          <AiOutlineHome className='sidebar__icon' />
          <Link to='#'>Compare Business</Link>
        </div>
        <div
          className='sidebar__link'>
          <AiOutlineHome className='sidebar__icon' />
          <Link to='#'>Engage Customer</Link>
        </div>
        <h2>ACTIONABLE INTEL</h2>
        <div
          className='sidebar__link'>
          <FaUserSecret className='sidebar__icon' />
          <Link to='#'>E-Commerce</Link>
        </div>
        <div
          className='sidebar__link'>
          <FaUserSecret className='sidebar__icon' />
          <Link to='#'>Online Orders</Link>
        </div>
        <div
          className='sidebar__link'>
          <FaUserSecret className='sidebar__icon' />
          <Link to='#'>Source Recon</Link>
        </div>
        <div
          className='sidebar__link'>
          <FaUserSecret className='sidebar__icon' />
          <Link to='#'>In-Store Intel</Link>
        </div>
        <div
          className='sidebar__link'>
          <FaUserSecret className='sidebar__icon' />
          <Link to='#'>Call Metrics</Link>
        </div>
        <div
          className='sidebar__link'>
          <FaUserSecret className='sidebar__icon' />
          <Link to='#'>Chargebacks Insights</Link>
        </div>
        <h2>APPLICATIONS</h2>
        <div className= 'sidebar__link '
          >
          <RiPriceTagLine className='sidebar__icon' />
          <Link to='#'>Mail</Link>
        </div>
        <div className='sidebar__link'>
          <RiPagesLine className='sidebar__icon' />
          <Link to='#'>Mettings</Link>
        </div>
        <div className='sidebar__link'>
          <AiOutlineInbox className='sidebar__icon' />
          <Link to='#'>Chat</Link>
        </div>
        <div className= 'sidebar__link '
          >
          <RiPriceTagLine className='sidebar__icon' />
          <Link to='#'>Calender</Link>
        </div>
        <div className='sidebar__link'>
          <RiPagesLine className='sidebar__icon' />
          <Link to='#'>Goals</Link>
        </div>
        <div className='sidebar__link'>
          <AiOutlineInbox className='sidebar__icon' />
          <Link to='#'>Tasks</Link>
        </div>
        <div className= 'sidebar__link '
          >
          <RiPriceTagLine className='sidebar__icon' />
          <Link to='#'>Shared Docs</Link>
        </div>
        <div className='sidebar__link'>
          <RiPagesLine className='sidebar__icon' />
          <Link to='#'>Team Members</Link>
        </div>
        <div className='sidebar__link'>
          <AiOutlineInbox className='sidebar__icon' />
          <Link to='#'>Team Prdoductivity</Link>
        </div>
        <h2>MUsic</h2>
    
        
        <div className='sidebar__link'>
          <FiSettings className='sidebar__icon' />
          <Link to='#'>Settings</Link>
        </div>
        <div className='sidebar__link'>
          <FiHelpCircle className='sidebar__icon' />
          <Link to='#'>Documentation</Link>
        </div>
        <div className='sidebar__logout'>
          <AiOutlineLogout className='sidebar__icon' />
          <Link>Support</Link>

         
        </div>
        <div className='sidebar__logout'>
          <AiOutlineLogout className='sidebar__icon' />
          <Link>Game Zone</Link>

         
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
