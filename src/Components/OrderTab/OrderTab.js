/* eslint-disable react/prop-types */
import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;