
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaintBrush,
  faLaptopCode,
  faLightbulb,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const services = [
    { title: 'Web Designing', icon: faPaintBrush },
    { title: 'Web Development', icon: faLaptopCode },
    { title: 'Web Application', icon: faLightbulb },
    { title: 'Digital & Marketing', icon: faShoppingCart },
  ];

  const testimonials = [
    {
      name: 'Zachary Holden',
      text: "We've used web design agency for the last five years. We can't understand how we've been living without web design agency. Thank You!",
    },
    {
      name: 'Daniel Johann',
      text: "I am so pleased with this product. Absolutely wonderful! You won't regret it. It's really wonderful. Definitely worth the investment.",
    },
    {
      name: 'Alannah Jeffcott',
      text: "I'd be lost without web design agency. Web design agency is the most valuable business resource we have ever purchased.",
    },
  ];


  const slides = [
    '/page-title.webp',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80', 
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // slide every 5 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <>




 <section
      style={{
        position: 'relative',
        backgroundImage: `url(${slides[current]})`,
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
            About Us
          </h1>
          <h1 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>
            Home {'>>'} About Us
          </h1>
        </div>
      </div>
    </section>


    

<div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "60px 40px",
        fontFamily: "Arial, sans-serif",
        gap: "40px",
        alignItems: "flex-start",
        backgroundColor: "#fff",
      }}
    >
      {/* LEFT COLUMN (Images) */}
      <div style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}>
      <div
  style={{
    marginBottom: "20px",
    backgroundColor: "#fff",
    padding: "8px",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    overflow: "hidden",
    animation: "zoomInOut 4s ease-in-out infinite",
  }}
>
  <img
    src="https://craftedcampus.com/wp-content/uploads/2023/09/about-06.jpg"
    alt="Team"
    style={{
      width: "100%",
      borderRadius: "10px",
      objectFit: "cover",
      display: "block",
    }}
  />

  <style>
    {`
      @keyframes zoomInOut {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }
    `}
  </style>
</div>


     <div style={{ display: "flex", gap: "20px", position: "relative" }}>
  <img
    src="https://craftedcampus.com/wp-content/uploads/2023/09/about-07.jpg"
    alt="Hands writing"
    style={{
      width: "60%",
      borderRadius: "10px",
      height: "220px",
      objectFit: "cover",
      position: "relative",
      zIndex: 1,
    }}
  />
  <div
    style={{
      width: "50%",
      backgroundColor: "#fff0f3",
      padding: "15px",
      borderRadius: "10px",
      fontSize: "14px",
      fontStyle: "italic",
      lineHeight: "1.5",
      color: "#333",
      border: "2px solid #0066ff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      animation: "slideX 2s ease-in-out infinite alternate",
      overflow: "hidden",
      position: "relative",
      zIndex: 2, // keep quote on top
    }}
  >
    “If you want real marketing that works and effective effect – Flyweb got you covered.”
    <strong style={{ display: "block", marginTop: "10px" }}>
      – Julian Tout
    </strong>
  </div>

  <style>
    {`
      @keyframes slideX {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100px); /* move left more */
        }
      }
    `}
  </style>
</div>


      </div>

      {/* RIGHT COLUMN (Content) */}
     <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "flex-start",
    justifyContent: "space-between",
  }}
