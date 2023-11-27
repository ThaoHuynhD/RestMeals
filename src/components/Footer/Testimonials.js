import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
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
                    <SwiperSlide>
                        <div className='testimonials__item'>
                            <div className="flex-center">
                                <div className="picture-wrapper">
                                    <img src='https://i.pinimg.com/236x/f2/80/4e/f2804e8fbb9839cb88e859f9d8e2741a.jpg' alt='' />
                                </div>
                                <div className="profile">
                                    <h3>John Doe</h3>
                                    <span>CEO, Founder</span>
                                </div>
                            </div>
                            <p><i className="fa-solid fa-quote-left"></i>
                                The journey of a thousand miles begins with one step.
                                <i className="fa-solid fa-quote-right"></i></p>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonials__item'>
                            <div className="flex-center">
                                <div className="picture-wrapper">
                                    <img src='https://i.pinimg.com/564x/e8/15/d6/e815d6d6be3b888c7a9d973b16ef63f7.jpg' alt='' />
                                </div>
                                <div className="profile">
                                    <h3>Jenny Rose</h3>
                                    <span>COO</span>
                                </div>
                            </div>
                            <p><i className="fa-solid fa-quote-left"></i>
                                Life is a canvas, and you are the artist.
                                <i className="fa-solid fa-quote-right"></i></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='testimonials__item'>
                            <div className="flex-center">
                                <div className="picture-wrapper">
                                    <img src='https://i.pinimg.com/564x/aa/65/66/aa6566aaacd80d2da2e7496c7ee8d637.jpg' alt='' />
                                </div>
                                <div className="profile">
                                    <h3>Marry Jane</h3>
                                    <span>S&M Manager</span>
                                </div></div>
                            <p><i className="fa-solid fa-quote-left"></i>
                                The tapestry of life is woven with threads of joy and sorrow, success and failure, love and loss.
                                <i className="fa-solid fa-quote-right"></i></p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
