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
    <div className="mt-5">
      <h1 className="ml-8 text-3xl font-bold mb-5">Hi, Welcome Back!</h1>
      <div className="flex justify-center ">
        <Stats adminStats={adminStats} />
      </div>
      <div className="mt-10">
        <div>
          <BarCharts orderStats={orderStats} />
        </div>
        <div>
          <PieCharts orderStats={orderStats} />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
