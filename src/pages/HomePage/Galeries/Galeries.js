import React from 'react'
import { waitingUpdate } from '../../../components/UpdateFunction/UpdateFunction'

export default function Galeries() {
    return (
        <div id='gallerries'>
            <div className="title">
                <span className='headerSpan'>Galleries</span>
                <h1 className='headerTitle'>Photo <span>Galleries</span></h1>
            </div>
            <div className='galleriesList'>
                <div className='picture-wrapper'>
                    <img src='https://i.pinimg.com/564x/84/71/e4/8471e4895dc90f488ec22dee62ad4084.jpg' alt='' />
                </div>
                <div className='picture-wrapper'>
                    <img src='https://i.pinimg.com/564x/cc/5e/20/cc5e2077b8250e31741730474483c23b.jpg' alt='' />
                </div>
                <div className='picture-wrapper'>
                    <img src='https://i.pinimg.com/564x/2a/67/78/2a6778b54dbe6435c5276895cd77964c.jpg' alt='' />
                </div>
                <div className='picture-wrapper'>
                    <img src='https://i.pinimg.com/564x/75/57/c7/7557c7091503aec98c6640f407dbc100.jpg' alt='' />
                </div>
            </div>
            <button className='orangeBtn' onClick={() => { waitingUpdate() }} >MORE GALLERIES</button>
        </div>
    )
}
