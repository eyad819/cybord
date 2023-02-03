import './Naviteam.css';
import React from 'react';

const NavIteam = (props) => {
  return (
  <li className='nav-iteam'>
  {props.children}
  </li>
  );
}
const NavIteamDropDown = (props) => {
  return (
  <li className='nav-iteam dropdown'>
  {props.children}
  </li>
  );
}

export default NavIteam;
export {NavIteamDropDown}