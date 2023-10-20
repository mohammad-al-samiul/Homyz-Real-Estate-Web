import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Stats from '../../../Components/Stats/Stats';

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
  //console.log(adminStats);
  return (
    <div className="mt-5">
      <h1 className="ml-8 text-3xl font-bold mb-5">Hi, Welcome Back!</h1>
      <div className="flex justify-center ">
        <Stats adminStats={adminStats} />
      </div>
    </div>
  );
};

export default AdminHome;
