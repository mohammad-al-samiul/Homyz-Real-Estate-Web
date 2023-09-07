/* eslint-disable no-unused-vars */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImage from '../../Assets/menu/banner3.jpg';
import dessertsImg from '../../Assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../Assets/menu/pizza-bg.jpg';
import saladImg from '../../Assets/menu/salad-bg.jpg';
import soupImg from '../../Assets/menu/soup-bg.jpg';
import Cover from '../../Components/Cover/Cover';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useMenu from '../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === 'dessert');

  const soup = menu.filter((item) => item.category === 'soup');
  const salad = menu.filter((item) => item.category === 'salad');
  const pizza = menu.filter((item) => item.category === 'pizza');
  const offered = menu.filter((item) => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Regal Dragon | Menu</title>
      </Helmet>
      <Cover menuImage={menuImage} title={'Our Menu'} />
      <SectionTitle heading={`Today's Offer`} subHeading={`Don't Miss`} />
      <MenuCategory items={offered} />
      <MenuCategory items={desserts} title={`desserts`} image={dessertsImg} />
      <MenuCategory items={soup} title={`soup`} image={soupImg} />
      <MenuCategory items={salad} title={`salad`} image={saladImg} />
      <MenuCategory items={pizza} title={`pizza`} image={pizzaImg} />
    </div>
  );
};

export default Menu;
