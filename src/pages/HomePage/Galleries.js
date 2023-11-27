import React from 'react'
import { waitingUpdate } from '../../components/UpdateFunction/UpdateFunction'
export default function Galleries() {
    return (
        <section id='gallerries'>
            <div className="container">
                <div className="title">
                    <span className='headerSpan'>Galleries</span>
                    <h1 className='headerTitle'>Photo <span>Galleries</span></h1>
                </div>
                <div className='galleriesList'>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/236x/4e/cf/17/4ecf17d95a34348096e7fa0f971ca489.jpg' alt='' />
                    </div>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/564x/cc/5e/20/cc5e2077b8250e31741730474483c23b.jpg' alt='' />
                    </div>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/564x/a6/cf/80/a6cf802c94622a9079f9d55653aa84c3.jpg' alt='' />
                    </div>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/564x/21/10/75/2110753a3d5c80665cb3f515e07b6003.jpg' alt='' />
                    </div>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/564x/78/8b/23/788b23268198a5c8f98fb39a4c62f6b3.jpg' alt='' />
                    </div>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/564x/47/9a/2a/479a2a5e6c3825aed5182edaa1d8f5d8.jpg' alt='' />
                    </div>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/564x/9e/f1/11/9ef111eefe9bc774a04e828822e25c0d.jpg' alt='' />
                    </div>
                    <div className='picture-wrapper'>
                        <img src='https://i.pinimg.com/564x/c2/18/68/c21868d5c4eb4329c37621ae0a362b72.jpg' alt='' />
                    </div>
                </div>
                <button className='orangeBtn' onClick={() => { waitingUpdate() }} >MORE GALLERIES</button>
            </div>
        </section>
    )
}
