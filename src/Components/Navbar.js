import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar sticky-navbar'>
      <div className='left'>
        <NavLink to="/">
          <img src='./logo.png' alt="Logo" />
        </NavLink>
      </div>
      <div className='right'>
        <div className='nav-Link'>
          <NavLink to="/Retail" className="nav-item">Retail</NavLink>
          <div className="dropdown">
            <NavLink to="/Our-Product" className="nav-item">Our Product <FaChevronDown /></NavLink>
            <div className="dropdown-content">
              <a href="/product-category-1">Category 1</a>
              <a href="/product-category-2">Category 2</a>
              <a href="/product-category-3">Category 3</a>
            </div>
          </div>
          <NavLink to="/About-Us" className="nav-item">About Us</NavLink>
          <NavLink to="/FAQ" className="nav-item">FAQ</NavLink>
          <NavLink to="/Contact-Us" className="nav-item">Contact Us</NavLink>
          <img src='./search.png' alt="Search" style={{ width: "20px", height: "20px" }} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
