import React from "react";

const AnimatedBanner = () => {
  const containerStyle = {
    width: "100%",
    height: "150px",
    overflow: "hidden",
    backgroundColor: "#1e293b",
    padding: "20px 0",
    position: "relative",
    whiteSpace: "nowrap",
  };

  const trackStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: "scroll-left 20s linear infinite",
  };

  const textStyle = {
    display: "inline-block",
    color: "#ff3c7e", // Bright pink like your image
    fontSize: "48px",
    fontWeight: "bold",
    paddingRight: "100px", // spacing between repeated text
  };

  const keyframesStyle = `
    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  const message = `Design & Branding — Web Development — Product Design — Mobile Application — Web Application — SEO Optimization — `;

  return (
    <div style={containerStyle}>
      <style>{keyframesStyle}</style>
      <div style={trackStyle}>
        <span style={textStyle}>{message}</span>
        <span style={textStyle}>{message}</span> {/* duplicated for seamless scroll */}
      </div>
    </div>
  );
};

export default AnimatedBanner;
