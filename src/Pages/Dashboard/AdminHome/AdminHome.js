import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Stats from '../../../Components/Stats/Stats';
import BarCharts from './BarCharts';
import PieCharts from './PieCharts';

const AdminHome = () => {
  const { data: adminStats = [] } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/admin-stats`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.json();
    }
  });

  const { data: orderStats = [] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/order-stats`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.json();
    }
  });
  //console.log(adminStats);
  return (
    <div className="">
      <h1 className="lg:ml-8 text-3xl font-bold mb-5 text-center mt-10">Hi, Welcome Back!</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
        <Stats adminStats={adminStats} />
      </div>
      <div className="mt-10 lg:flex">
        <div className="w-1/2">
          <BarCharts orderStats={orderStats} />
        </div>
        <div className="lg:w-1/2">
          <PieCharts orderStats={orderStats} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
