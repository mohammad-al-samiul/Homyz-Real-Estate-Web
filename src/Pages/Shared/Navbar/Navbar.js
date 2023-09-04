import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'white' : '',
      color: isActive ? 'black' : ''
    };
  };

  const navItems = (
    <>
      <li className="hover:bg-white hover:font-bold hover:rounded-lg">
        <NavLink to={'/home'} style={navLinkStyles}>
          Home
        </NavLink>
      </li>
      <li className="hover:bg-white hover:font-bold hover:rounded-lg">
        <NavLink to={'/contact-us'} style={navLinkStyles}>
          Contact
        </NavLink>
      </li>
      <li className="hover:bg-white hover:font-bold hover:rounded-lg">
        <NavLink to={'/about'} style={navLinkStyles}>
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="max-w-[1400px] navbar bg-black fixed z-10 bg-opacity-30 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Regal Dragon
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
