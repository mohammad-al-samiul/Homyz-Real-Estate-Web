/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(`http://localhost:5000/users`).then((res) => res.json())
  });
  return (
    <div>
      <h1> {users?.length}</h1>
    </div>
  );
};

export default AllUsers;
