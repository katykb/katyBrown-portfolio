import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import Hero2 from '../components/Hero2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT" text="Let me hear from you!" />
      <Footer />
    </div>
  )
}

export default Contact