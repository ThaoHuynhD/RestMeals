import React from 'react'
import './Galleries.scss'
import { galleriesData } from '../../fakeData/GalleriesData'
import { useNavigate } from 'react-router-dom'
export default function Galleries() {
    let navigate = useNavigate();
    let handleBtnNavigate = (path) => {
        navigate(path);
    }
    return (
        <section id='gallerries'>
            <div className="container">
                <div className="title">
                    <span className='headerSpan'>Galleries</span>
                    <h1 className='headerTitle'>Photo <span>Galleries</span></h1>
                </div>
                <div className='galleriesList'>
                    {galleriesData.map((image, index) => {
                        return <div key={index} className='picture-wrapper'>
                            <img src={image.urlImg} alt={image.note} />
                        </div>
                    })}
                </div>
                <button className='orangeBtn' onClick={() => { handleBtnNavigate('/Gallery') }} >MORE GALLERIES</button>
            </div>
        </section>
    )
}
