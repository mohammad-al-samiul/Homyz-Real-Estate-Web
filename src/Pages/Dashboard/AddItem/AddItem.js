/* eslint-disable no-undef */
import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="">
      <div>
        <SectionTitle subHeading={`What's New ?`} heading={`Add an Item`}></SectionTitle>
        <div className="mx-5 bg-[#F3F3F3] p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Recipe Name</span>
              </label>
              <input
                {...register('recipeName')}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full "
              />
            </div>
            <div className="flex">
              <div className="form-control w-full mr-2">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <select
                  {...register('category', { required: true })}
                  className="select select-bordered">
                  <option disabled>Pick one</option>
                  <option>Salad</option>
                  <option>Pizza</option>
                  <option>Soups</option>
                  <option>Desserts</option>
                  <option>Drinks</option>
                </select>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  {...register('price')}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Recipe Details</span>
              </label>
              <textarea
                {...register('recipeDetails')}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"></textarea>
            </div>
            <div className="mt-2">
              <input type="file" className="file-input w-full max-w-xs" />
            </div>

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
