import React, { useState } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Web designing is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.",
  },
  {
    title: "ECommerce Development",
    description:
      "Crafted Campus specializes in custom eCommerce development, creating high-performing, user-friendly stores with Shopify, WooCommerce, and BigCommerce. They prioritize seamless functionality, responsive design, performance optimization, and secure payment integration for an enhanced shopping experience.",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing enhances online visibility, website traffic, and customer engagement through SEO, social media, paid ads, content, and email campaigns, aiming to boost brand awareness, leads, conversions, and business growth.",
  },
  {
    title: "Application Development",
    description:
      "Application development involves designing, building, and maintaining software applications for various platforms. It includes coding, testing, and deploying solutions that meet user needs, enhance functionality, and deliver seamless experiences.",
  },
];

const ServicesGrid = () => {
  const outerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "auto",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  };

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <div style={outerStyle}>
      {chunk(services, 2).map((row, rowIndex) => (
        <div style={rowStyle} key={rowIndex}>
          {row.map((service, index) => (
            <HoverCard key={index} service={service} />
          ))}
        </div>
      ))}
    </div>
  );
};

const HoverCard = ({ service }) => {
  const [hovered, setHovered] = useState(false);

 const cardStyle = {
  backgroundColor: hovered ? "#ffffff" : "#6b7280",
  color: hovered ? "#000000" : "#ffffff",
  width: "100%",
  maxWidth: "500px",
  padding: "40px",
  borderRadius: "10px",
  position: "relative",
  minHeight: "300px",
  transition: "all 0.4s ease",
  overflow: "visible", // allows the ball to overflow
  cursor: "pointer",
  boxShadow: "0 2px 15px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginTop: "40px", // ⬅️ this creates the space for the floating ball
};


const circleStyle = {
  position: "absolute",
  top: "-30px", // moves half above the card
  left: "20px",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: hovered ? "#1e293b" : "#0066ff",
  transition: "background-color 0.3s ease",
  zIndex: 2,
};

  const titleStyle = {
    marginTop: "80px",
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "1.3",
    color: hovered ? "#000000" : "#ffffff",
    transition: "color 0.3s ease",
  };

  const descriptionStyle = {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#475569",
    opacity: hovered ? 1 : 0,
    height: hovered ? "auto" : 0,
    transition: "opacity 0.3s ease, height 0.3s ease",
  };

  const readMoreStyle = {
    marginTop: "20px",
    fontSize: "13px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#000000",
    textTransform: "uppercase",
    opacity: hovered ? 1 : 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={circleStyle}></div>
      <div>
        <div style={titleStyle}>{service.title}</div>
        <div style={descriptionStyle}>{service.description}</div>
      </div>
      <div style={readMoreStyle}>Read More</div>
    </div>
  );
};

export default ServicesGrid;
