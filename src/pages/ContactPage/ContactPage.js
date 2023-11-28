import React from 'react'
import './ContactPage.scss'
import { waitingUpdate } from '../../components/UpdateFunction/UpdateFunction'

export default function ContactPage() {
  return (
    <section id='contactPage'>
      <div className="container">
        <div className="grid">
          <ul>
            <li>
              <i className="orangeBtn flex-center fa-solid fa-location-dot"></i>
              <div className="info">
                <p>Location:</p>
                <span>43 Raymouth Rd. Baltemoer, London 3910</span>
              </div>
            </li>
            <li>
              <i className="orangeBtn flex-center fa-solid fa-clock"></i>
              <div className="info">
                <p>Open Hours:</p>
                <span>Sunday-Friday:</span>
                <span>11:00 AM - 2300 PM</span>
              </div>
            </li>
            <li>
              <i className="orangeBtn flex-center fa-solid fa-envelope"></i>
              <div className="info">
                <p>Email:</p>
                <span>info@Colorlib</span>
              </div>
            </li>
            <li>
              <i className="orangeBtn flex-center fa-solid fa-phone"></i>
              <div className="info">
                <p>Call:</p>
                <span>+1 1234 55488 55</span>
              </div>
            </li>
          </ul>
          <form>
            <div className="flex-center">
              <input type='name' placeholder='Your Name' />
              <input type='email' placeholder='Your Email Address' />
            </div>
            <div className="flex-center"><textarea type='name' placeholder='Your Message'></textarea></div>
            <button className='orangeBtn' onClick={() => { waitingUpdate() }} >SEND YOUR MESSAGE</button>
          </form>
        </div>
      </div>
    </section >
  )
}
