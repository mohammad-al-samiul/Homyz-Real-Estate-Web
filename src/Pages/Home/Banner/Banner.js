import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../../Assets/home/01.jpg';
import slide2 from '../../../Assets/home/02.jpg';
import slide3 from '../../../Assets/home/03.png';
import slide4 from '../../../Assets/home/04.jpg';
import slide5 from '../../../Assets/home/05.png';
import slide6 from '../../../Assets/home/06.png';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={slide1} />
        </div>
        <div>
          <img src={slide2} />
        </div>
        <div>
          <img src={slide3} />
        </div>
        <div>
          <img src={slide4} />
        </div>
        <div>
          <img src={slide5} />
        </div>
        <div>
          <img src={slide6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
