/* eslint-disable no-undef */
import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const imgBB_token = process.env.REACT_APP_imgKey;
const AddItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const imgbb_URL = `https://api.imgbb.com/1/upload?key=${imgBB_token}`;
  const onSubmit = (data) => {
    //console.log(data);
    const formData = new FormData();
    formData.append('image', data.itemFile[0]);
    fetch(`${imgbb_URL}`, {
      method: 'POST',
      body: formData
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imgURL = imgData.data.display_url;
          const { recipeName, category, price, recipeDetails } = data;
          const menuItem = {
            recipeName,
            category,
            price: parseFloat(price),
            recipeDetails,
            image: imgURL
          };
          console.log(menuItem);
          reset();
        }
      });
  };
  //console.log(errors);
  //console.log(imgBB_token);

  return (
    <div className="">
      <div>
        <SectionTitle subHeading={`What's New ?`} heading={`Add an Item`}></SectionTitle>
        <div className="mx-5 bg-[#F3F3F3] p-10 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Recipe Name</span>
              </label>
              <input
                {...register('recipeName', { required: 'Recipe Name is required' })}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full "
              />
            </div>
            {errors.recipeName && <p className="text-red-600">{errors.recipeName.message}</p>}
            <div className="flex">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <select
                  {...register('category', { required: 'Category is required' })}
                  className="select select-bordered">
                  <option disabled>Pick one</option>
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soups</option>
                  <option>Desserts</option>
                  <option>Drinks</option>
                </select>
              </div>
              {errors.category && <p className="text-red-600">{errors.category.message}</p>}

              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  {...register('price', { required: 'Price is required' })}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
                {errors.price && <p className="text-red-600">{errors.price.message}</p>}
              </div>
            </div>
            <div className="flex justify-end"></div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Recipe Details</span>
              </label>
              <textarea
                {...register('recipeDetails', { required: 'Recipe Details is required' })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"></textarea>
            </div>
            {errors.recipeDetails && <p className="text-red-600">{errors.recipeDetails.message}</p>}
            <div className="form-control w-full max-w-xs mt-3">
              <label className="label">
                <span className="label-text font-bold">Item Image</span>
              </label>
              <input
                {...register('itemFile', { required: 'Item Image is required' })}
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
            {errors.itemFile && <p className="text-red-600">{errors.itemFile.message}</p>}

            <input
              className="mt-4 text-white btn btn-sm bg-orange-400 hover:bg-orange-400"
              type="submit"
              value="Add Item"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
