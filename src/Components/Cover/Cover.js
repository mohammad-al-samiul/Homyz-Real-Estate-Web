/* eslint-disable react/prop-types */
import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({ menuImage, title, text1 }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={menuImage}
        bgImageAlt="the dog"
        strength={-200}>
        <div className=" hero h-[600px] text-white">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="py-6">{text1}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
