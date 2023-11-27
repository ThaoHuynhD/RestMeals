import React, { useEffect, useState } from 'react'
import './Header.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { waitingUpdate } from '../UpdateFunction/UpdateFunction'

export default function Header() {
    let [selectedKey, setSelectedKey] = useState(useLocation().pathname.substring(1));

    let userNavLink = [
        { title: 'Home', path: '/' },
        { title: 'Menu', path: '/Menu' },
        { title: 'Event', path: '/Event' },
        { title: 'Gallery', path: '/Gallery' },
        { title: 'About', path: '/About' },
        { title: 'Contact', path: '/Contact' },
    ];
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
            <div className="container">
                <NavLink className='logo' to={'/'}>RestMeals<i className="fa-solid fa-utensils"></i></NavLink>
                <ul>
                    {userNavLink.map((subject, index) => <li className='flex-center ' key={index}>
                        <NavLink to={subject.path}
                            onClick={() => setSelectedKey(subject.title)}
                            className={`headerBtn ${subject.title} ${selectedKey === subject.title ? 'active' : ''}`}
                        >{subject.title}</NavLink>
                    </li>
                    )}
                </ul>
                <button className='orangeBtn' onClick={() => { waitingUpdate() }} >BOOK A TABLE</button>
            </div>
        </div>
    )
}
