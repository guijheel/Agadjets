import React from 'react';
import './reseauSociaux.css'; 
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok,FaWhatsapp,FaTelegram,FaTwitter } from "react-icons/fa";
const ReseauSociaux = () => {
  return (
    <div className="social-icons">
      <a href="https://snapchat.com"><FaSnapchat className="social-icon"  size={22}/></a>
      <a href="https://twitter.com"><FaWhatsapp className="social-icon" size={22}/></a>
      <a href="https://instagram.com"><FaInstagram className="social-icon" size={22}/></a>
      <a href="https://linkedin.com"><FaTelegram className="social-icon" size={22}/></a>
      <a href="https://pinterest.com"><FaTwitter className="social-icon" size={22}/></a>
      <a href="https://facebook.com"><FaFacebook className="social-icon" size={22}/></a>
      <a href="https://tiktok.com"><FaTiktok className="social-icon" size={22}/></a>
    </div>
  );
};

export default ReseauSociaux;
