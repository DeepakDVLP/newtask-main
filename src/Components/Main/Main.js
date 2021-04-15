import React from 'react';
import './Main.css';
import Banner from '../../assets/Dp.JPG';
import { FaUserCircle, FaRupeeSign } from 'react-icons/fa';
import { AiOutlineCalendar, AiOutlineLike ,AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { MdTimeline ,MdKeyboardArrowUp} from 'react-icons/md';
import { Link } from 'react-router-dom';
 import Chart from '../Chart/Chart';
 import PyeChart from '../Chart/PyeChart';

const Main = () => {
  return (
    <main>
      <div className='main__container'>
        <div className='main__title'>
         
          <div className='main__greeting'>
            <h1 >Call Metrics</h1>
        
          </div>
        </div>

        <div className='main__cards'>
          <div className='card__box box_1 d-flex'>
            <div className ="card-left">
              <div className ="card-left-icon">
              <AiOutlineShoppingCart className='fa-2x text-white' size={25} />
              </div>
              <p className='text-white'>Orders</p>
            </div>
            
            <div className='card__inner'>
              <div className="p-0 m-0">
              <p className='text-white title p-0 m-0'>690</p>
              <p className='text-white  sub-title'>New</p>
              </div>
              <p className='text-white'>6,00,00</p>
            </div>
          </div>

          <div className='card__box box_2'>
          <div className ="card-left">
               <div className ="card-left-icon">
              <AiOutlineUser className='fa-2x text-white' size={25} />
              </div>
              <p className='text-white'>Clients</p>
            </div>
            <div className='card__inner'>
            <div className="p-0 m-0">
              <p className='text-white title p-0 m-0'>1885</p>
              <p className='text-white  sub-title'>New</p>
              </div>
              <p className='text-white'>1,12,900</p>
            </div>
          </div>

          <div className='card__box box_3'>
          <div className ="card-left">
               <div className ="card-left-icon">
              <MdTimeline className='fa-2x text-white' size={25} />
              </div>
              <p className='text-white'>Sales</p>
            </div>
            <div className='card__inner'>
              <div className="p-0 m-0">          
              <p className='text-white title p-0 m-0' >80%</p>
              <p className='text-white sub-title'>Growth</p>
              </div>
              <p className='text-white'>3,42,230</p>
            </div>
          </div>
       

          <div className='card__box box_4 '>
          <div  className ="card-left">
               <div className ="card-left-icon">
              <BiDollar className='fa-2x text-white' size={25} />
              </div>
              <p className='text-white'>Profit</p>
            </div>
            <div className='card__inner'>
            <div className="p-0 m-0">    
              <p className='text-white title p-0 m-0'>$890</p>
              <p className='text-white  sub-title'>Today</p>
              </div>
              <p className='text-white'>$25,000</p>
            </div>
          </div>
        </div>
        <div className='charts'>
          <div className='charts__left'>
            <div className='charts__left--title'>
             
                <h5>REVENUE FOR 2020 <span className="header-span"> <MdKeyboardArrowUp/>15.58%</span></h5> 
                <Link className="details-button ml-auto text-white font-weight-bold">
                Details
                </Link>
             
            
            </div>
            <Chart />
          </div>

          <div className='charts__right'>
          
              <h3>Earning </h3>
              <p>Mon 15 - Sun 21</p>
           


            <div className='charts__right--cards'>
                  <h1>$ 899</h1>
            </div>
          </div>
        </div>
        <div className='PyeChart'>
          
          <PyeChart />
     
        </div>
        <footer>
        <p>© 2020 <Link> DATASCIENCX </Link>  All rights reserved</p>
      </footer>
      </div>
     
    </main>
  );
};

export default Main;
