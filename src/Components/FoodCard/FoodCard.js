/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const handleAddProduct = (item) => {
    console.log(item);
    if (user) {
      fetch(`http://localhost:5000/`)
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data);
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
          navigate('/login');
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
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
