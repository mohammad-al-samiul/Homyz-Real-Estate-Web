/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const token = localStorage.getItem('access-token');
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],

    queryFn: () =>
      fetch(`http://localhost:5000/users`, {
        headers: {
          authorization: `bearer ${token}`
        }
      }).then((res) => res.json())
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
    Swal.fire({
      title: 'Are you sure?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Make Admin!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/admin/${user?._id}`, {
          method: 'PATCH'
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount) {
              Swal.fire('Admin', `${user?.name} is admin now!.`, 'success');
            }
          });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/delete/${user?._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
              Swal.fire('Deleted!', `${user?.name} has been deleted.`, 'success');
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Regal Dragon | All Users</title>
      </Helmet>
      <div className="lg:w-full lg:p-10 ">
        <h3 className="text-2xl font-bold text-center">Total Users : {users?.length}</h3>
        <div className="my-4 overflow-x-auto shadow-lg rounded lg:p-10 ">
          <table className=" table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user._id} className="hover">
                  <td>{index + 1}</td>
                  <td className="lg:w-2/12 ">{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role == 'admin' ? (
                      'admin'
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            handleMakeAdmin(user);
                          }}
                          className="text-white bg-orange-400 btn hover:bg-orange-400 rounded">
                          <FaUserShield></FaUserShield>
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn hover:bg-red-600 text-white bg-red-500 rounded">
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
    </div>
  );
};

export default AllUsers;
