import React from 'react'

import './Navbar.scss';
import { pages } from '../../util/pages';
// import searchIcon from '../../assets/Navbar/magnifying-glass.svg';

const Navbar = () => {
  const path = window.location.pathname
  console.log(path);
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <div className='navbar-left'>
          {/* <div className='navbar-language'>EN</div> */}
          {/* <div className='navbar-search-container'>
            <div className='navbar-search-input'>
              
            </div>
            <img src={searchIcon} className='navbar-search-icon' alt="Search icon"/>
          </div> */}
        </div>
        <div className='navbar-center'>
          <div className='navbar-title'> EMILY NGUYEN </div>
        </div>
        <div className='navbar-right'>
          {/* navbar */}
        </div>
      </div>
      
      <div className='navbar-link-container '>
        {pages.navbar.map((page) => {
          if (page.path === path) {
            return (
              <a
                href={page.path}
                className='navbar-link navbar-link-active'
              >{page.label}</a>
            )
          } else {
            return (
              <a
                href={page.path}
                className='navbar-link'
              >{page.label}</a>
            )
          }
        })}
      </div>
    </div>
  )
};
export { Navbar }
