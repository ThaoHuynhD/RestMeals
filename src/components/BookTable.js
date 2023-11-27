import React from 'react'
import { waitingUpdate } from './UpdateFunction/UpdateFunction'

export default function BookTable() {
    return (
        <section id='bookTable' style={{ textAlign: 'center', position: 'relative' }}>
            <div className='bg'></div>
            <div className="headerSpan">BOOK A TABLE</div>
            <div className="headerTitle">Book A Table Now</div>
            <p style={{ textAlign: 'center' }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='orangeBtn' onClick={() => { waitingUpdate() }} >BOOK A TABLE</button>
        </section>
    )
}
