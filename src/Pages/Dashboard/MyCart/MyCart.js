import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';

const MyCart = () => {
  const [cart, refetch] = useCart();
  // console.log(cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (item) => {
    // console.log(item);
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
        fetch(`http://localhost:5000/cart/${item._id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            //  console.log(data);
            if (data.deletedCount) {
              refetch();
              Swal.fire('Deleted!', `${item.name} has been deleted.`, 'success');
            }
          });
      }
    });
  };
  return (
    <div className="w-full p-10">
      <Helmet>
        <title>Regal Dragon | My Cart</title>
      </Helmet>
      <div className="p-5 shadow-lg rounded-lg">
        <div className="text-2xl font bond flex justify-around">
          <h3>Total item : ${cart?.length}</h3>
          <h3>Total price : ${total}</h3>
          <button disabled={total === 0}>
            <Link
              to={'/dashboard/payment'}
              className={` btn  bg-orange-400 hover:bg-orange-400 text-white `}>
              {' '}
              Pay
            </Link>
          </button>
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
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn hover:bg-red-600 text-white bg-red-500 rounded">
                      <FaTrashAlt></FaTrashAlt>
                    </button>
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

export default MyCart;
