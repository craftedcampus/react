
import React, { useState, useEffect } from 'react';



const Career = () => {
  const jobs = [
    {
      title: "Graphic Designer & Video Editor",
      posted: "4 weeks ago",
      description:
        "Are you a creative powerhouse with a sharp eye for design and a passion for visual storytelling? Do you love turning ideas into stunning visuals and engaging video content? We’re looking for a talen...",
    },
    {
      title: "Shopify/WordPress Developer | Crafted Campus",
      posted: "2 months ago",
      description:
        "Are you skilled in designing and developing websites on Shopify and WordPress? Do you enjoy creating visually stunning and highly functional websites for businesses? Join our team as a Shopify/WordPre...",
    },
    {
      title: "Senior Web Consultant | Crafted Campus Pvt Ltd",
      posted: "2 months ago",
      description:
        "We are seeking passionate and experienced professionals to join our team as Web Consultants, Senior Web Consultants, and On-Call Supervisors. If you have strong sales skills, enjoy consulting, and can...",
    },
    {
      title: "Digital Marketing Executive | Crafted Campus",
      posted: "1 month ago",
      description:
        "Are you a passionate marketer with a knack for driving online growth? Do you thrive in a fast-paced environment where creativity meets strategy? Join our team as a Digital Marketing Executive and help...",
    },
    {
      title: "Web Designer | Crafted Campus",
      posted: "3 weeks ago",
      description:
        "Do you have an eye for design and a passion for creating stunning, user-friendly websites? Are you ready to collaborate with a dynamic team to bring ideas to life? Join us as a Web Designer and help c...",
    },
    {
      title: "Web Application Developer | Crafted Campus",
      posted: "1 month ago",
      description:
        "Are you a skilled developer with a passion for creating powerful and scalable web applications? Are you ready to take on exciting projects for international clients? Join us as a Web Application Devel...",
    },
    {
      title: "MERN Stack Developer | Crafted Campus",
      posted: "2 weeks ago",
      description:
        "Are you a MERN Stack Developer who loves building modern, scalable, and high-performing web applications? Ready to work on exciting international projects? Join us as a MERN Stack Developer and be par...",
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
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  return (
    <>
      {/* Hero Section */}
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
    alignItems: 'center',       // center by default (mobile)
    textAlign: 'center',         // center by default (mobile)
    padding: '0 20px',
    transition: 'background-image 1s ease-in-out',
  }}
>
  <style>{`
    @media (min-width: 769px) {
      .content-wrapper {
        padding-left: 150px !important;
        text-align: left !important;
        align-items: flex-start !important;
      }
    }
  `}</style>

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
    className="content-wrapper"
    style={{
      position: 'relative',
      zIndex: 1,
      width: '100%',
      fontFamily: 'Poppins, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',    // center on mobile by default
    }}
  >
    <div>
      <h1 style={{ fontSize: '48px', lineHeight: 1.3, margin: 0 }}>
        Career
      </h1>
      <h1 style={{ fontSize: '18px', lineHeight: 1.3, margin: 0 }}>
        Home {'>>'} Career
      </h1>
    </div>
  </div>
</section>


      {/* Intro Section */}
      <div
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          color: "#374151",
        }}
      >
       <>
  <h2
    style={{
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      animation: "colorChange 10s linear infinite",
      color: "#1f2937", // initial color (dark slate)
    }}
  >
    Careers at Crafted Campus Pvt Ltd
  </h2>
  <h3
    style={{
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "30px",
      animation: "colorChange 10s linear infinite",
      color: "#4b5563", // initial color (gray-600)
    }}
  >
    Join Our Team and Craft Your Future!
  </h3>

  <style>
    {`
      @keyframes colorChange {
        0%, 49.99% {
          color: #37351fff; /* dark slate */
        }
        50%, 100% {
          color: #eb9c25ff; /* blue-600 */
        }
      }
    `}
  </style>
</>


        <div
  style={{
    position: "relative",
    minHeight: "120px",
    fontSize: "16px",
    lineHeight: 1.6,
    overflow: "hidden",
  }}
>
  <p
    style={{
      marginBottom: "25px",
      position: "absolute",
      width: "100%",
      animation: "fadeInOut 10s linear infinite",
      animationDelay: "0s",
      opacity: 0,
    }}
  >
    At <strong>Crafted Campus Pvt Ltd</strong>, we believe that great people create great businesses. As a growing leader in academic solutions, digital marketing, and web development, we’re always on the lookout for talented individuals who are passionate about innovation, teamwork, and making an impact.
  </p>

  <p
    style={{
      marginBottom: "40px",
      position: "absolute",
      width: "100%",
      animation: "fadeInOut 10s linear infinite",
      animationDelay: "5s", // delayed to show after first paragraph
      opacity: 0,
    }}
  >
    Our mission is to deliver excellence in everything we do—from helping students succeed academically to empowering businesses to thrive online. And that starts with our people. If you’re ready to take your career to the next level and work in an environment where your ideas are valued, <strong>Crafted Campus</strong> is the place for you.
  </p>

  <style>
    {`
      @keyframes fadeInOut {
        0%, 45% { opacity: 1; }
        50%, 100% { opacity: 0; }
      }
    `}
  </style>
</div>


       <>
  <h2
    style={{
      fontSize: "24px",
      fontWeight: "bold",
      animation: "colorMove 10s ease-in-out infinite",
      position: "relative",
      color: "#1f2937", // initial color
      display: "inline-block", // so left positioning works nicely
    }}
  >
    Explore Career Opportunities
  </h2>

  <style>
    {`
      @keyframes colorMove {
        0%, 49.99% {
          color: #eb9c25ff;
          left: 0;
        }
        50%, 100% {
          color: #41382fff;
          left: 20px; /* moves 20px to the right */
        }
      }
    `}
  </style>
</>

      </div>

      {/* Job Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(145deg, #ffc08dff, #ffffff)",
              border: "1px solid #fdf9edff",
              padding: "20px",
              width: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.15)";
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "10px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#004d99")}
              onMouseLeave={(e) => (e.target.style.color = "#000")}
            >
              {job.title}
            </h3>

            <p style={{ color: "#0066ff", fontSize: "14px", marginBottom: "10px" }}>
              <i className="fa fa-calendar-check" style={{ color: "black" }}></i> Posted {job.posted}
            </p>

            <p style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6", marginBottom: "15px" }}>
              {job.description}
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              {["Quick Apply", "Read More"].map((label) => (
                <button
                  key={label}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#0052cc";
                    e.target.style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#0066ff";
                    e.target.style.boxShadow = "none";
                  }}
                  style={{
                    backgroundColor: "#0066ff",
                    color: "#fff",
                    border: "none",
                    padding: "8px 14px",
                    fontSize: "13px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Career;
