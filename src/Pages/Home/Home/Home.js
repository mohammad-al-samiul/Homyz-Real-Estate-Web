import React from 'react';
import { Helmet } from 'react-helmet-async';
import CheckMenu from '../../CheckMenu/CheckMenu';
import PopularMenu from '../../PopularMenu/PopularMenu';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Regal Dragon | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <PopularMenu />
      <CheckMenu />
      <Testimonial />
    </div>
  );
};

export default Home;
