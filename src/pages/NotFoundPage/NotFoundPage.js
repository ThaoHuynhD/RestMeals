import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    let navigate = useNavigate();
    return (
        <div style={{ backgroundColor: '#ffeccb', height: '100vh' }}>
            <div className="flex-center"><img style={{ width: '40%', marginTop: 60 }} src='./img/notFound.jpg' alt='cds' /></div>
            <div className="flex-center">
                <button style={{ marginRight: '20px' }} className='orangeBtn' onClick={() => { navigate('/Home') }} >BACK HOME</button>
                <button className='orangeOutLineBtn' onClick={() => { navigate('/Contact') }} >CONTACT US</button>

            </div>
        </div>
    )
}
