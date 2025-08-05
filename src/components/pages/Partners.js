import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Partner = () => {

  const partnerLogos = [
  {
    name: 'Litt inc',
    logo: 'https://craftedcampus.com/wp-content/uploads/2025/02/Litt-2-01-1-1.webp',
  },
  {
    name: 'Smart town solution',
    logo: 'https://craftedcampus.com/wp-content/uploads/2025/02/New-Project.webp',
  },
  {
    name: 'Web branding hub',
    logo: 'https://craftedcampus.com/wp-content/uploads/2025/02/logo-1.webp',
  },
  {
    name: 'Boost my business',
    logo: 'https://craftedcampus.com/wp-content/uploads/2025/02/Boost-logo-white-bubble-SMALL-1.webp',
  },
];


const slides = [
    '/page-title.webp',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
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
            Partner’s
          </h1>
          <h1 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>
            Home {'>>'} Partner’s
          </h1>
        </div>
      </div>
    </section>

  <div
  style={{
    backgroundColor: "#fbfbf9ff", 
    padding: "60px 0",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  }}
>
  <div style={{ marginBottom: "10px", fontSize: "12px", color: "#0066ff", fontWeight: "bold" }}>
    OUR PARTNER'S
  </div>

 

  <h2
    style={{
      fontSize: "28px",
      fontWeight: "500",
      color: "#374151", // Tailwind's gray-700
      margin: 0,
    }}
  >
    Our Motivated Team
  </h2>
</div>





<div
  style={{
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
  }}
>
  {/* Image */}
  <>
  <style>
    {`
      @keyframes fadeInOut {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `}
  </style>

<>
  <style>
    {`
      @keyframes shadowPulse {
        0%, 100% { box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        50% { box-shadow: 0 0 20px rgba(0,0,0,0.4); }
      }
    `}
  </style>
<>
  <style>
    {`
      @keyframes fadeInOut {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `}
  </style>

  <img
    src="https://craftedcampus.com/wp-content/uploads/2025/02/istockphoto-1346125184-612x612-1.webp"
    alt="Team"
    style={{
      width: '100%',
      height: 'auto',
      maxWidth: '1120px',
      borderRadius: '6px',
      margin: '0 auto',
      display: 'block',
    }}
  />
</>

</>

</>
<br/>

  {/* Small description */}
  <p
    style={{
      fontSize: '15px',
      color: '#4b5563',
      marginTop: '10px',
      marginBottom: '5px',
      paddingLeft: '60px',
      paddingRight: '60px',
    }}
  >
    At Crafted Campus, we collaborate with a network of esteemed partners to deliver comprehensive digital solutions. Our partnerships enhance our capabilities in web development, mobile applications, eCommerce, and digital marketing, ensuring we provide innovative and
  </p>

  {/* Heading */}
  <h2
    style={{
      fontSize: '30px',
      color: '#4a535eff',
      fontWeight: 'bold',
      marginTop: '5px',
    }}
  >
    Business that trust us
  </h2>
</div>








<>
  <style>
    {`
      @keyframes pulseScale {
        0%, 100% {
          transform: scale(1);
          filter: brightness(1);
        }
        50% {
          transform: scale(1.05);
          filter: brightness(1.2);
        }
      }

      .partner-item {
        animation: pulseScale 5s ease-in-out infinite;
        transition: transform 0.3s ease;
        cursor: pointer;
      }

      .partner-item:hover {
        transform: scale(1.1);
      }
    `}
  </style>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      flexWrap: 'wrap',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
    }}
  >
    {partnerLogos.map((partner, index) => (
      <div
        key={index}
        className="partner-item"
        style={{
          textAlign: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            backgroundColor: '#ff477e',
            borderRadius: '50%',
            width: '130px',
            height: '130px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto 10px',
          }}
        >
          <img
            src={partner.logo}
            alt={partner.name}
            style={{
              maxWidth: '60px',
              maxHeight: '60px',
            }}
          />
        </div>
        <p
          style={{
            color: '#374151',
            fontSize: '16px',
            margin: 0,
          }}
        >
          {partner.name}
        </p>
      </div>
    ))}
  </div>
