/* eslint-disable no-undef */
import React from 'react';
import {
  FaHamburger,
  FaHome,
  FaShopify,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Pages/Hooks/useAdmin';

const DashboardLayout = () => {
  const [admin, isAdminLoading] = useAdmin();
  if (isAdminLoading) {
    return <div>loading...</div>;
  }
  const isAdmin = admin.admin;

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label
            htmlFor="my-drawer-2"
            tabIndex={0}
            className="btn btn-lg btn-ghost drawer-button lg:hidden">
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
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full  text-base-content bg-[#D1A054]">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={'admin-home'}>
                    <FaHome></FaHome> <span className="mt-1">Admin Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/add-item'}>
                    <FaUtensils></FaUtensils> <span className="mt-1">Add Item</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/manage-item'}>
                    <FaHamburger></FaHamburger> <span className="mt-1">Managd Items</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/all-users'}>
                    <FaUsers></FaUsers> <span className="mt-1"> All Users</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to={'/dashboard/my-cart'}>
                    <FaShoppingCart></FaShoppingCart> <span className="mt-1"> My Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/payment-history'}>
                    <FaWallet></FaWallet> <span className="mt-1">Payment History</span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to={'/home'}>
                <FaHome></FaHome> <span className="mt-1"> Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/menu'}>
                <FaHamburger></FaHamburger> <span className="mt-1"> Our Menu</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/order'}>
                <FaShopify></FaShopify> <span className="mt-1"> Order Food</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
