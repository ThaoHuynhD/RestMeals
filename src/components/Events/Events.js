import React from 'react'
import './Events.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Events() {
    return (
        <section id='Events'>
            <div className="container">
                <div className="title">
                    <span className='headerSpan'>EVENTS</span>
                    <h1 className='headerTitle'>Enjoy <span>Our Events</span></h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="eventList">
                    <Swiper
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='event__item'>
                            <div className='content'>
                                <h1 className='headerTitle'><span>399.000 VND</span></h1>
                                <h1 className='headerTitle'>Guest Chef Night Party</h1>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <ul>
                                    <li><i className="fa-solid fa-check flex-center"></i>Away behind the word</li>
                                    <li><i className="fa-solid fa-check flex-center"></i>Bookmarksgrove right at the coast</li>
                                    <li><i className="fa-solid fa-check flex-center"></i>Separated they live</li>
                                </ul>
                            </div>
                            <div className='picture-wrapper'><img src='https://i.pinimg.com/564x/12/f0/fd/12f0fdad9c6f80d6f0a8f549bd66ded6.jpg' alt='' /></div>
                        </SwiperSlide>
                        <SwiperSlide className='event__item'>
                            <div className='picture-wrapper'><img src='https://i.pinimg.com/564x/94/40/70/94407031b6ed7802d3eb2fdc4dcce77f.jpg' alt='' /></div>
                            <div className='content'>
                                <h1 className='headerTitle'><span>199.000 VND</span></h1>
                                <h1 className='headerTitle'>Birthday Night Party</h1>
                                <p>
                                    "At our restaurant, we don't just serve food; we craft experiences. From the sizzle in our kitchen to the warmth at your table, every moment is a celebration of flavor and community."</p>
                                <ul>
                                    <li><i className="fa-solid fa-check flex-center"></i>Away behind the word</li>
                                    <li><i className="fa-solid fa-check flex-center"></i>Bookmarksgrove right at the coast</li>
                                    <li><i className="fa-solid fa-check flex-center"></i>Separated they live</li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
