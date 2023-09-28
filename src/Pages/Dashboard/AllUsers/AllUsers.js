/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa6';

const AllUsers = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(`http://localhost:5000/users`).then((res) => res.json())
  });

  const handleMakeAdmin = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <div className="lg:w-full p-10 ">
      <Helmet>
        <title>Regal Dragon | All Users</title>
      </Helmet>
      <h3 className="text-2xl font-bold text-center">Total Users : {users?.length}</h3>
      <div className="my-4 overflow-x-auto shadow-lg rounded">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {' '}
                  {user?.role == 'admin' ? (
                    'admin'
                  ) : (
                    <>
                      <button
                        onClick={() => handleMakeAdmin(user?._id)}
                        className="text-white bg-orange-400 btn hover:bg-orange-400 rounded">
                        <FaUserShield></FaUserShield>
                      </button>
                    </>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="btn hover:bg-red-600 text-white bg-red-600 rounded">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
