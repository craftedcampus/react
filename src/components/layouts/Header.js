import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 40px",
    backgroundColor: "#fff",
    fontFamily: "sans-serif",
    borderBottom: "1px solid #eee",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
    gap: "25px",
    fontWeight: "600",
    fontSize: "14px",
    textTransform: "uppercase",
  };

  const navLinkStyle = {
    color: "#111",
    textDecoration: "none",
    position: "relative",
    cursor: "pointer",
  };

  const serviceLinkStyle = {
    ...navLinkStyle,
    color: "#000000ff",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#fff",
    padding: "25px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: showDropdown ? "block" : "none",
    zIndex: 10,
    width: "260px",
    lineHeight: "2",
  };

  const phoneButtonStyle = {
    backgroundColor: "#0066ff",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "700",
    borderRadius: "2px",
    fontSize: "14px",
    textDecoration: "none",
  };

  return (
    <header style={headerStyle}>
      {/* Logo */}
      <img
        src="https://craftedcampus.com/wp-content/uploads/2024/12/WhatsApp_Image_2024-12-20_at_9.52.33_AM-removebg-preview-2.png"
        alt="Crafted Campus"
        style={{
          height: "40px",
          filter: "brightness(0) saturate(100%)",
        }}
      />

      {/* Nav */}
      <nav style={navStyle}>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About Us
        </Link>

        {/* Dropdown */}
        <div
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          style={{ position: "relative" }}
        >
          <span style={serviceLinkStyle}>
            Our Services <span style={{ fontSize: "12px" }}>▼</span>
          </span>
          <div style={dropdownStyle}>
            <Link to="/services/appdev" className="nav-link">
              Application Development
            </Link>
            <br />
            <Link to="/services/digitalmarketing" className="nav-link">
              Digital Marketing
            </Link>
            <br />
            <Link to="/services/ecommercedev" className="nav-link">
              eCommerce Development
            </Link>
            <br />
            <Link to="/services/webdev" className="nav-link">
              Web Development
            </Link>
          </div>
        </div>

        <Link to="/partners" className="nav-link">
          Partner’s
        </Link>
        <Link to="/career" className="nav-link">
          Career
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>

        {/* Search Icon */}
        <i
          className="fas fa-search"
          style={{ fontSize: "16px", cursor: "pointer" }}
        ></i>

        {/* Phone Button */}
        <a href="tel:+918100071784" style={phoneButtonStyle}>
          8100071784
        </a>
      </nav>
    </header>
  );
};

export default Header;
