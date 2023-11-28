import React, { useState } from 'react'
import './Galleries.scss'
import { galleriesData } from '../../fakeData/GalleriesData'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { SET_SELECTED_KEY } from '../../constant/constant';
export default function Galleries() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const useLastPathSegment = () => {
        const location = useLocation();
        const pathSegments = location.pathname.split('/').filter(segment => segment.trim() !== '');
        return pathSegments[pathSegments.length - 1] || null;
    };
    let currentPath = useLastPathSegment();
    let [itemNumber, setItemNumber] = useState(8);
    let handleBtnNavigate = (path) => {
        if (currentPath !== 'Gallery') {
            navigate(path);
            dispatch({ type: SET_SELECTED_KEY, payload: path });
        }
        else {
            setItemNumber(galleriesData.length);
        }
    }
    return (
        <section id='gallerries'>
            <div className="container">
                <div className="title">
                    <span className='headerSpan'>Galleries</span>
                    <h1 className='headerTitle'>Photo <span>Galleries</span></h1>
                </div>
                <div className='galleriesList'>
                    {galleriesData.slice(0, itemNumber).map((image, index) => {
                        return <div key={index} className='picture-wrapper'>
                            <img src={image.urlImg} alt={image.note} />
                        </div>
                    })}
                </div>
                <button className={`orangeBtn ${itemNumber === galleriesData.length ? 'hidden' : ''}`} onClick={() => { handleBtnNavigate('Gallery') }} >MORE GALLERIES</button>
            </div>
        </section>
    )
}
