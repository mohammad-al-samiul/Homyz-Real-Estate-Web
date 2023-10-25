import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Providers/AuthProvider';

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);

  const { data: paymentData = [], isLoading } = useQuery({
    queryKey: ['payment-history', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/payment-history?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('access-token')}`
        }
      });
      return res.json();
    }
  });
  if (isLoading) {
    return;
  }

  const { menu } = paymentData;

  const total = menu.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div>
      <Helmet>
        <title>Regal Dragon | Payment History</title>
      </Helmet>
      <div className="p-5 shadow-lg rounded-lg">
        <div className="text-2xl font-bold lg:flex justify-around  mb-10">
          <h3>Total item : {menu?.length}</h3>
          <h3>Total price : ${total.toFixed(2)}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="table-xs lg:table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.menu.map((item, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <th>{item.name}</th>
                  <th>{item.count}</th>
                  <th>{item.price}</th>

                  <th>
                    {' '}
                    <button className="btn btn-sm btn-success text-white">Paid</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
