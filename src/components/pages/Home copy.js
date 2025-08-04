import React, { useEffect, useState } from 'react';


const statsData = [
  { number: 243, label: 'Projects Completed' },
  { number: 428, label: 'Satisfied Clients' },
  { number: 37, label: 'Expert Teams' },
  { number: 425, label: 'Repeat Customers' },
];

const Home = () => {


  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000; // 1 second to reach 12
    const interval = 30;
    const steps = duration / interval;
    const increment = 12 / steps;

    let current = 0;

    const startAnimation = () => {
      current = 0;
      const counter = setInterval(() => {
        current += increment;
        if (current >= 12) {
          current = 12;
          clearInterval(counter);
          setTimeout(startAnimation, 4000); // wait 4s, then restart
        }
        setCount(Math.floor(current));
      }, interval);
    };

    startAnimation();

    return () => clearInterval(); // cleanup if component unmounts
  }, []);

  

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const durations = 1500; // total duration in ms
    const intervals = 30; // milliseconds per update
    const steps = durations / intervals;

    const newCounts = [...counts];
    const intervalIds = statsData.map((stat, i) => {
      const increment = stat.number / steps;

      return setInterval(() => {
        newCounts[i] += increment;
        if (newCounts[i] >= stat.number) {
          newCounts[i] = stat.number;
          clearInterval(intervalIds[i]);
        }
        setCounts([...newCounts]);
      }, intervals);
    });

    return () => intervalIds.forEach(clearInterval);
  }, []);






    const slides = [
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return <>
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
          animation: 'fadeIn 1.5s ease-in-out forwards',
          transition: 'background-image 1s ease-in-out',
        }}
      >
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes zoomIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }

          .animated-title {
            animation: zoomIn 1s ease-in-out 0.5s both;
          }

          .animated-button {
            background-color: #0066ff;
            color: white;
            border: none;
            padding: 12px 25px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 4px;
            font-size: 14px;
            text-transform: uppercase;
            margin-top: 20px;
            transition: transform 0.3s ease, background-color 0.3s ease;
          }

          .animated-button:hover {
            transform: scale(1.05);
            background-color: #004ecc;
          }

          .merged-card {
            position: relative;
            max-width: 1100px;
            margin: 0 auto;
            margin-top: -80px; /* overlap the banner */
            background: #f0f4ff;
            border-radius: 20px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            padding: 30px 40px;
            display: flex;
            justify-content: space-between;
            gap: 40px;
            color: #000;
            animation: fadeIn 0.8s ease forwards;
          }

          .service-item {
            flex: 1;
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }

          .service-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #0066ff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .service-icon img {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }

          .service-icon:hover {
            transform: scale(1.1);
          }

          .service-text h5 {
            margin: 0 0 8px 0;
            font-size: 18px;
            font-weight: 600;
          }

          .service-text p {
            margin: 0;
            font-size: 14px;
            color: #555;
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

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1
            className="animated-title"
            style={{
              fontSize: '28px',
              lineHeight: 1.3,
              margin: 0,
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            A full service creative web development and digital marketing agency.
          </h1>
          <button className="animated-button">Get Started</button>
        </div>
      </section>

      <section className="merged-card" style={{ position: 'relative', zIndex: 10 }}>
        {[
          {
            title: 'Web Designing',
            description: 'Creating responsive, user-friendly, and visually appealing websites.',
            icon: 'https://craftedcampus.com/wp-content/uploads/2025/02/online-learning.webp',
          },
          {
            title: 'Web Development',
            description: 'Building functional, responsive, and efficient websites with coding expertise.',
            icon: 'https://craftedcampus.com/wp-content/uploads/2025/02/magnetism-1.webp',
          },
          {
            title: 'Web Application',
            description: 'Interactive software accessed through browsers, enhancing functionality and user experiences.',
            icon: 'https://craftedcampus.com/wp-content/uploads/2025/02/selective.webp',
          },
        ].map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="service-text">
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </section>

<>
  <style>
    {`
      @keyframes zoomIn {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(1.05);
        }
      }

      .zoom-img {
        transition: transform 0.5s ease;
      }

      .zoom-img:hover {
        animation: zoomIn 0.5s forwards;
      }
    `}
  </style>

  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#faf1ecff'
    }}
  >
    {/* Left Section */}
    <div style={{ flex: 1.5, minWidth: '300px', position: 'relative' }}>
      {/* Badge */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'white',
          borderRadius: '50%',
          width: '150px',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <h2 style={{ margin: 0, fontSize: '28px', color: '#0066ff' }}>
      {count}+
    </h2>
        <p style={{ margin: 0, fontSize: '12px', color: '#333' }}>Years Experience</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1rem',
        }}
      >
        {[
          'https://craftedcampus.com/wp-content/uploads/2025/02/istockphoto-1346125184-612x612-1.webp',
          'https://craftedcampus.com/wp-content/uploads/2025/02/1705041419958.webp',
          'https://craftedcampus.com/wp-content/uploads/2024/02/service-14.jpg',
          'https://craftedcampus.com/wp-content/uploads/2024/02/bg-07.jpg',
        ].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Team ${i + 1}`}
            className="zoom-img"
            style={{
              width: '100%',
              height: '230px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        ))}
      </div>
    </div>

    {/* Right Section */}
    <div style={{ flex: 1.5, minWidth: '320px' }}>
      <p
        style={{
          color: '#0066ff',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}
      >
        WHO WE ARE
      </p>
      <h2 style={{ margin: 0, fontSize: '26px' }}>
        Are you prepared to develop your businesses!
      </h2>
      <p
        style={{
          marginTop: '1rem',
          marginBottom: '1.5rem',
          fontSize: '16px',
          color: '#555',
        }}
      >
        Web designing in a strong method of simply not a main callings, be that as it may,
        in an energy for our Organization.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {[
          {
            title: 'Creative Ideas',
            desc:
              'Creative ideas inspire innovation, enabling businesses to stand out through unique approaches, engaging designs, and tailored strategies for meaningful growth and audience connection in competitive markets.',
          },
          {
            title: 'Quality Web Designing',
            desc:
              'Quality web designing creates visually appealing, user-friendly, and responsive websites, combining aesthetics with functionality to enhance user experience and achieve business goals effectively.',
          },
          {
            title: 'Marketing Solution',
            desc:
              'Marketing solutions involve strategic approaches to promoting products or services, leveraging tools like digital marketing, SEO, social media, and data analytics to enhance brand visibility, audience engagement, and business growth effectively.',
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
          >
            <span
              style={{
                color: '#fff',
                fontSize: '24px',
                marginTop: '5px',
                backgroundColor: '#0066ff',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
                flexShrink: 0,
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = 'scale(1.3)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = 'scale(1)')
                }
              >
                ✔
              </span>
            </span>
            <div>
              <h4 style={{ margin: 0, color: '#222' }}>{item.title}</h4>
              <p
                style={{
                  marginTop: '0.3rem',
                  color: '#555',
                  fontSize: '15px',
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</>



<>
  <style>
    {`
      @keyframes fadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .stat-animate {
        animation: fadeUp 0.6s ease forwards;
        opacity: 0;
      }

      .card-hover:hover {
        box-shadow: 0 10px 30px rgba(0, 102, 255, 0.2);
      }

      .btn-animate {
        transition: all 0.3s ease;
      }

      .btn-animate:hover {
        background-color: #0052cc !important;
        transform: translateY(-2px);
      }
    `}
  </style>

  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    {/* Stats Section */}
    <div className="flex justify-around flex-wrap bg-[#0066ff] text-white py-8 px-4">
      {statsData.map((stat, i) => (
        <div
          key={i}
          className="text-center min-w-[150px] py-4"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <h2 className="text-4xl font-bold">
            {Math.floor(counts[i])}
          </h2>
          <p className="mt-2 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>

    {/* Services Section */}
    <div style={{ backgroundColor: '#121723', color: '#fff', padding: '3rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ color: '#0066ff', fontWeight: 'bold', margin: 0 }}> OUR SERVICES</p>
        <h2 style={{ margin: '0.5rem 0', fontSize: '28px' }}>Our Company Solutions</h2>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {[
          {
            title: 'Web Designing',
            desc: 'Web designing involves creating visually appealing and functional websites that provide an excellent user experience.',
          },
          {
            title: 'Web Development',
            desc: 'Web development involves creating and maintaining websites by combining coding, design, and functionality.',
          },
          {
            title: 'Web Application',
            desc: 'A web application is a dynamic software program accessed through a web browser, enabling users to perform tasks or interact with data.',
          },
        ].map((card, i) => (
          <div
            key={i}
            className="card-hover"
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '3rem',
              borderRadius: '10px',
              maxWidth: '280px',
              flex: '1',
              boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
              minWidth: '180px',
              minHeight: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div>
              <h3 style={{ margin: '0 0 1rem' }}>{card.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>{card.desc}</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 'bold',
                marginTop: '1.5rem',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.children[0].style.backgroundColor = '#0066ff';
                e.currentTarget.children[0].style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.children[0].style.backgroundColor = '#f3f3f3';
                e.currentTarget.children[0].style.color = '#000';
              }}
            >
              <div
                style={{
                  backgroundColor: '#f3f3f3',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                →
              </div>
              <span>Read more</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          marginTop: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          padding: '0 1rem',
        }}
      >
        <p style={{ color: '#fff', fontWeight: 'bold', margin: 0 }}>
          Trust the experts for all your web design & development needs.{' '}
          
        </p>
        <button className="my-button btn-animate">GET STARTED</button>
      </div>
    </div>
  </div>
</>

<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '2rem',
    padding: '3rem 2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    animation: 'fadeSlideUp 0.8s ease-out forwards',
  }}
>
  {/* Left Image */}
  <div style={{ flex: 1, minWidth: '300px' }}>
    <div
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    height: "auto", 
    borderRadius: "10px",
    overflow: "hidden", // keep shine inside border radius
  }}
>
  <img
    src="https://craftedcampus.com/wp-content/uploads/2024/02/about21.jpg"
    alt="Team working"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "10px",
      display: "block",
    }}
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
      pointerEvents: "none",
      borderRadius: "10px",
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

  </div>

  {/* Right Content */}
  <div style={{ flex: 1.2, minWidth: '320px' }}>
    <p style={{ color: '#0066ff', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
      WHY CHOOSE US
    </p>
    <h2 style={{ margin: 0, fontSize: '34px', color: '#222' }}>
      We provide best design solution in town!
    </h2>
    <p style={{ marginTop: '1rem', color: '#0066ff', fontWeight: '700' }}>
      We have 12+ years of experience. We offer marketing and consulting services
    </p>

    {/* Feature Items */}
    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Item 1 */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ margin: 0, color: '#222' }}>Best User Interfaces</h4>
          <p style={{ marginTop: '0.5rem', fontSize: '15px', color: '#555' }}>
            Crafted Campus focuses on creating the best user interfaces (UIs) by prioritizing user experience and intuitive
            design. Their UIs are built to be seamless, engaging, and functional, ensuring that users can easily navigate
            digital products and services.
          </p>
        </div>
      </div>

      {/* Item 2 */}
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <div>
          <h4 style={{ margin: 0, color: '#222' }}>Quality Web Design</h4>
          <p style={{ marginTop: '0.5rem', fontSize: '15px', color: '#555' }}>
            Quality web design focuses on creating visually appealing, user-friendly websites that enhance the user experience.
            It involves intuitive navigation, mobile responsiveness, fast loading times, and cohesive branding. A strong web
            design integrates functionality with aesthetics to engage users, ensuring they can easily interact with the site.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes fadeSlideUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</div>


 <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#faf1ecff' }}>
    {/* Icon Header */}
<div className="bg-black text-white flex justify-center items-center flex-wrap gap-12 py-5 px-4 text-sm">
  {[
    {
      text: 'Lead Generation',
      src: 'https://craftedcampus.com/wp-content/uploads/2025/02/selective.webp',
    },
    {
      text: 'Ecommerce Sales',
      src: 'https://craftedcampus.com/wp-content/uploads/2025/02/online-shop-1.webp',
    },
    {
      text: 'Website Traffic',
      src: 'https://craftedcampus.com/wp-content/uploads/2025/02/magnetism-1.webp',
    },
    {
      text: 'Website Traffic',
      src: 'https://craftedcampus.com/wp-content/uploads/2025/02/online-learning.webp',
    },
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-2 text-[#0066ff] hover:text-white font-bold transition-colors duration-300"
    >
      <img
        src={item.src}
        alt={item.text}
        className="w-[30px] h-[30px] transition-transform duration-300 hover:scale-110"
      />
      {item.text}
    </div>
  ))}
</div>



  {/* Contact Form */}
<>
  <style>
    {`
      @keyframes softGlow {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }
        50% {
          transform: scale(1.01);
          box-shadow: 0 0 25px rgba(0, 102, 255, 0.15);
        }
      }

      .animated-container {
        animation: softGlow 5s ease-in-out infinite;
      }

      .my-button {
        background-color: #0066ff;
        color: white;
        padding: 10px 25px;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }

      .my-button:hover {
        background-color: #004fcc;
      }
    `}
  </style>

  <div
    className="animated-container"
    style={{
      maxWidth: '900px',
      margin: '3rem auto',
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dcf1f8')}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
  >
    <form>
      {/* Row 1 */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1rem',
        }}
      >
        <input
          type="text"
          placeholder="Your name here"
          style={{
            flex: '1',
            minWidth: '250px',
            padding: '0.8rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        />
        <input
          type="email"
          placeholder="Your email here"
          style={{
            flex: '1',
            minWidth: '250px',
            padding: '0.8rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Row 2 */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1rem',
        }}
      >
        <input
          type="text"
          placeholder="Your subject here"
          style={{
            flex: '1',
            minWidth: '250px',
            padding: '0.8rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        />
        <input
          type="text"
          placeholder="Your phone number here"
          style={{
            flex: '1',
            minWidth: '250px',
            padding: '0.8rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
          }}
        />
      </div>

      {/* Textarea */}
      <textarea
        placeholder="Tell us a few words"
        rows="5"
        style={{
          width: '100%',
          padding: '0.8rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontSize: '14px',
          marginBottom: '1.5rem',
          resize: 'vertical',
        }}
      />

      {/* Submit Button */}
      <button
        className="my-button"
        type="submit"
        style={{ cursor: 'pointer' }}
      >
        SEND MESSAGE
      </button>
    </form>
  </div>
</>


  </div>





  </>;
};

export default Home;
