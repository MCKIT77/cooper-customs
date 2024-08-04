import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';



import { ContactUs } from '../components/UI/ContactUs';

export default function HomePage() {
  return (
    <>
      <ContactUs />
    </>
  )

}
