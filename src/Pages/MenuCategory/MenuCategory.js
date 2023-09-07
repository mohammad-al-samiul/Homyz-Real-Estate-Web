/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="mx-auto w-32">
        <Link to={`/order/${title}`}>
          <button className="mt-3 mb-10 btn btn-outline-secondary font-bold  border-0 border-b-4 border-yellow-500 hover:border-b-4 hover:border-slate-800">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
