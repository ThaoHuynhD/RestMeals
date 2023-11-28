import React, { useEffect, useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { waitingUpdate } from '../UpdateFunction/UpdateFunction'
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_KEY, START_LOADING } from '../../constant/constant';
export default function Header() {
    const [isAtTop, setIsAtTop] = useState(true);
    let selectedKey = useSelector(state => state.headerReducer.selectedKey);
    const dispatch = useDispatch();
    const handleButtonClick = (path) => {
        dispatch({ type: SET_SELECTED_KEY, payload: path });
        dispatch({ type: START_LOADING });
    };

    let userNavLink = [
        { title: 'Home', path: '/' },
        { title: 'Menu', path: '/Menu' },
        { title: 'Event', path: '/Event' },
        { title: 'Gallery', path: '/Gallery' },
        { title: 'About', path: '/About' },
        { title: 'Contact', path: '/Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(document.documentElement.scrollTop === 0);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const navLinkHeaders = document.querySelectorAll('.headerBtn');
        navLinkHeaders.forEach((navLink) => {
            const hasSelectedKey = navLink.classList.contains(selectedKey);
            if (navLink.classList.contains('active') && !hasSelectedKey) {
                navLink.classList.remove('active');
            }
        });
    }, [selectedKey]);

    return (
        <div>
            <div id='resHeader'>
                <div className={`bg-dark ${isAtTop ? '' : 'show'}`}></div>
                <div className="container">
                    <NavLink className='logo' to={'/'}>RestMeals <i className="fa-solid fa-utensils"></i></NavLink>
                    <ul>
                        {userNavLink.map((subject, index) => <li className='flex-center ' key={index}>
                            <NavLink to={subject.path}
                                onClick={() => handleButtonClick(subject.title)}
                                className={`headerBtn ${subject.title} ${selectedKey === subject.title ? 'active' : ''}`}
                            >{subject.title}</NavLink>
                        </li>
                        )}
                    </ul>
                    <button className='orangeBtn' onClick={() => { waitingUpdate() }} >BOOK A TABLE</button>
                </div>
            </div>
            <div className={`fix-bottom-right ${isAtTop ? '' : 'show'}`}>
                <button className='orangeBtn'
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                    <i className="fa-solid fa-arrow-up"></i></button></div>
        </div >
    )
}
