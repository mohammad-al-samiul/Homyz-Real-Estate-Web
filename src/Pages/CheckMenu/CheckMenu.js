import React from 'react';
import featureImage from '../../Assets/home/featured.jpg';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import './CheckMenu.css';

const CheckMenu = () => {
  return (
    <div className="feature-menu ">
      <div>
        <SectionTitle heading={'From Our Menu'} subHeading={'Check it Out'}></SectionTitle>
      </div>
      <div className="flex justify-center items-center p-20  space-x-7 ">
        <img width={'600px'} src={featureImage} alt="" />
        <div className="text-white bg-black bg-opacity-30 p-6 shadow-inner">
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
