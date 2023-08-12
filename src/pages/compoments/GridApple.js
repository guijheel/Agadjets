import React from "react";
import "./AppleStyleCard.css"; // Importez votre feuille de styles CSS

const AppleStyleCard = () => {
  return (
    <div className="apple-card">
    <div className="apple-card-image">
      <img src="https://via.placeholder.com/300x200" alt="Product" />
    </div>
    <div className="apple-card-content">
      <h3 className="apple-card-title">iPhone 13 Pro</h3>
      <p className="apple-card-description">
        The latest iPhone with advanced features and stunning design.
      </p>
      <button className="apple-card-button">Learn More</button>
    </div>
  </div>
  );
};

export default AppleStyleCard;
