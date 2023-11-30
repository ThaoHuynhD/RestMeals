import React, { useState } from 'react'
import './BookATablePopup.scss'

export default function BookATable() {
    let [isModalBookingOpen, setIsModalBookingOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        datetime: '',
        message: '',
    });

    function getCurrentDate() {
        return new Date().toISOString().slice(0, 16);
    }

    function getMaxDate() {
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        return maxDate.toISOString().slice(0, 16);
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
                                <input type="datetime-local" name="datetime"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={getCurrentDate()}
                                    max={getMaxDate()}
                                    required
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
