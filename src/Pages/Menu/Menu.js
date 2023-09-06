import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImage from '../../Assets/menu/banner3.jpg';
import Cover from '../../Components/Cover/Cover';
import PopularMenu from '../PopularMenu/PopularMenu';

const Menu = () => {
  const text1 = <>Would you like to try a dish?</>;
  return (
    <div>
      <Helmet>
        <title>Regal Dragon | Menu</title>
      </Helmet>
      <Cover menuImage={menuImage} title={'Our Menu'} text1={text1} />
      <PopularMenu />
      <Cover menuImage={menuImage} title={'Our Menu'} text1={text1} />
      <PopularMenu />
      <Cover menuImage={menuImage} title={'Our Menu'} text1={text1} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
