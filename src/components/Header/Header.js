import React, { useEffect, useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { waitingUpdate } from '../UpdateFunction/UpdateFunction'
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_KEY, START_LOADING } from '../../constant/constant';

export default function Header() {
    const [isMobileWidth, setIsMobileWidth] = useState(window.innerWidth <= 767);
    const [isShowMobileMenu, setShowMobileMenu] = useState(false);
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
        const updateIsMobileWidth = () => {
            setIsMobileWidth(window.innerWidth <= 767);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', updateIsMobileWidth);
        return () => {
            window.removeEventListener('resize', updateIsMobileWidth);
        };
    }, [isAtTop]);
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
        <div id='resHeader'>
            {isMobileWidth ?
                <div className={`navbar__mobile ${isShowMobileMenu ? 'showbg' : isAtTop ? 'hidebg' : 'fadebg'}`}>
                    <div className="container">
                        <div className={`logo__menubtn menuBar ${isShowMobileMenu ? 'show' : 'hidden'}`}>
                            <NavLink className='logo' to={'/'}>RestMeals <i className="fa-solid fa-utensils"></i></NavLink>
                            <button className='orangeBtn menu-toggle flex-center'
                                onClick={() => { setShowMobileMenu(!isShowMobileMenu) }}>
                                {isShowMobileMenu ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                            </button>
                        </div>
                        <div className={`menubar__detail ${isShowMobileMenu ? 'show' : 'hidden'}`}>
                            <ul>
                                {userNavLink.map((subject, index) => <li className='flex-center ' key={index}>
                                    <NavLink to={subject.path}
                                        onClick={() => handleButtonClick(subject.title)}
                                        className={`headerBtn ${subject.title} ${selectedKey === subject.title ? 'active' : ''}`}
                                    >{subject.title}</NavLink>
                                </li>
                                )}
                            </ul>
                            <div className="flex-center"><button className='orangeBtn' onClick={() => { waitingUpdate() }} >BOOK A TABLE</button></div>
                        </div>
                    </div>
                </div>
                : <div className={`navbar__laptop ${isAtTop ? 'hidebg' : 'fadebg'}`}>
                    <div className="container">

                        <div className="menuBar">
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
                </div>
            }


            <div className={`fix-bottom-right ${isAtTop ? '' : 'show'}`}>
                <button className='orangeBtn'
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                    <i className="fa-solid fa-arrow-up"></i></button></div>
        </div >
    )
}
