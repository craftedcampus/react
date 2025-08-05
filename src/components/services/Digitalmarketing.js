import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = `
  @keyframes danceX {
    0%, 100% { transform: rotateX(0deg); }
    60% { transform: rotateX(35deg); }
  }
  .dancing-img {
    animation: danceX 2s ease-in-out infinite;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`;

const Digitalmarketing = () => {

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
    }, 5000); // change slide every 5 seconds

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
            Digital Marketing
          </h1>
          <h1 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>
            Home {'>>'} Digital Marketing
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
          backgroundColor: '#1e2a38',
          color: '#ffffff',
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
          backgroundColor: '#ffffff',
          color: '#000',
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
        max-width: 800px;
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
      src="https://craftedcampus.com/wp-content/uploads/2023/09/service-details-06.jpg"
      alt="Service Visual"
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        display: 'block',
        margin: '20px auto',
      }}
    />
  </div>
</>



<br/>
  <h2 style={{ color: '#2c3e50' }}>Digital Marketing</h2>
  <p style={{ color: '#555', lineHeight: '1.6' }}>
    Digital marketing involves strategies to enhance online visibility, increase website traffic, and engage customers. 
    It includes tactics like SEO, social media marketing, paid ads, content marketing, and email campaigns. The goal is 
    to boost brand awareness, generate leads, and increase conversions. Effective digital marketing requires analyzing 
    data to continuously improve strategies and achieve measurable business growth.
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
    Through customized branding, responsive web design, and digital marketing strategies,
    they deliver scalable results and help businesses establish a strong, lasting online presence.
  </p>

  {/* Service Cards */}
  <div
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
<>
      <style>{styles}</style>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          padding: '20px 40px',
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#faf1ec',
        }}
      >
        {/* Card 1 */}
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            padding: '40px',
            backgroundColor: '#faf1ec',
          }}
        >
          {/* Card 1: SEO */}
          <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
            <img
              src="https://craftedcampus.com/wp-content/uploads/2025/02/seo-search-engine-logo-with-magnifying-glass-and-arrow-vector-768x640-1-e1739238413752.webp"
              alt="SEO"
              className="dancing-img"
              style={{
                height: '50px',
                marginBottom: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <h3>Seo Marketing</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Crafted Campus offers expert SEO services, optimizing websites for higher search rankings,
              increased organic traffic, and better visibility. Their strategies enhance online presence
              and drive sustainable growth.
            </p>
          </div>

          {/* Card 2: Meta Ads */}
          <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
            <img
              src="https://craftedcampus.com/wp-content/uploads/2025/02/images.png"
              alt="Meta"
              className="dancing-img"
              style={{
                height: '50px',
                marginBottom: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <h3>Meta Ads</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Expert Meta Ads management, creating targeted campaigns to boost brand awareness,
              engagement, and conversions. They optimize ad strategies for maximum ROI across Facebook
              and Instagram.
            </p>
          </div>

          {/* Card 3: Google Ads */}
          <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
            <img
              src="https://craftedcampus.com/wp-content/uploads/2025/02/images.jpeg"
              alt="Google Ads"
              className="dancing-img"
              style={{
                height: '50px',
                marginBottom: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <h3>Google Ads</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Expert Google Ads management, helping businesses maximize ROI with targeted campaigns. They
              optimize ad strategies to drive traffic, increase conversions, and boost brand visibility
              effectively.
            </p>
          </div>

          {/* Card 4: GMB */}
          <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
            <img
              src="https://craftedcampus.com/wp-content/uploads/2025/02/google-my-business-icon-256x256-0fgvpbbn-e1739414588134.webp"
              alt="GMB"
              className="dancing-img"
              style={{
                height: '50px',
                marginBottom: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <h3>Google Local Listing (GMB)</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              We offer Google Local Listing services to enhance business visibility in local searches.
              They optimize listings for better reach, increased traffic, and improved customer
              engagement.
            </p>
          </div>

          {/* Card 5: Performance Marketing */}
          <div style={{ width: '300px', textAlign: 'center', flex: '0 1 45%' }}>
            <img
              src="https://craftedcampus.com/wp-content/uploads/2025/02/1686134607257-e1739163846500-768x529-1-e1739237734382.webp"
              alt="Performance Marketing"
              className="dancing-img"
              style={{
                height: '50px',
                marginBottom: '10px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <h3>Performance Marketing</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Specializes in performance marketing, driving measurable results through data-driven
              strategies. They optimize campaigns to increase engagement, conversions, and ROI, ensuring
              businesses achieve sustainable growth.
            </p>
          </div>
        </section>
      </div>
    </>

</div>

</div>


 

</div>

    </div>

    
    </>
  );
};

export default Digitalmarketing;