>
  {/* LEFT COLUMN */}
  <div style={{ flex: "1 1 300px", maxWidth: "600px" }}>
    <p
      style={{
        color: "#0066ff",
        fontSize: "12px",
        fontWeight: "bold",
        letterSpacing: "1px",
        marginBottom: "10px",
        textTransform: "uppercase",
      }}
    >
      About Us
    </p>

    <h2
      style={{
        fontSize: "24px",
        color: "#2c3e50",
        marginBottom: "16px",
        lineHeight: "1.4",
      }}
    >
      Why We Are Different Digital agency
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#6c7a89",
        marginBottom: "24px",
        lineHeight: "1.6",
      }}
    >
      We deliver top-tier design services tailored to meet your needs, combining creativity,
      functionality, and expertise to ensure exceptional results.
    </p>

    <h3 style={{ fontSize: "16px", color: "#2c3e50", marginBottom: "6px" }}>
      Web solutions
    </h3>
    <p
      style={{
        fontSize: "14px",
        color: "#6c7a89",
        marginBottom: "18px",
        lineHeight: "1.6",
      }}
    >
      Crafted Campus offers tailored web solutions, including responsive web design, development,
      custom applications, and digital marketing strategies, all aimed at enhancing user experience
      and driving business growth.
    </p>

    <h3 style={{ fontSize: "16px", color: "#2c3e50", marginBottom: "6px" }}>
      Best interface
    </h3>
    <p
      style={{
        fontSize: "14px",
        color: "#6c7a89",
        marginBottom: "24px",
        lineHeight: "1.6",
      }}
    >
      Crafted Campus specializes in creating the best interfaces, combining intuitive design with
      seamless functionality to provide users with an engaging, easy-to-navigate experience that
      enhances overall digital interaction.
    </p>

    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        marginTop: "30px",
        flexWrap: "wrap",
      }}
    >
      <button className='my-button'
        style={{
          backgroundColor: "#0066ff",
          color: "#fff",
          padding: "12px 24px",
          fontSize: "14px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        GET STARTED
      </button>
      <div>
        <div style={{ fontWeight: "bold", fontSize: "16px", color: "#1f2937" }}>
          Md Tanweer
        </div>
        <div style={{ fontSize: "13px", color: "#6b7280" }}>Co Founder</div>
      </div>
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div style={{ flex: "1 1 160px", maxWidth: "200px" }}>
    <div
      style={{
        backgroundColor: "#fefcfc",
        borderRadius: "10px",
        padding: "15px",
        borderBottom: "4px solid #0066ff",
        width: "100%",
        textAlign: "center",
      }}
    >
     
      <div
  style={{
    backgroundColor: '#f0f4f8', // whole card background color
    borderRadius: '10px',
    padding: '20px',
    width: '160px',
    textAlign: 'center',
  }}
>
  {/* The circle ball */}
  <div
    style={{
      width: '50px',
      height: '50px',
      backgroundColor: '#1d2939', // dark circle
      borderRadius: '50%',
      margin: '0 auto 10px',
    }}
  ></div>

  {/* The text */}
 <div
  style={{
    fontSize: '13px',
    color: '#374151',
    fontWeight: 500,
    lineHeight: '1.4',
    display: 'inline-block', // so transform origin works nicely
    animation: 'rotateXY 3s ease-in-out infinite alternate',
    transformStyle: 'preserve-3d', // keep 3D effect smooth
  }}
>
  Trusted By Our <br /> Clients

  <style>
    {`
      @keyframes rotateXY {
        0% {
          transform: rotateX(0deg) rotateY(0deg);
        }
        50% {
          transform: rotateX(30deg) rotateY(30deg);
        }
        100% {
          transform: rotateX(0deg) rotateY(0deg);
        }
      }
    `}
  </style>
</div>

</div>

    </div>
  </div>
</div>

    </div>






   

      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '40px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          minHeight: '300px',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,

          }}
        />

        {/* Left Text */}
        <div
          style={{
            zIndex: 1,
            maxWidth: '500px',
            padding: '20px',
          }}
        >
          <p
            style={{
              color: '#0066ff',
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '10px',
            }}
          >
            WHY CHOOSE US
          </p>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: 'bold',
              marginBottom: '30px',
              lineHeight: '1.2',
            }}
          >
            Our company is trusted by <br /> hundreds of customers.
          </h2>
          <button className='my-button'
            style={{
              backgroundColor: '#0066ff',
              color: '#fff',
              border: 'none',
              padding: '14px 30px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            GET FREE QUOTE
          </button>
        </div>

        {/* Right Services */}
       <div
  style={{
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px',
    padding: '20px',
    maxWidth: '600px',
  }}
>
  <style>
    {`
      .service-card {
        background-color: rgba(255, 255, 255, 0.05);
        padding: 30px 20px;
        border-radius: 8px;
        text-align: center;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }

      .service-card:hover {
        background-color: #ffffff;
      }

      .service-icon {
        font-size: 32px;
        margin-bottom: 15px;
        color: #ffffff;
        transition: color 0.3s ease;
      }

      .service-card:hover .service-icon {
        color: #0066ff; /* blue on hover */
      }
    `}
  </style>

  {services.map((item, index) => (
    <div key={index} className="service-card">
      <div className="service-icon">
        <FontAwesomeIcon icon={item.icon} />
      </div>
      <p
        style={{
          fontSize: '16px',
          fontWeight: '500',
          margin: 0,
        }}
      >
        {item.title}
      </p>
    </div>
  ))}
</div>

      </div>






      {/* Work Process Section */}
     <div
  style={{
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
  }}
>
  <p
    style={{
      color: '#0066ff',
      fontWeight: 'bold',
      letterSpacing: '1px',
      fontSize: '14px',
      marginBottom: '8px',
    }}
  >
    WORK PROCESS
  </p>
  <h2
    style={{
      fontSize: '32px',
      color: '#2c3e50',
      marginBottom: '50px',
    }}
  >
    Our Working Process
  </h2>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '40px',
    }}
  >
    {['Design', 'Strategy', 'Develop'].map((step, i) => (
      <div key={i} style={{ width: '260px', textAlign: 'center' }}>
        <div
          className="hover-scale-img"
          style={{
            position: 'relative',
            width: '160px',
            height: '160px',
            margin: '0 auto 20px',
            borderRadius: '50%',
            overflow: 'hidden',
            transition: 'transform 0.4s ease-in-out',
            cursor: 'pointer',
          }}
        >
          <img
            src="https://craftedcampus.com/wp-content/uploads/2025/02/process-03.jpg"
            alt={step}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              width: '36px',
              height: '36px',
              backgroundColor: '#0066ff',
              color: '#fff',
              borderRadius: '50%',
              fontWeight: 'bold',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 4px rgba(0,0,0,0.2)',
            }}
          >
            0{i + 1}
          </div>
        </div>

        <h3
          style={{
            fontSize: '18px',
            color: '#2c3e50',
            marginBottom: '10px',
          }}
        >
          {step}
        </h3>
        <p style={{ fontSize: '15px', color: '#6c7a89', lineHeight: '1.6' }}>
          {step === 'Design' &&
            'Creative, intuitive, elegant design that inspires, engages, and delivers results.'}
          {step === 'Strategy' &&
            'Strategic planning drives growth, aligns goals, and ensures lasting success.'}
          {step === 'Develop' &&
            'We develop smart, scalable solutions that drive innovation and performance.'}
        </p>
      </div>
    ))}
  </div>
