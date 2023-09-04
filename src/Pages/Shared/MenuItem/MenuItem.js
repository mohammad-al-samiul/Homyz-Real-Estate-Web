/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex space-x-5 ">
      <img style={{ borderRadius: '0px 200px 200px 200px' }} width={'120px'} src={image} alt="" />
      <div>
        <h3> {name} ----------- </h3>
        <p>{recipe}</p>
      </div>
      <h3 className="text-yellow-600">${price}</h3>
    </div>
  );
};

export default MenuItem;
