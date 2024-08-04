import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xa0dc4n', 'template_5hc5id3', form.current, {
                publicKey: '7OVZ8RUa6Maulb5O3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label className='form-label'>Name</label>
            <input className='form-control' type="text" name="from_name" />
            <label className='form-label'>Email</label>
            <input className='form-control' type="email" name="from_email" />
            <label className='form-label'>Phone Number</label>
            <input className='form-control' type="text" name="from_phone" />
            <label className='form-label'>Message</label>
            <textarea className='form-control' name="message" />
            <input className='btn btn-success' type="submit" value="Send" />
        </form>
    );
};