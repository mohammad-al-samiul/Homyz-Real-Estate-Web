import React from 'react';
import CheckMenu from '../../CheckMenu/CheckMenu';
import PopularMenu from '../../PopularMenu/PopularMenu';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <CheckMenu />
    </div>
  );
};

export default Home;
