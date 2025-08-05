import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

// Define the center position of the map (latitude and longitude for GN Block, Sector V, Bidhannagar, Kolkata)
const center = {
  lat: 22.5697,  // Latitude of GN Block, Sector V, Bidhannagar
  lng: 88.4186, // Longitude of GN Block, Sector V, Bidhannagar
};

const Contact = () => {


  const slides = [
    '/page-title.webp',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);


  return (
    <>

   <section
      style={{
        position: 'relative',
        backgroundImage: `url(${slides[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '550px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          paddingLeft: '150px',
          width: '100%',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '48px', lineHeight: 1.3, margin: 0 }}>
            Contact
          </h1>
          <h1 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>
            Home {'>>'} Contact
          </h1>
        </div>
      </div>
    </section>


   {/* Outer wrapper with white background */}
<>
  <style>
    {`
      @keyframes softGlow {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 rgba(0,0,0,0);
        }
        50% {
          transform: scale(1.01);
          box-shadow: 0 0 15px rgba(0, 102, 255, 0.2);
        }
      }
    `}
  </style>

  <div className="p-10 bg-white">
    <div
      className="flex flex-wrap justify-between p-10 rounded-md font-sans"
      style={{
        backgroundColor: '#faf1ecff',
        animation: 'softGlow 5s ease-in-out infinite',
      }}
    >
      {/* Left - Form */}
      <div className="flex-1 max-w-[60%] min-w-[300px]">
        <h2 className="text-[22px] mb-5 text-[#0066ff] font-semibold">Get in touch</h2>
        <form className="flex flex-col gap-4">    
          <div className="flex gap-4 flex-wrap">
            <input type="text" placeholder="Your name here" className="flex-1 p-2 border border-gray-300 text-sm" />
            <input type="email" placeholder="Your email here" className="flex-1 p-2 border border-gray-300 text-sm" />
          </div>
          <div className="flex gap-4 flex-wrap">
            <input type="text" placeholder="Your subject here" className="flex-1 p-2 border border-gray-300 text-sm" />
            <input
              type="text"
              placeholder="Your phone number here"
              className="flex-1 p-2 border border-gray-300 text-sm"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Tell us a few words"
            className="p-2 border border-gray-300 text-sm resize-none w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 font-bold w-fit hover:bg-blue-700 transition"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>

      {/* Right - Contact Info */}
      <div className="flex-1 max-w-[35%] min-w-[280px] bg-[#181e26] text-white p-8 rounded-md mt-8 md:mt-0">
        <p className="text-[#0066ff] uppercase text-xs font-bold mb-1">Contact</p>
        <h3 className="text-lg mb-6">Our Contact Detail</h3>

        {/* Email */}
        <div className="flex mb-5">
          <div className="text-xl mr-4">{/* Icon */}</div>
          <div>
            <p className="font-bold text-sm">Send E-Mail</p>
            <p className="text-xs text-gray-300">info@craftedcampus.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex mb-5">
          <div className="text-xl mr-4">{/* Icon */}</div>
          <div>
            <p className="font-bold text-sm">Call Anytime</p>
            <p className="text-xs text-gray-300">+91 81000 71784</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex mb-5">
          <div className="text-xl mr-4">{/* Icon */}</div>
          <div>
            <p className="font-bold text-sm">Locations</p>
            <p className="text-xs text-gray-300">
              3471, Aurora Waterfront, 8th Floor Unit-2D
              <br />
              Salt Lake, Sec – V, Kol-700091
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-5 text-lg">
          <div>{/* FB */}</div>
          <div>{/* Twitter */}</div>
          <div>{/* LinkedIn */}</div>
        </div>
      </div>
    </div>
  </div>
</>


    

 <iframe
  title="Crafted Campus Location on Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.241798041812!2d88.42635097530041!3d22.57005807949356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276bee883bf1d%3A0x7068a429fd566e12!2sCrafted%20Campus%3A%20Digital%20Marketing%20Agency%20%7C%20Website%20Designing%20Company!5e0!3m2!1sen!2sin!4v1753694766361!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </>
  );
};

export default Contact;
