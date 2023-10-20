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

  console.log(data);
  return (
    <div>
      {data &&
        data?.map((item) => (
          <div key={item._id} className={`stats ${item.background} ml-3`}>
            <div className="">
              <div className="flex items-center justify-center h-32">
                <img src={item.icon} alt="" />
                <div className="ml-3">
                  <p className="text-white font-bold text-2xl text-center">{item.total}</p>
                  <p className="text-white font-bold text-2xl">{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Stats;
