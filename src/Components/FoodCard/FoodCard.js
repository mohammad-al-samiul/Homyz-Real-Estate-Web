/* eslint-disable react/prop-types */
import React from 'react';

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;

  const handleAddProduct = (item) => {
    console.log(item);
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
