import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Global styles for responsiveness */}
      <style>{`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 40px;
          background-color: #fff;
          font-family: sans-serif;
          border-bottom: 1px solid #eee;
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .logo img {
          height: 40px;
          filter: brightness(0) saturate(100%);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 25px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
        }

        .nav-link {
          color: #111;
          text-decoration: none;
          position: relative;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #fff;
          padding: 25px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          display: none;
          z-index: 10;
          width: 260px;
          line-height: 2;
        }

        .dropdown.show {
          display: block;
        }

        .phone-button {
          background-color: #0066ff;
          color: #fff;
          padding: 10px 20px;
          font-weight: 700;
          border-radius: 2px;
          font-size: 14px;
          text-decoration: none;
        }

        .hamburger {
          display: none;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav {
            display: ${mobileMenuOpen ? "flex" : "none"};
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          .hamburger {
            display: block;
          }

          .dropdown {
            position: static;
            width: 100%;
            padding: 10px 0;
            box-shadow: none;
          }

          .dropdown.show {
            display: block;
          }
        }
      `}</style>

      <header className="header">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://craftedcampus.com/wp-content/uploads/2024/12/WhatsApp_Image_2024-12-20_at_9.52.33_AM-removebg-preview-2.png"
            alt="Crafted Campus"
          />
        </div>

        {/* Hamburger (Mobile only) */}
        <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>

        {/* Nav */}
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>

          {/* Dropdown */}
          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            onClick={() => setShowDropdown(!showDropdown)} // toggle for mobile
            style={{ position: "relative" }}
          >
            <Link to="/service" className="nav-link">
              Our Services <span style={{ fontSize: '12px' }}>▼</span>
            </Link>
            <div className={`dropdown ${showDropdown ? "show" : ""}`}>
              <Link to="/services/appdev" className="nav-link">Application Development</Link><br />
              <Link to="/services/digitalmarketing" className="nav-link">Digital Marketing</Link><br />
              <Link to="/services/ecommercedev" className="nav-link">eCommerce Development</Link><br />
              <Link to="/services/webdev" className="nav-link">Web Development</Link>
            </div>
          </div>

          <Link to="/partners" className="nav-link">Partner’s</Link>
          <Link to="/career" className="nav-link">Career</Link>
          <Link to="/contact" className="nav-link">Contact</Link>

          <a href="tel:+918100071784" className="phone-button">8100071784</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
