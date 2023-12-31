import React from 'react'
import './Footer.scss'
import { NavLink } from 'react-router-dom'
import Testimonials from './Testimonials'
import { useDispatch } from 'react-redux'
import { SET_SELECTED_KEY } from '../../constant/constant'
import { waitingUpdate } from '../../function/UpdateFunction/UpdateFunction';

export default function Footer() {
    const dispatch = useDispatch();
    const handleButtonClick = (path) => {
        dispatch({ type: SET_SELECTED_KEY, payload: path });
    };


    return (
        <section id='resFooter'>
            <div className="container">
                <div className="content">
                    <ul className='col col-logo'>
                        <h1>RestMeals <i className="fa-solid fa-utensils"></i></h1>
                        <Testimonials />
                    </ul>
                    <ul className='col'>
                        <h2>About Us</h2>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Hot Deals</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>New Products</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Our Journey</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Promotion News</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Book A Seat</NavLink></li>
                    </ul>
                    <ul className='col'>
                        <h2>Policy</h2>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Operation Policy</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Terms & Condition</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Delivery Policy</NavLink></li>
                        <li><NavLink to={'/'} onClick={() => { handleButtonClick('Home') }}>Hire news</NavLink></li>
                    </ul>
                    <ul className='col col-contact'>
                        <h2>Contact</h2>
                        <li><i className="fa-solid fa-location-dot"></i>598 District 10, HCMC</li>
                        <li><i className="fa-solid fa-phone"></i><NavLink to={'tel:+11234567890'}>+1(123)-456-7890</NavLink></li>
                        <li><i className="fa-solid fa-envelope"></i><NavLink to={'mailto:thaohuynh34.678@gmail.com'}>thaohuynh34.678@gmail.com</NavLink></li>
                        <li>
                            <ul className='socialBtn'>
                                <li><button className='orangeOutLineBtn flex-center'
                                    onClick={() => { waitingUpdate() }}><i className="fa-brands fa-facebook-f"></i></button></li>
                                <li><button className='orangeOutLineBtn flex-center'
                                    onClick={() => { waitingUpdate() }}><i className="fa-brands fa-instagram"></i></button></li>
                                <li><button className='orangeOutLineBtn flex-center'
                                    onClick={() => { waitingUpdate() }}><i className="fa-brands fa-twitter"></i></button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="flex-center">
                    <p>Copyright ©2023 All rights reserved | This template is made with by <span> H3T</span></p>
                </div>
            </div>
        </section>
    )
}