</div>


      {/* Testimonials */}
      <section style={{ background: '#f8f9fb', padding: '60px 20px', textAlign: 'center' }}>
        <h4
          style={{
            color: '#0066ff',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          Our Testimonials
        </h4>
        <div
          style={{
            width: 50,
            height: 2,
            backgroundColor: '#0066ff',
            margin: '0 auto 30px',
          }}
        ></div>
        <h2 style={{ fontSize: '32px', color: '#374151', marginBottom: '40px' }}>
          What They’re Saying?
        </h2>

       <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  }}
>
  <style>
    {`
      .testimonial-card {
        background: #fff;
        border-radius: 10px;
        padding: 30px 25px 40px;
        max-width: 300px;
        text-align: left;
        position: relative;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        border-bottom: 5px solid #0066ff;
        transition: background 0.3s ease, color 0.3s ease;
        cursor: pointer;
      }

      .testimonial-card:hover {
        background-color: #9ec2f8ff;
        color: #fff;
      }

      .testimonial-card:hover .testimonial-text,
      .testimonial-card:hover .testimonial-name {
        color: #fff;
      }

      .quote-mark {
        color: #0066ff;
        font-size: 30px;
        font-weight: bold;
        position: absolute;
        top: 10px;
        right: 15px;
        transition: color 0.3s ease;
      }

      .testimonial-card:hover .quote-mark {
        color: #fff;
      }
    `}
  </style>

  {testimonials.map((item, index) => (
    <div key={index} className="testimonial-card">
      <div className="quote-mark">“</div>
      <p className="testimonial-text" style={{ fontSize: '15px', color: '#374151', lineHeight: 1.6 }}>
        {item.text}
      </p>
      <p className="testimonial-name" style={{ fontWeight: 'bold', marginTop: '20px', color: '#374151' }}>
        {item.name}
      </p>
    </div>
  ))}
</div>

      </section>
    </>
  );
};

export default About;
