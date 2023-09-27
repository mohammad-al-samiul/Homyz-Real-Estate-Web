import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';

const MyCart = () => {
  const [cart] = useCart();
  // console.log(cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <div className="text-2xl font bond flex justify-around">
        <h3>Total item : ${cart?.length}</h3>
        <h3>Total price : ${total}</h3>
        <button className="btn btn-sm btn-warning text-white">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
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
                <th>{item.price}</th>
                <th>
                  <button className="btn btn-xs rounded-lg bg-orange-400 text-white hover:bg-orange-400 hover:text-white">
                    <FaEdit></FaEdit>
                  </button>
                </th>
                <th>
                  <button className="btn  btn-xs rounded-lg bg-red-600 text-white hover:bg-red-600 hover:text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
