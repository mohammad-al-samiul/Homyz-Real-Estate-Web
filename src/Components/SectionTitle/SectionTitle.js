/* eslint-disable react/prop-types */
import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-10 mx-auto text-center lg:w-1/4">
      <div>
        <p className="text-yellow-600 text-lg mb-2"> --- {subHeading} --- </p>
        <h3 className="text-4xl border-y-4 py-4 uppercase"> {heading} </h3>
      </div>
    </div>
  );
};

export default SectionTitle;
