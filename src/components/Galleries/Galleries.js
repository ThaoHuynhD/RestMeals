import React from 'react'
import './Galleries.scss'
import { waitingUpdate } from '../UpdateFunction/UpdateFunction'
import { galleriesData } from '../../FakeData/GalleriesData'
export default function Galleries() {
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
                <button className='orangeBtn' onClick={() => { waitingUpdate() }} >MORE GALLERIES</button>
            </div>
        </section>
    )
}
