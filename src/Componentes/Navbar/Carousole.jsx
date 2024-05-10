// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

import bg1 from '../../../src/assets/images/bg1.jpg'
import bg2 from '../../../src/assets/images/bg2.jpg'
import bg3 from '../../../src/assets/images/bg3.jpg'

export default function Carousole() {
  return (
    <div className='container  py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide image={bg1} text ='This is useful alternative product' />
        </SwiperSlide>
        
        <SwiperSlide>
          <Slide image={bg2} text='This alternative product are more attractive ' />
        </SwiperSlide>

        <SwiperSlide>
          <Slide image={bg3} text='This product has extra feature more than others' />
        </SwiperSlide>

        
        
        
        
      </Swiper>
    </div>
  );
}
