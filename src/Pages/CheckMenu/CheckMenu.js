import React from 'react';
import featureImage from '../../Assets/home/featured.jpg';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import './CheckMenu.css';

const CheckMenu = () => {
  return (
    <div className="feature-menu bg-cover bg-center bg-no-repeat">
      <div className="pt-5 text-slate-600">
        <SectionTitle heading={'From Our Menu'} subHeading={'Check it Out'}></SectionTitle>
      </div>
      <div className="lg:flex justify-center items-center lg:p-20  lg:space-x-7 ">
        <img className="lg:w-[600px] " src={featureImage} alt="" />
        <div className="text-white bg-black bg-opacity-50 lg:p-6 py-6 px-4">
          <h4>September 5, 2023</h4>
          <p className="uppercase">Where can i get some ?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi accusantium nemo modi
            impedit a quae sed maiores facere. Perspiciatis officia dicta error tenetur nobis
            praesentium, soluta optio itaque natus dolorum, earum labore?
          </p>
          <button className="mt-6 text-white btn btn-outline hover:bg-white hover:text-black font-bold border-0 border-b-4 border-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckMenu;
