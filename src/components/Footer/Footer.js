import React from 'react'
import './Footer.scss'
import { NavLink } from 'react-router-dom'
import { waitingUpdate } from '../UpdateFunction/UpdateFunction'

export default function Footer() {
    return (
        <section id='resFooter'>
            <div className="container">
                <div className="content">
                    <ul className='col col-logo'>
                        <h1>About RestMeals</h1>
                        <li><p>At our restaurant, we don't just serve food; we craft experiences. From the sizzle in our kitchen to the warmth at your table, every moment is a celebration of flavor and community.</p></li>
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
                    <ul className='col'>
                        <h2>Projects</h2>
                        <li><NavLink to={'/'}>Web Design</NavLink></li>
                        <li><NavLink to={'/'}>HTML5</NavLink></li>
                        <li><NavLink to={'/'}>CSS3</NavLink></li>
                        <li><NavLink to={'/'}>jQuery</NavLink></li>
                        <li><NavLink to={'/'}>Bootstrap</NavLink></li>
                    </ul>
                    <ul className='col'>
                        <h2>Services</h2>
                        <li><NavLink to={'/'}>Design</NavLink></li>
                        <li><NavLink to={'/'}>Front-end</NavLink></li>
                        <li><NavLink to={'/'}>Code</NavLink></li>
                        <li><NavLink to={'/'}>Developer</NavLink></li>
                    </ul>
                    <ul className='col'>
                        <h2>Contact</h2>
                        <li><NavLink to={'/'}>43 Raymouth Rd. Baltemoer, London 3910</NavLink></li>
                        <li><NavLink to={'/'}>+1(123)-456-7890</NavLink></li>
                        <li><NavLink to={'/'}>+1(123)-456-7890</NavLink></li>
                        <li><NavLink to={'/'}>info@mydomain.com</NavLink></li>
                    </ul>
                </div>
                <p className='flex-center'>Copyright ©2023 All rights reserved | This template is made with by <span> H3T</span></p>
            </div>
        </section>
    )
}
