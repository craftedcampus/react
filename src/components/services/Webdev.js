import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const styles = `
  @keyframes danceX {
    0%, 100% { transform: rotateX(0deg); }
    50% { transform: rotateX(15deg); }
  }
  .dancing-img {
    animation: danceX 2s ease-in-out infinite;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`;


const Webdev = () => {

  const navigate = useNavigate();

  const slides = [
    '/page-title.webp',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
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
          top: 0, left: 0, right: 0, bottom: 0,
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
            Web Development
          </h1>
          <h1 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>
            Home {'>>'} Web Development
          </h1>
        </div>
      </div>
    </section>



  <div className="services-container" style={{ display: 'flex' }}>


      {/* Sidebar */}
     <div style={{ backgroundColor: '#ffffff', padding: '40px', boxSizing: 'border-box' }}>
  <div className="sidebar" style={{ padding: '20px', backgroundColor: '#d4effaff', width: '350px',borderRadius: '12px' }}>
    <h3 style={{ color: '#2c3e50' }}>Main Services</h3>

    {/* Menu Buttons */}
   <div className="menu">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#d4effaff' }}>
        <button onClick={() => navigate('/services/appdev')} style={{
          backgroundColor: '#ffffff',
          color: '#000',
          padding: '12px 16px',
          border: 'none',
          borderRadius: '8px',
          width: '100%',
          textAlign: 'left'
        }}>
          App Development &nbsp; &gt;
        </button>

        <button onClick={() => navigate('/services/digitalmarketing')} style={{
          backgroundColor: '#ffffff',
          color: '#000',
          padding: '12px 16px',
          border: 'none',
          borderRadius: '8px',
          width: '100%',
          textAlign: 'left'
        }}>
          Digital Marketing &nbsp; &gt;
        </button>

        <button onClick={() => navigate('/services/ecommercedev')} style={{
          backgroundColor: '#ffffff',
          color: '#000',
          padding: '12px 16px',
          border: 'none',
          borderRadius: '8px',
          width: '100%',
          textAlign: 'left'
        }}>
          ECommerce &nbsp; &gt;
        </button>

        <button onClick={() => navigate('/services/webdev')} style={{
          backgroundColor: '#1e2a38',
          color: '#ffffff',
          padding: '12px 16px',
          border: 'none',
          borderRadius: '8px',
          width: '100%',
          textAlign: 'left'
        }}>
          Web Development &nbsp; &gt;
        </button>
      </div>  
    </div>
  </div>
  <br/><br/>

  <div className="sidebar" style={{ padding: '20px', backgroundColor: '#d4effaff', width: '350px',borderRadius: '12px' }}>
    <h3 style={{ color: '#2c3e50' }}>Brochures</h3>

    {/* Brochure Section */}
  <div style={{ backgroundColor: '#d4effaff', padding: '20px', marginTop: '30px', borderRadius: '8px' }}>
    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #ddd'
    }}>
      <div style={{
        backgroundColor: '#1e2a38',
        color: '#fff',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <i className="fas fa-file-pdf" style={{ fontSize: '20px' }}></i>
      </div>
      <a
        href="/path-to-brochure.pdf"
        style={{ padding: '12px 16px', textDecoration: 'none', color: '#1e2a38', fontWeight: '500' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Our Brochure
      </a>
    </div>
  </div>

   
  </div>

  <div className="sidebar" style={{ padding: '20px', backgroundColor: '#ffffffff', width: '350px' }}>
    

    {/* Support Box */}
    <div style={{
      backgroundColor: '#1e2a38',
      color: 'white',
      borderRadius: '4px',
      padding: '30px',
      width: '280px',
      textAlign: 'center',
      position: 'relative',
      marginTop: '40px'
    }}>
      <>
  <style>{`
    @keyframes vibrate {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }

    .vibrate-every-3s {
      animation: vibrate 0.3s ease-in-out infinite;
      animation-iteration-count: 1;
      animation-delay: 0s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      animation-play-state: running;
      animation-direction: normal;
      animation-iteration-count: 1;
      animation-delay: 3s;
      animation-fill-mode: forwards;
      animation-play-state: running;
      animation-iteration-count: infinite;
      animation-delay: 3s;
      animation-fill-mode: forwards;
      animation-play-state: running;
      animation-iteration-count: infinite;
    }
  `}</style>

  <div
    className="vibrate-every-3s"
    style={{
      position: "absolute",
      top: "-30px",
      left: "calc(50% - 30px)",
      backgroundColor: "#ff4c93",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <i className="fas fa-headset" style={{ color: "#fff", fontSize: "24px" }}></i>
  </div>
</>

      <h3 style={{ marginTop: '40px' }}>How Can We Help?</h3>
      <p style={{ margin: '10px 0' }}>
        <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
        +91 81000 71784
      </p>
      <p>
        <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
        info@craftedcampus.com
      </p>
    </div>
  </div>
  
</div>



     {/* Content */}
      <div className="content" style={{ padding: '20px', maxWidth: '850px', margin: '0 auto',paddingRight: '100px'  }}>

        <>
    {/* CSS keyframes animation */}
    <style>
      {`
        @keyframes pulseLight {
          0%   { opacity: 1; filter: brightness(100%); }
          50%  { opacity: 0.85; filter: brightness(110%); }
          100% { opacity: 1; filter: brightness(100%); }
        }

        .light-animate {
          animation: pulseLight 5s infinite ease-in-out;
        }
      `}
    </style>

    {/* Image with animation class */}
   <>
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

      .shine-wrapper {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        max-width: 600px;
        margin: 20px auto;
      }

      .shine-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: -75%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
          120deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.4) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: skewX(-25deg);
        animation: shine 2.5s infinite;
        pointer-events: none;
        border-radius: 12px;
      }
    `}
  </style>

  <div className="shine-wrapper">
    <img
      src="https://craftedcampus.com/wp-content/uploads/2024/02/service-14.jpg"
      alt="Service Visual"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        display: 'block',
      }}
    />
  </div>
</>

  </>


<br/>
  <h2 style={{ color: '#2c3e50' }}>Web Development</h2>
  <p style={{ color: '#555', lineHeight: '1.6' }}>
    Web designing is a long established fact that a reader will be distracted by the readable content of a page when 
    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
    as opposed to using ‘Content here, content here’, making it look like readable English.
  </p>


  <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>

  {/* Bullet Points Section */}
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '30px' }}>
    <div style={{ width: 'calc(50% - 20px)', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#ff4c93', fontSize: '18px', marginRight: '10px' }}>✓</span>
      <strong>Marketing options and rates</strong>
    </div>
    <div style={{ width: 'calc(50% - 20px)', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#ff4c93', fontSize: '18px', marginRight: '10px' }}>✓</span>
      <strong>Research beyond the business plan</strong>
    </div>
    <div style={{ width: 'calc(50% - 20px)', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#ff4c93', fontSize: '18px', marginRight: '10px' }}>✓</span>
      <strong>The ability to turnaround consulting</strong>
    </div>
    <div style={{ width: 'calc(50% - 20px)', display: 'flex', alignItems: 'center' }}>
      <span style={{ color: '#ff4c93', fontSize: '18px', marginRight: '10px' }}>✓</span>
      <strong>Customer engagement matters</strong>
    </div>
  </div>

  {/* Supporting Paragraph */}
  <p style={{ color: '#555', lineHeight: '1.6', maxWidth: '900px', marginBottom: '50px' }}>
    The team also drives long-term business growth through strategic digital marketing, SEO, and continuous optimization, 
    adapting to evolving market trends and user expectations.
  </p>

  {/* Service Cards */}
 <>
      <style>{styles}</style>
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          padding: '20px 40px',
          maxWidth: '1200px',
          margin: '0 auto',
          color: '#faf1ec',
          backgroundColor:'#faf1ec',
        }}
      >
        {/* Card 1 */}
        <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
          <img
            src="https://craftedcampus.com/wp-content/uploads/2025/02/WordPress-logotype-alternative-1-e1739166054280-1536x708.webp"
            alt="WordPress"
            className="dancing-img"
            style={{ height: '50px', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <h3>WordPress Development</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Crafted Campus builds custom, scalable WordPress solutions, ensuring top performance, security, and seamless experiences
            for new websites, optimizations, and custom plugins.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
          <img
            src="https://craftedcampus.com/wp-content/uploads/2025/02/Wix-Emblem-1536x864.png"
            alt="Wix"
            className="dancing-img"
            style={{ height: '50px', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <h3>Wix Development</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Crafted Campus creates high-performance Wix websites, from portfolios to eCommerce stores, ensuring sleek design,
            functionality, and growth-focused optimization for your business.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
          <img
            src="https://craftedcampus.com/wp-content/uploads/2023/09/458175.webp"
            alt="React Development"
            className="dancing-img"
            style={{ height: '50px', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <h3>React Development</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Crafted Campus excels in React development, building scalable, interactive web apps, dashboards, and headless
            solutions for seamless, modern business experiences.
          </p>
        </div>

        {/* Card 4 */}
        <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
          <img
            src="https://e7.pngegg.com/pngimages/791/820/png-clipart-software-development-custom-software-computer-software-web-development-mobile-app-development-others-miscellaneous-web-design.png"
            alt="Custom Development"
            className="dancing-img"
            style={{ height: '50px', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <h3>Custom Development</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Crafted Campus delivers custom software solutions, building web apps, mobile apps, integrations, and digital experiences
            with scalability, innovation, and high performance tailored to your business needs.
          </p>
        </div>

        {/* Card 5 */}
        <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
          <img
            src="https://craftedcampus.com/wp-content/uploads/2023/09/maintenance-icon-for-your-website-mobile-presentation-and-logo-design-free-vector-e1739260022147.jpg"
            alt="Website Maintenance"
            className="dancing-img"
            style={{ height: '50px', marginBottom: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          <h3>Website Maintenance</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            Crafted Campus maintains legacy websites with expert updates, security, and optimizations, ensuring WordPress, Wix, PHP,
            and other platforms stay functional, secure, and up to date.
          </p>
        </div>
      </section>
    </>
</div>


 

</div>

    </div>


    
    </>
  );
};

export default Webdev;
