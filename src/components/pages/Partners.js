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






    {/* Bottom Images with overlay */}
  <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
    {/* Left Image */}
    <div
  style={{
    position: "relative",
    width: "300px",
    height: "400px",
    borderRadius: "6px",
    overflow: "hidden", // to keep the shine inside the image border
  }}
>
  <img
    src="https://craftedcampus.com/wp-content/uploads/2025/02/1705041419958.webp"
    alt="Left"
    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
  />
  <div
    style={{
      position: "absolute",
      top: 0,
      left: "-75%",
      width: "50%",
      height: "100%",
      background:
        "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%)",
      transform: "skewX(-25deg)",
      animation: "shine 2.5s infinite",
      pointerEvents: "none", // so it doesn't block image interaction
      borderRadius: "6px",
    }}
  />
  <style>
    {`
      @keyframes shine {
        0% {
          left: -75%;
        }
        100% {
          left: 125%;
        }
      }
    `}
  </style>
</div>


    {/* Right Image with overlay */}
    <div style={{ position: "relative", width: "300px", height: "200px" }}>
      <>
  <style>
    {`
      @keyframes pulseScale {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
    `}
  </style>

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
</>

      <div
  style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    overflow: "hidden", // hide overflow so sliding is clean
  }}
>
  
</div>
<div
  style={{
    backgroundColor: "#00d9ffff",
    color: "#fff",
    padding: "12px 16px",
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "left",
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px",
    width: "400px",      
    height: "150px",     
    whiteSpace: "nowrap",
    animation: "slideX 4s ease-in-out infinite alternate",
    cursor: "pointer",
    margin: "0 auto", // center the card
    position: "relative", // optional for more layout control
    display: "inline-block",
  }}
>
  <div style={{ fontWeight: "normal", fontSize: "12px" }}>
    To discuss rates work process payment option terms & conditions etc:
  </div>
  <div style={{ fontSize: "18px", fontWeight: "bold", marginTop: "5px" }}>
    Get in touch with us today.
  </div>

  <style>
    {`
      @keyframes slideX {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(150px); /* Only move 30px to the right */
        }
      }
    `}
  </style>
</div>


    </div>
  </div>





<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "60px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  }}
>
  {/* Left Side: Contact Info */}
  <>
    <style>
      {`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animated-container {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animated-item {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
      `}
    </style>

    <div style={{ maxWidth: "400px", marginRight: "40px" }}>
      <div style={{ color: "#0066ff", fontSize: "12px", fontWeight: "bold" }}>
        CONTACT US
      </div>
      <h2 style={{ fontSize: "24px", color: "#374151", margin: "10px 0 30px" }}>
        Benefits of Working <br /> With Us!
      </h2>

      <div
        className="animated-container"
        style={{
          backgroundColor: "#111827",
          color: "#fff",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        {/* Location */}
        <div
          className="animated-item"
          style={{
            display: "flex",
            marginBottom: "20px",
            animationDelay: "0.2s",
            animationFillMode: "forwards",
          }}
        >
          <div
            style={{
              backgroundColor: "#4B5563",
              width: "36px",
              height: "36px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              fontSize: "18px",
              color: "#ffffff",
            }}
          >
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Location</div>
            <div style={{ fontSize: "13px" }}>
              Address: GN 34/1, Aurora Waterfront, Unit-820
            </div>
          </div>
        </div>

        {/* Phone */}
        <div
          className="animated-item"
          style={{
            display: "flex",
            marginBottom: "20px",
            animationDelay: "0.4s",
            animationFillMode: "forwards",
          }}
        >
          <div
            style={{
              backgroundColor: "#4B5563",
              width: "36px",
              height: "36px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              fontSize: "18px",
              color: "#ffffff",
            }}
          >
            <i className="fas fa-phone-alt"></i>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Phone Number</div>
            <div style={{ fontSize: "13px" }}>+91 81000 71784</div>
          </div>
        </div>

        {/* Email */}
        <div
          className="animated-item"
          style={{
            display: "flex",
            animationDelay: "0.6s",
            animationFillMode: "forwards",
          }}
        >
          <div
            style={{
              backgroundColor: "#4B5563",
              width: "36px",
              height: "36px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "12px",
              fontSize: "18px",
              color: "#ffffff",
            }}
          >
            <i className="far fa-envelope-open"></i>
          </div>
          <div>
            <div style={{ fontWeight: "bold" }}>Email Address</div>
            <div style={{ fontSize: "13px", color: "#ffffffff" }}>
              info@craftedcampus.com
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

  {/* Right Side: Form */}
<>
  <style>
    {`
      .contact-form {
        background-color: #faf1ecff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        padding: 30px;
        width: auto;
        transition: background-color 0.3s ease;
      }

      .contact-form:hover {
        background-color: #f0e6e1;
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
    `}
  </style>

  <div className="contact-form">
    <Link to="/contact" style={{ textDecoration: 'none' }}>
     <h3
       style={{
         textAlign: 'center',
         padding: '5px',
         fontSize: '26px',
         fontWeight: 'bold',
         color: '#004fcc',
         cursor: 'pointer',
       }}
     >
       Get in touch
     </h3>
   </Link>
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Your name here"
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="email"
        placeholder="Your email here"
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>

    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <input
        type="text"
        placeholder="Your subject here"
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      <input
        type="text"
        placeholder="Your phone number here"
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>

    <textarea
      placeholder="Tell us a few words"
      rows="4"
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: "15px",
      }}
    ></textarea>

    <button className="contact-form-btn">SEND MESSAGE</button>
  </div>
</>
</div>







    </>
  );
};

export default Partner;
