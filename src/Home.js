import React, { useState } from 'react';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import CustomerData from './Customer/Customer';
import UserData from './User/UserData';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import {IoMdAdd} from "react-icons/io"
import {AiOutlineMail,AiOutlineCalendar} from "react-icons/ai"
import {BiHelpCircle} from "react-icons/bi"

const Home = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [classActive, setClassActive] = useState('dashboard');

  const getComponent = (comp) => {
    switch (comp) {
      case 'dashboard':
        return <Main />;
      case 'users':
        return <UserData />;
      case 'customer':
        return <CustomerData />;
      default:
        break;
    }
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Fab

 
  icon={<IoMdAdd />}

  alwaysShowTitle={true}
  
>
 
  <Action>
<AiOutlineMail/>
  </Action>
  <Action>
<AiOutlineCalendar/>
  </Action>
  <Action>
  <BiHelpCircle/>
  </Action>

 
</Fab>

      <div className='home__container'>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        {/* <Main /> */}
        {getComponent(classActive)}
        <Sidebar
          sidebarOpen={sidebarOpen}
          closeSidebar={closeSidebar}
          setClassActive={setClassActive}
          classActive={classActive}
        />
      </div>
    </>
  );
};

export default Home;
