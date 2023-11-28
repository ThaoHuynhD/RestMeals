import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialsData } from '../../fakeData/TestimonialsData';
export default function Testimonials() {
    return (
        <div id='testimonials'>
            <div className="contentList">
                <Swiper
                    slidesPerView={'auto'}
                    height={'100%'}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {testimonialsData.map((person, index) => {
                        return <SwiperSlide key={index}>
                            <div className='testimonials__item'>
                                <div className="flex-center">
                                    <div className="picture-wrapper">
                                        <img src={person.urlImg} alt='' />
                                    </div>
                                    <div className="profile">
                                        <h3>{person.name}</h3>
                                        <span>{person.jobTitle}</span>
                                    </div>
                                </div>
                                <p><i className="fa-solid fa-quote-left"></i>
                                    {person.quote}
                                    <i className="fa-solid fa-quote-right"></i></p>
                            </div></SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}
