import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../Assets/home/slide1.jpg';
import slide2 from '../../../Assets/home/slide2.jpg';
import slide3 from '../../../Assets/home/slide3.jpg';
import slide4 from '../../../Assets/home/slide4.jpg';
import slide5 from '../../../Assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './Category.css';

const Category = () => {
  return (
    <>
      <SectionTitle heading={'Order Online'} subHeading={'From 11.00 am to 10.00pm'}></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper mb-10 lg:mx-20">
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-center lg:text-4xl uppercase -mt-16 text-white">Salads</h3>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-center lg:text-4xl uppercase text-white -mt-16 drop-shadow-2xl">
            Pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-center lg:text-4xl uppercase text-white -mt-16 drop-shadow-2xl">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-center lg:text-4xl uppercase text-white -mt-16 drop-shadow-2xl">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-center lg:text-4xl uppercase text-white -mt-16 drop-shadow-2xl">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
