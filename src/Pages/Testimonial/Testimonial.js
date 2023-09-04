/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`review.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      });
  }, []);
  return (
    <div>
      <div>
        <SectionTitle heading={'Testimonial'} subHeading={'What out Client Say'}></SectionTitle>
      </div>
      <div className="">
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {review.map((item) => (
              <SwiperSlide key={item._id} className="px-20 text-center">
                <div className="flex justify-center mb-4">
                  <Rating style={{ maxWidth: 180 }} value={item.rating} transition="zoom" />
                </div>
                <p className=" flex justify-center">
                  <FaQuoteLeft className="text-8xl" />
                </p>
                <p>{item.details}</p>

                <h3 className="mt-2 text-yellow-500  text-3xl uppercase">{item.name}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Testimonial;
