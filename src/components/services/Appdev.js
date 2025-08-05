import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Appdev = () => {

  const navigate = useNavigate();


   const styles = `
    @keyframes danceX {
      0%, 100% { transform: rotateX(0deg); }
      50% { transform: rotateX(35deg); }
    }
  `;

  const dancingStyle = {
    width: '80px',
    height: '50px',
    animation: 'danceX 2s ease-in-out infinite',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
  };


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
            Application Development
          </h1>
          <h1 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>
            Home {'>>'} Application Development
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
          backgroundColor: '#1e2a38',
          color: '#ffffff',
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
  
</div><br/><br/>



      {/* Content */}
      <div className="content" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}><br/>
  <h2
  style={{
    color: '#2c3e50',
    fontWeight: '700',           // Bold (you can also use 600, 800, etc.)
    fontSize: '26px',            // Adjust font size as needed
    fontFamily: 'Poppins, sans-serif' // Optional if you're using Google Fonts
  }}
>
  Application Development
</h2>

  <p style={{ color: '#555', lineHeight: '1.6' }}>
    Crafted Campus specializes in application development, delivering high-quality, scalable, and user-friendly 
    mobile and web applications tailored to business needs. Their expert team develops custom applications for iOS, 
    Android, Flutter, Native and cross-platform environments using cutting-edge technologies like Flutter and 
    native development. With a strong focus on UI/UX design, security, and performance, they ensure seamless 
    functionality and an engaging user experience. Crafted Campus helps businesses grow by building innovative, 
    high-performance apps that drive results.
  </p>

 <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '20px'
  }}
>
  <div
    style={{
      width: '50%',
      padding: '0 20px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px'
    }}
  >
    <span style={{ color: '#ff4c93', marginRight: '10px' }}>✓</span>
    <strong>Scalability & Performance</strong>
  </div>

  <div
    style={{
      width: '50%',
      padding: '0 20px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px'
    }}
  >
    <span style={{ color: '#ff4c93', marginRight: '10px' }}>✓</span>
    <strong>Backend Integrations</strong>
  </div>

  <div
    style={{
      width: '50%',
      padding: '0 20px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px'
    }}
  >
    <span style={{ color: '#ff4c93', marginRight: '10px' }}>✓</span>
    <strong>User-centric Design</strong>
  </div>

  <div
    style={{
      width: '50%',
      padding: '0 20px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px'
    }}
  >
    <span style={{ color: '#ff4c93', marginRight: '10px' }}>✓</span>
    <strong>Custom solution</strong>
  </div>
</div>


  

  {/* Android & iOS Cards */}
 <>
      <style>{styles}</style>

      <div style={{ padding: '40px 0', background: '#faf1ec', }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 40px',
            marginTop: '40px',
            flexWrap: 'wrap',
            gap: '20px',
            color: '#faf1ec',
            backgroundColor:'#faf1ec',
          }}
        >
          {/* Android Development */}
          <div style={{ flex: '1', maxWidth: '300px', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
              <img
                src="https://craftedcampus.com/wp-content/uploads/2023/09/How-to-make-android-apps-Android-Brainvire.webp"
                alt="Android Logo"
                style={dancingStyle}
              />
            </div>
            <h3>Android Development</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Expert Android development, creating custom, high-performance mobile apps. They focus on seamless
              functionality, user experience, and scalability to help businesses thrive in the mobile-first world.
            </p>
          </div>

          {/* iOS Development */}
          <div style={{ flex: '1', maxWidth: '300px', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
              <img
                src="https://craftedcampus.com/wp-content/uploads/2023/09/747.webp"
                alt="iOS Logo"
                style={dancingStyle}
              />
            </div>
            <h3>iOS Development</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Specializes in iOS development, creating high-performance, user-friendly apps for Apple devices. They
              ensure seamless functionality, intuitive design, and scalability to enhance user engagement and business
              growth.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 40px',
            marginTop: '40px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {/* Native Development */}
          <div style={{ flex: '1', maxWidth: '300px', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
              <img
                src="https://craftedcampus.com/wp-content/uploads/2023/09/1200px-react-icon.svg1_.webp"
                alt="Native Logo"
                style={dancingStyle}
              />
            </div>
            <h3>Native Development</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Specializes in native development, creating high-performance mobile apps tailored for iOS and Android. They
              ensure seamless functionality, superior user experience, and scalability for business growth.
            </p>
          </div>

          {/* Flutter Development */}
          <div style={{ flex: '1', maxWidth: '300px', textAlign: 'center' }}>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
              <img
                src="https://craftedcampus.com/wp-content/uploads/2023/09/flutter.webp"
                alt="Flutter Logo"
                style={dancingStyle}
              />
            </div>
            <h3>Flutter Development</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Expert Flutter development, building cross-platform mobile apps with seamless performance, beautiful UI, and
              scalability. They create high-quality apps for both iOS and Android using a single codebase.
            </p>
          </div>
        </div>
      </div>
    </>


</div>

    </div>


 

    </>
  );
};

export default Appdev;
