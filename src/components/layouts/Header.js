import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setShowDropdown(false); // Reset dropdown on toggle
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://craftedcampus.com/wp-content/uploads/2024/12/WhatsApp_Image_2024-12-20_at_9.52.33_AM-removebg-preview-2.png"
          alt="Crafted Campus"
        />
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Navigation */}
      <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>

        {/* Dropdown Menu */}
        <div
          className="nav-link dropdown-wrapper"
          onMouseEnter={() => !mobileMenuOpen && setShowDropdown(true)}
          onMouseLeave={() => !mobileMenuOpen && setShowDropdown(false)}
          onClick={mobileMenuOpen ? toggleDropdown : undefined}
        >
<<<<<<< HEAD
          <span className="nav-link">
            Our Services <span style={{ fontSize: '12px' }}>▼</span>
          </span>
=======
          <Link
  to="/service"
  className="nav-link"
  onClick={() => {
    setShowDropdown(false);
    setMobileMenuOpen(false);
  }}
>
  Our Services <span style={{ fontSize: "12px" }}>▼</span>
</Link>

>>>>>>> 576bb06 (Updated header style and added button hover)
          <div className={`dropdown ${showDropdown ? "show" : ""}`}>
            <Link to="/services/appdev" onClick={() => setMobileMenuOpen(false)}>Application Development</Link>
            <Link to="/services/digitalmarketing" onClick={() => setMobileMenuOpen(false)}>Digital Marketing</Link>
            <Link to="/services/ecommercedev" onClick={() => setMobileMenuOpen(false)}>eCommerce Development</Link>
            <Link to="/services/webdev" onClick={() => setMobileMenuOpen(false)}>Web Development</Link>
          </div>
        </div>

        <Link to="/partners" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Partner’s</Link>
        <Link to="/career" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Career</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>

        <a href="tel:+918100071784" className="phone-button">8100071784</a>
      </nav>
    </header>
  );
};

export default Header;
