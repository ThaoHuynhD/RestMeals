import React from 'react'
import './Banner.scss'
import { bannerData } from '../../FakeData/BannerData'
import { waitingUpdate } from '../UpdateFunction/UpdateFunction'

export default function Banner() {
    let key = 'Home';
    if (window.location.pathname === '/') { } else { key = window.location.pathname.split('/').pop(); }

    let selectedContent = (bannerData.filter(content => content.key === key))[0];


    return (
        <div id='resBanner'>
            <div className='bgBanner'></div>
            <div className='container'>
                <div className="content">
                    <span>{selectedContent.smallTitle}</span>
                    <h1>{selectedContent.bigTitle}</h1>
                    <p>{selectedContent.desc}</p>
                    <button className='orangeBtn' onClick={() => { waitingUpdate() }} >EXPLORE MORE</button>
                </div>
                <div className='socialBtn'>
                    <ul>
                        <li><button className='orangeOutLineBtn'
                            onClick={() => { waitingUpdate() }}><i className="fa-brands fa-facebook-f"></i></button></li>
                        <li><button className='orangeOutLineBtn'
                            onClick={() => { waitingUpdate() }}><i className="fa-brands fa-instagram"></i></button></li>
                        <li><button className='orangeOutLineBtn'
                            onClick={() => { waitingUpdate() }}><i className="fa-brands fa-twitter"></i></button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
