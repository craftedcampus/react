import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const containerStyle = {
    backgroundColor: "#1f232b",
    color: "#fff",
    padding: "60px 20px 20px",
    fontFamily: "sans-serif",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1100px",
    margin: "0 auto",
    justifyContent: "space-between",
  };

  const colStyle = {
    flex: "1 1 200px",
    marginBottom: "30px",
    padding: "0 15px",
    minWidth: "220px",
  };

  const titleStyle = {
    color: "#0066ff",
    fontWeight: "700",
    marginBottom: "15px",
    fontSize: "14px",
    textTransform: "uppercase",
    borderBottom: "2px solid #0066ff",
    display: "inline-block",
    paddingBottom: "5px",
  };

  const textStyle = {
    color: "rgba(255,255,255,0.8)",
    fontSize: "14px",
    lineHeight: "1.7",
  };

  const linkStyle = {
    color: "rgba(255,255,255,0.8)",
    fontSize: "14px",
    display: "block",
    textDecoration: "none",
    marginBottom: "8px",
  };

  const linkHoverStyle = {
    color: "#0066ff",
  };

  const socialIconStyle = {
    backgroundColor: "#0066ff",
    color: "#fff",
    display: "inline-block",
    width: "32px",
    height: "32px",
    lineHeight: "32px",
    textAlign: "center",
    borderRadius: "4px",
    marginRight: "8px",
    fontSize: "14px",
  };

  const bottomStripStyle = {
    borderTop: "1px solid #2c2f33",
    paddingTop: "20px",
    marginTop: "40px",
    textAlign: "center",
    fontSize: "13px",
    color: "rgba(255,255,255,0.7)",
  };

  const policyLinkStyle = {
    color: "#0066ff",
    textDecoration: "none",
    margin: "0 5px",
  };

  return (
    <footer style={containerStyle}>
      <div style={rowStyle}>
        {/* About */}
        <div style={colStyle}>
          <div style={titleStyle}>About Company</div>
          <p style={textStyle}>
            At Crafted Campus, we specialize in{" "}
            <strong>
              web development, mobile apps, eCommerce, and digital marketing
            </strong>{" "}
            solutions. Our team delivers innovative, high-performance, and
            scalable solutions tailored to your business needs.
          </p>
        </div>

        {/* Quick Links */}
        <div style={colStyle}>
          <div style={titleStyle}>Quick Links</div>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/partner" style={linkStyle}>
            Partner
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
          <div className="mt-4 flex gap-4">
  <a
    href="https://www.facebook.com/craftedcampus.au?rdid=ABbfnm14b5gN5VZ3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14qnZi2779%2F#"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-lg hover:text-blue-400 transition-transform transform hover:scale-110 cursor-pointer"
  >
    <i className="fab fa-facebook-f"></i>
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-lg hover:text-pink-400 transition-transform transform hover:scale-110 cursor-pointer"
  >
    <i className="fab fa-instagram"></i>
  </a>
  <a
    href="https://www.linkedin.com/company/crafted-campus-india/?originalSubdomain=in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-lg hover:text-blue-300 transition-transform transform hover:scale-110 cursor-pointer"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>

        </div>

        {/* Contacts */}
        <div style={colStyle}>
          <div style={titleStyle}>Contacts</div>
          <p style={textStyle}>
            <strong>
              GN 34/1, Aurora Waterfront,
              <br />
              Unit–820
            </strong>
          </p>
          <p style={textStyle}>
            <strong>info@craftedcampus.com</strong>
          </p>
          <p style={textStyle}>
            <strong>+91 81000 71784</strong>
          </p>
        </div>

        {/* Services */}
        <div style={colStyle}>
          <div style={titleStyle}>Services</div>
          <Link to="/webdev" style={linkStyle}>
            Web Development
          </Link>
          <Link to="/ecommercedev" style={linkStyle}>
            eCommerce development
          </Link>
          <Link to="/digitalmarketing" style={linkStyle}>
            Digital Marketing
          </Link>
          <Link to="/appdev" style={linkStyle}>
            Application Development
          </Link>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={bottomStripStyle}>
        © {new Date().getFullYear()} All rights reserved by{" "}
        <span style={{ color: "#0066ff" }}>Crafted Campus Pvt. Ltd.</span> |
        <a
          href="https://craftedcampus.com/privacy-policy-2/"
          style={policyLinkStyle}
        >
          Privacy Policy
        </a>{" "}
        |
        <a
          href="https://craftedcampus.com/terms-and-conditions/"
          style={policyLinkStyle}
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
