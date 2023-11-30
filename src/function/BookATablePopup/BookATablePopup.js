import React, { useState } from 'react'
import './BookATablePopup.scss'

export default function BookATable() {
    let [isModalBookingOpen, setIsModalBookingOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        date: '',
        time: '',
        message: '',
    });
    console.log("formData: ", formData);
    let getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        return `${year}-${month}-${day}`;
    }
    let hadleShowBookingMessage = () => {
        alert('Thank you for your request. We will call you as soon as possible to confirm your request!');
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        hadleShowBookingMessage();
    };
    return (
        <div className='bookingTable'>
            <button className='orangeBtn' onClick={() => { setIsModalBookingOpen(true) }} >BOOK A TABLE</button>
            <div className={`screen__modal ${isModalBookingOpen ? 'show' : 'hidden'}`}>
                <div className='bg' onClick={() => { setIsModalBookingOpen(false) }} ></div>
                <div className={`modal__booktable container flex-center`}>
                    <div className="modal__body">
                        <div className='closeBtn' onClick={() => { setIsModalBookingOpen(false) }} >X</div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex-center">
                                <input type='text' name='name' placeholder='Your Name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    pattern="[A-Za-z\s]+" required
                                />
                                <input type='tel' name='phoneNumber' placeholder='Your Phone Number'
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required
                                />
                            </div>
                            <div className="flex-center">
                                <input type="date" name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={getCurrentDate()} required
                                />
                                <input type="time" name="time"
                                    value={formData.time}
                                    onChange={handleChange} required
                                />
                            </div>
                            <div className="flex-center">
                                <textarea name='message' placeholder='Your Message' value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button className='orangeBtn' type='submit'>SEND YOUR BOOKING</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
