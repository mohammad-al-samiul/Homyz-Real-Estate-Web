/* eslint-disable react/prop-types */
import React from 'react';
import product1 from '../../Assets/adminIcon/chef1.svg';
import customer1 from '../../Assets/adminIcon/customer1.svg';
import order1 from '../../Assets/adminIcon/truck1.svg';
import wallet1 from '../../Assets/adminIcon/wallet1.svg';
import './Stats.css';

const Stats = ({ adminStats }) => {
  const data = [
    {
      _id: 1,
      background: 'bg-gradient-to-r from-purple-600 to-purple-200',
      total: adminStats?.customer,
      name: 'Customer',
      icon: customer1
    },
    {
      _id: 2,
      background: 'bg-gradient-to-r from-yellow-500 to-yellow-200',
      total: adminStats?.order,
      name: 'Order',
      icon: order1
    },
    {
      _id: 3,
      background: 'bg-gradient-to-r from-pink-500 to-pink-200',
      total: adminStats?.product,
      name: 'Product',
      icon: product1
    },
    {
      _id: 4,
      background: 'bg-gradient-to-r from-blue-400 to-blue-200',
      total: adminStats?.revenue,
      name: 'Revenue',
      icon: wallet1
    }
  ];

  return (
    <>
      {data &&
        data?.map((item) => (
          <div
            key={item._id}
            className={`${item.background} w-full flex justify-center items-center rounded-xl stat`}>
            <img src={item.icon} alt="" />
            <div>
              <div className="stat-title text-2xl text-white font-bold">{item.name}</div>
              <div className="stat-value text-3xl text-white font-bold">{item.total}</div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Stats;
