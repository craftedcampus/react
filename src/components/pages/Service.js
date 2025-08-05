
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServicesGrid from '../services/ServicesGrid';
import AnimatedBanner from '../services/AnimatedBanner';
import {
  faPaintBrush,
  faLaptopCode,
  faLightbulb,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';





const testimonials = [
  {
    name: 'Zachary Holden',
    quote:
      "We've used web design agency for the last five years. We can't understand how we've been living without web design agency. Thank You!",
  },
  {
    name: 'Daniel Johann',
    quote:
      "I am so pleased with this product. Absolutely wonderful! You won't regret it. It's really wonderful. Definitely worth the investment.",
  },
  {
    name: 'Alannah Jeffcott',
    quote:
      "I'd be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.",
  },
];






const Service = () => {






  const services = [
    { title: 'Web Designing', icon: faPaintBrush },
    { title: 'Web Development', icon: faLaptopCode },
    { title: 'Web Application', icon: faLightbulb },
    { title: 'Digital & Marketing', icon: faShoppingCart },
  ];

  const testimonials = [
  {
    name: "Zachary Holden",
    quote:
      "We've used web design agency for the last five years. We can't understand how we've been living without web design agency. Thank You!",
  },
  {
    name: "Daniel Johann",
    quote:
      "I am so pleased with this product. Absolutely wonderful! You won't regret it. It's really wonderful. Definitely worth the investment.",
  },
  {
    name: "Alannah Jeffcott",
    quote:
      "I'd be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.",
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





  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: 24,
    padding: "40px 20px",
    backgroundColor: "#f8fafc", // subtle light background
    flexWrap: "wrap",
  };

  const nameStyle = {
    fontSize: 14,
    color: "#334155",
    marginBottom: 8,
    fontWeight: 500,
    maxWidth: 340,
    paddingLeft: 8,
  };

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: "20px 24px",
    boxShadow: "0 4px 15px rgba(255, 60, 126, 0.15)",
    maxWidth: 340,
    position: "relative",
    borderBottom: "4px solid #0066ff",
    minHeight: 160,
    display: "flex",
    flexDirection: "column",
  };

  const quoteIconStyle = {
    position: "absolute",
    top: 8,
    right: 12,
    fontSize: 36,
    color: "#0066ff",
    fontWeight: "bold",
    lineHeight: 1,
    userSelect: "none",
  };

  const quoteTextStyle = {
    fontSize: 15,
    lineHeight: 1.7,
    color: "#475569",
    marginTop: 12,
    whiteSpace: "normal",
    fontWeight: 400,
    flexGrow: 1,
  };



  return (
    <>




 <>
    <style>{`
      .service-banner {
        position: relative;
        background-size: cover;
        background-position: center;
        height: 550px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: Poppins, sans-serif;
        transition: background-image 1s ease-in-out;
        padding-left: 150px;
        text-align: left;
        align-items: flex-start;
        padding-right: 20px;
      }

      .overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: rgba(0,0,0,0.5);
        z-index: 0;
      }

      .content {
        position: relative;
        z-index: 1;
        width: 100%;
      }

      @media (max-width: 768px) {
        .service-banner {
          padding-left: 20px !important;
          text-align: center !important;
          align-items: center !important;
        }

        .service-banner h1:first-child {
          font-size: 28px !important;
        }
        .service-banner h1:last-child {
          font-size: 16px !important;
        }
      }
    `}</style>

    <section
      className="service-banner"
      style={{
        backgroundImage: `url(${slides[current]})`,
      }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1 style={{ fontSize: "48px", lineHeight: 1.3, margin: 0 }}>
          Our Services
        </h1>
        <h1 style={{ fontSize: "18px", lineHeight: 1.3, margin: 0 }}>
          Home {'>>'} Our Services
        </h1>
      </div>
    </section>
  </>




<section style={{
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
  }}>
    <p
    style={{
      color: '#0066ff',
      fontWeight: 'bold',
      letterSpacing: '1px',
      fontSize: '14px',
      marginBottom: '8px',
    }}
  >
    What We Do
  </p>
  <h2
    style={{
      fontSize: '32px',
      color: '#2c3e50',
      marginBottom: '50px',
    }}
  >
    Services That Help You Grow.
  </h2>


  <ServicesGrid/>
   

</section>




<section style={{
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
  }}>
    <p
    style={{
      color: '#0066ff',
      fontWeight: 'bold',
      letterSpacing: '1px',
      fontSize: '14px',
      marginBottom: '8px',
    }}
  >
    Our Testimonials
  </p>
  <h2
    style={{
      fontSize: '32px',
      color: '#2c3e50',
      marginBottom: '50px',
    }}
  >
    What They’re Saying?
  </h2>
    <div style={containerStyle}>
      {testimonials.map(({ name, quote }, i) => (
        <div key={i}>
          <div style={nameStyle}>{name}</div>
          <div style={cardStyle}>
            <div style={quoteIconStyle}>❝</div>
            <div style={quoteTextStyle}>{quote}</div>
          </div>
        </div>
      ))}
    </div>

</section>



<AnimatedBanner/>


    
<section style={{
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
  }}>
    <p
    style={{
      color: '#0066ff',
      fontWeight: 'bold',
      letterSpacing: '1px',
      fontSize: '14px',
      marginBottom: '8px',
    }}
  >
    Work Process
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
    </div>











    </>
  );
};

export default Service;
