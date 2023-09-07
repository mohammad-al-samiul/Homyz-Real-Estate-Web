/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImage from '../../../Assets/shop/banner2.jpg';
import Cover from '../../../Components/Cover/Cover';
import OrderTab from '../../../Components/OrderTab/OrderTab';
import useMenu from '../../Hooks/useMenu';

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === 'dessert');

  const soups = menu.filter((item) => item.category === 'soup');
  const salads = menu.filter((item) => item.category === 'salad');
  const pizzas = menu.filter((item) => item.category === 'pizza');
  const drinks = menu.filter((item) => item.category === 'drinks');
  return (
    <div>
      <Helmet>
        <title>Regal Dragon | Order</title>
      </Helmet>
      <Cover menuImage={coverImage} title={`Order Food`} />
      <div className="mt-10 text-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
