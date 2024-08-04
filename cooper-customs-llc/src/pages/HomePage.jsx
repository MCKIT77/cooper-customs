import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';



import { ContactUs } from '../components/UI/ContactUs';

export default function HomePage() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <h2>Welcome to Cooper Customs LLC</h2>
        <p>
          If you have an emergency, call us at <strong>(123) 456-7890</strong>.
        </p>
        <p>
          If you would like us to call you, please leave us a message below and we will get in touch with you as soon as possible.
        </p>
        <ContactUs />
      </div>
    </>
  )

}
