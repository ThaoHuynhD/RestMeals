import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export default function Testimonials() {
    return (
        <div id='testimonials'>
            <div className="title">
                <span className='headerSpan'>Testimonials</span>
                <h1 className='headerTitle'>Satisfied <span>Customers</span></h1>
            </div>
            <div className="contentList">
                <Swiper
                    slidesPerView={'auto'}
                    height={'100%'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        position: 'left'
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='testimonials__item'>
                            <div className="picture-wrapper">
                                <img src='https://i.pinimg.com/236x/f2/80/4e/f2804e8fbb9839cb88e859f9d8e2741a.jpg' alt='' />
                            </div>
                            <h3>John Doe</h3>
                            <span>CEO, Founder</span>
                            <p><i className="fa-solid fa-quote-left"></i>
                                The journey of a thousand miles begins with one step. Along the way, embrace the detours, enjoy the moments, and cherish the lessons. Success is not just a destination, but a series of choices, efforts, and persistence.
                                <i className="fa-solid fa-quote-right"></i></p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonials__item'>
                            <div className="picture-wrapper">
                                <img src='https://i.pinimg.com/564x/e8/15/d6/e815d6d6be3b888c7a9d973b16ef63f7.jpg' alt='' />
                            </div>
                            <h3>Jenny Rose</h3>
                            <span>COO</span>
                            <p><i className="fa-solid fa-quote-left"></i>
                                "Life is a canvas, and you are the artist. Paint it with the colors of your dreams, the brushstrokes of your experiences, and the boldness of your decisions. Remember that mistakes are not flaws but rather strokes that add depth and character to your masterpiece.
                                <i className="fa-solid fa-quote-right"></i></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonials__item'>
                            <div className="picture-wrapper">
                                <img src='https://i.pinimg.com/564x/aa/65/66/aa6566aaacd80d2da2e7496c7ee8d637.jpg' alt='' />
                            </div>
                            <h3>Marry Jane</h3>
                            <span>S&M Manager</span>
                            <p><i className="fa-solid fa-quote-left"></i>
                                The tapestry of life is woven with threads of joy and sorrow, success and failure, love and loss. It's a complex mosaic that reflects the uniqueness of each individual journey.
                                <i className="fa-solid fa-quote-right"></i></p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
