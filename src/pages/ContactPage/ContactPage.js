import React from 'react'
import './ContactPage.scss'
import { waitingUpdate } from '../../function/UpdateFunction/UpdateFunction'

export default function ContactPage() {
  return (
    <section id='contactPage'>
      <div className="container">
        <div className="grid">
          <ul>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info">
                <p>Location:</p>
                <span>District 10. Ho Chi Minh City</span>
              </div>
            </li>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="info">
                <p>Open Hours:</p>
                <span>Sunday-Friday:</span>
                <span>11:00 AM - 23:00 PM</span>
              </div>
            </li>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info">
                <p>Email:</p>
                <span>thaohuynh34.678@gmail.com</span>
              </div>
            </li>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-phone"></i>
              </div>
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
