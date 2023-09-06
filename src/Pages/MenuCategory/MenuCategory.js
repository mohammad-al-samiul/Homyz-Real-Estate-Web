/* eslint-disable react/prop-types */
import React from 'react';
import Cover from '../../Components/Cover/Cover';
import MenuItem from '../Shared/MenuItem/MenuItem';

const MenuCategory = ({ title, image, items }) => {
  //console.log(items);
  return (
    <div>
      {title && <Cover title={title} menuImage={image} />}

      <div className="grid lg:grid-cols-2 gap-4 lg:mx-20 mt-20">
        {items && items.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)}
      </div>
    </div>
  );
};

export default MenuCategory;