</>





    <>
      {/* Embedded Styles for animations and responsiveness */}
      <style>
        {`
          @keyframes shine {
            0% { left: -75%; }
            100% { left: 125%; }
          }

          @keyframes pulseScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }

          @keyframes slideX {
            0% { transform: translateX(0); }
            100% { transform: translateX(150px); }
          }

          @keyframes fadeSlideIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .contact-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 40px 20px;
          }

          .img-card, .pulse-card {
            position: relative;
            border-radius: 6px;
            overflow: hidden;
          }

          .img-card {
            width: 300px;
            height: 400px;
          }

          .pulse-card {
            width: 300px;
            height: 200px;
          }

          .shine {
            position: absolute;
            top: 0;
            left: -75%;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              120deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.4) 50%,
              rgba(255,255,255,0) 100%
            );
            transform: skewX(-25deg);
            animation: shine 2.5s infinite;
            pointer-events: none;
          }

          .slide-box {
            background-color: #00d9ff;
            color: white;
            padding: 12px 16px;
            font-weight: bold;
            font-size: 16px;
            text-align: left;
            border-radius: 6px;
            width: 100%;
            max-width: 400px;
            animation: slideX 4s ease-in-out infinite alternate;
            margin-top: 10px;
          }

          .info-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
            background: #fff;
            padding: 60px 20px;
          }

          .contact-info, .contact-form {
            flex: 1 1 320px;
            max-width: 500px;
          }

          .animated-container {
            background: #111827;
            color: #fff;
            border-radius: 8px;
            padding: 20px;
            animation: fadeSlideIn 0.8s ease-out forwards;
            opacity: 0;
          }

          .animated-item {
            display: flex;
            margin-bottom: 20px;
            animation: fadeSlideIn 0.8s ease-out forwards;
            opacity: 0;
          }

          .icon-box {
            background-color: #4B5563;
            width: 36px;
            height: 36px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            font-size: 18px;
            color: #fff;
          }

          .contact-form {
            background: #faf1ec;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
            padding: 30px;
            transition: background-color 0.3s ease;
          }

          .contact-form:hover {
            background-color: #f0e6e1;
          }

          .contact-form h3 {
            text-align: center;
            font-size: 26px;
            font-weight: bold;
            color: #004fcc;
            margin-bottom: 20px;
            cursor: pointer;
          }

          .form-row {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 15px;
          }

          .form-row input, .contact-form textarea {
            flex: 1 1 140px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .contact-form textarea {
            width: 100%;
            resize: none;
          }

          .contact-form-btn {
            background-color: #0066ff;
            color: #fff;
            padding: 10px 25px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease;
          }

          .contact-form-btn:hover {
            background-color: #004acc;
          }

          @media (max-width: 768px) {
            .contact-wrapper {
              flex-direction: column;
              align-items: center;
            }

            .img-card, .pulse-card {
              width: 90%;
              max-width: 400px;
            }

            .slide-box {
              font-size: 14px;
              padding: 10px;
            }
          }
        `}
      </style>

      {/* Top Section with Image Cards */}
      <div className="contact-wrapper">
        {/* Left Image */}
        <div className="img-card">
          <img
            src="https://craftedcampus.com/wp-content/uploads/2025/02/1705041419958.webp"
            alt="Left"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="shine" />
        </div>

        {/* Right Image with animated box */}
        <div className="pulse-card">
          <img
            src="https://craftedcampus.com/wp-content/uploads/2025/02/What-is-Data-Analytics-e1739157317705.webp"
            alt="Right"
            style={{
              borderRadius: "6px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              animation: "pulseScale 5s ease-in-out infinite",
            }}
          />
          <div className="slide-box">
            <div style={{ fontSize: "12px", fontWeight: "normal" }}>
              To discuss rates, work process, payment options, terms & conditions:
            </div>
            <div style={{ fontSize: "18px", marginTop: "5px" }}>
              Get in touch with us today.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section with Contact Info and Form */}
      <div className="info-section">
        {/* Left: Info */}
        <div className="contact-info">
          <div style={{ color: "#0066ff", fontSize: "12px", fontWeight: "bold" }}>
            CONTACT US
          </div>
          <h2 style={{ fontSize: "24px", color: "#374151", margin: "10px 0 30px" }}>
            Benefits of Working <br /> With Us!
          </h2>
          <div className="animated-container">
            {/* Location */}
            <div className="animated-item" style={{ animationDelay: "0.2s" }}>
              <div className="icon-box">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Location</div>
                <div style={{ fontSize: "13px" }}>
                  Address: GN 34/1, Aurora Waterfront, Unit-820
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="animated-item" style={{ animationDelay: "0.4s" }}>
              <div className="icon-box">
                <i className="fas fa-phone-alt" />
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Phone Number</div>
                <div style={{ fontSize: "13px" }}>+91 81000 71784</div>
              </div>
            </div>

            {/* Email */}
            <div className="animated-item" style={{ animationDelay: "0.6s" }}>
              <div className="icon-box">
                <i className="far fa-envelope-open" />
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>Email Address</div>
                <div style={{ fontSize: "13px", color: "#ffffff" }}>
                  info@craftedcampus.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <h3>Get in touch</h3>
          </Link>
          <div className="form-row">
            <input type="text" placeholder="Your name here" />
            <input type="email" placeholder="Your email here" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Your subject here" />
            <input type="text" placeholder="Your phone number here" />
          </div>
          <textarea rows="4" placeholder="Tell us a few words..." />
          <button className="contact-form-btn">SEND MESSAGE</button>
        </div>
      </div>
    </>





    </>
  );
};

export default Partner;
