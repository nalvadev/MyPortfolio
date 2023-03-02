import React from "react";
import "./testimonials.css";
import CLIENT from "../../assets/client.jpg";
import CLIENT2 from "../../assets/client2.jpg";

// import Swiper core and required modules
import { Pagination, Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';


const data =[
  {
    avatar: CLIENT,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },
  {
    avatar: CLIENT2,
    name: 'Kirk Hammet',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },
  {
    avatar: CLIENT,
    name: 'James Hetfield',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },
  {
    avatar: CLIENT2,
    name: 'Dave Ellefson',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis odit, blanditiis aliquid nemo ullam adipisci ex repellat dicta tempora?'
  },

]

const Testimonials = () => {
  return (
    <section>
      <h5>Review form Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" modules={[Pagination, Navigation, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable:true}}
       >  

        {
          data.map(({avatar,name,review}, index) =>{
            return(
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="client" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>)
          })
        }
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
