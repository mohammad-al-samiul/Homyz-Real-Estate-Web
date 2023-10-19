import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdminHome = () => {
  const { data: adminStats = [] } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/admin-stats`);
      return res.json();
    }
  });
  console.log(adminStats);
  return (
    <div>
      <h1>This is Admin Home</h1>
    </div>
  );
};

export default AdminHome;
