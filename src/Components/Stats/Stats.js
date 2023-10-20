/* eslint-disable react/prop-types */
import React from 'react';
import './Stats.css';

const Stats = ({ adminStats }) => {
  //console.log(adminStats);
  console.log(adminStats.customer);
  const colors = [
    {
      _id: 1,
      background: 'bg-gradient-to-r from-purple-600 to-purple-200',
      customer: adminStats?.customer
    },
    {
      _id: 2,
      background: 'bg-gradient-to-r from-yellow-500 to-yellow-200',
      order: adminStats?.order
    },
    {
      _id: 3,
      background: 'bg-gradient-to-r from-pink-500 to-pink-200',
      product: adminStats?.product
    },
    {
      _id: 4,
      background: 'bg-gradient-to-r from-blue-400 to-blue-200',
      revenue: adminStats?.revenue
    }
  ];

  console.log(colors);
  return (
    <div>
      {colors.map((color) => (
        <div key={color._id} className={`stats ${color.background} ml-3`}>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
