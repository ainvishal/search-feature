import React, { useState } from 'react';
import './App.css';

export const Navbar = () => {
  const [toggle, setToggle] = useState('drop-down');

  const handleClick = () => {
    let str = toggle
    if(str.includes('open')){
      str = str.replace('open','');
      console.log(str)
      setToggle(str)
    }
    else {
      str = str + ' open';
      setToggle(str);
    }
  }
  return(
    <>
    <nav className='container'>
      <p className='nav-label'>Search Function</p>
      <li className='nav-li'>Home</li>
      <li className='nav-li'>About</li>
      <span onClick={handleClick}><i class="fa-solid fa-bars"></i></span>
    </nav>
    <div className={toggle}>
       <li className='drop-li'>Home</li>
       <li className='drop-li'>About</li>
    </div>
    </>

  );
}

