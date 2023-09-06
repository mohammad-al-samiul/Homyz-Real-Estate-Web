/* eslint-disable react/prop-types */
import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ menuImage, title }) => {
  return (
    <div>
      <Parallax blur={{ min: -15, max: 15 }} bgImage={menuImage} bgImageAlt="" strength={-200}>
        <div className=" hero lg:h-[600px] text-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel rerum amet
                excepturi, nobis provident iusto magnam facere vitae quo.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
