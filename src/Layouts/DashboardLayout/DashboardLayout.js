import React from 'react';
import {
  FaCalendarAlt,
  FaHamburger,
  FaHome,
  FaShopify,
  FaShoppingCart,
  FaWallet
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />

        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full  text-base-content bg-[#D1A054]">
          {/* Sidebar content here */}
          <li>
            <NavLink to={'/user-home'}>
              <FaHome></FaHome> <span className="mt-1">User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/reservation'}>
              <FaCalendarAlt></FaCalendarAlt> <span className="mt-1">Reservation</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/payment'}>
              <FaWallet></FaWallet> <span className="mt-1">Payment History</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/my-cart'}>
              <FaShoppingCart></FaShoppingCart> <span className="mt-1"> My Cart</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={'/home'}>
              <FaHome></FaHome> <span className="mt-1"> Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/home'}>
              <FaHamburger></FaHamburger> <span className="mt-1"> Our Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/home'}>
              <FaShopify></FaShopify> <span className="mt-1"> Order Food</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
