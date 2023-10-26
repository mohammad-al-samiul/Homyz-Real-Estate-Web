/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useCart from '../../Pages/Hooks/useCart';
import { AuthContext } from '../../Providers/AuthProvider';

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  //console.log(_id);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useContext(AuthContext);
  const handleAddProduct = (item) => {
    //console.log('item Id : ', item._id);
    if (user && user?.email) {
      const OrderItem = { menuItemId: item?._id, name, image, price, email: user?.email };
      console.log(OrderItem);
      fetch(`https://regal-dragon-restaurant-server.vercel.app/carts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(OrderItem)
      })
        .then((res) => res.json())
        .then((data) => {
          //  console.log(data);
          if (data.insertedId) {
            refetch(); //to update cart length
            toast.success('Product Added Successfully');
          }
        });
    } else {
      Swal.fire({
        title: 'Please login to order the Food',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-black absolute right-0 text-white font-bold px-4 py-1">${price}</p>
      <div className="card-body flex  items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div onClick={() => handleAddProduct(item)} className="card-actions justify-end">
          <button className="mt-3 mb-10 btn btn-outline-secondary font-bold  border-0 border-b-4 border-yellow-500 hover:border-b-4 hover:border-slate-800">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
