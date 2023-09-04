import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        const popularItem = data.filter((item) => item.category === 'popular');
        setMenu(popularItem);
      });
  }, []);

  return (
    <div className="my-20 ">
      <SectionTitle subHeading={'Check it Out'} heading={'From Our Menu'}></SectionTitle>
      <div className="grid lg:grid-cols-2 gap-4 lg:mx-20">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
