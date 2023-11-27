import React from 'react'
import { waitingUpdate } from '../../../components/UpdateFunction/UpdateFunction'

export default function BookTable() {
    return (

        <section id='bookTable'>
            <div className='bg'></div>
            <div className="headerSpan">BOOK A TABLE</div>
            <div className="headerTitle">Book A Table Now</div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button className='orangeBtn' onClick={() => { waitingUpdate() }} >BOOK A TABLE</button>
        </section>
    )
}
