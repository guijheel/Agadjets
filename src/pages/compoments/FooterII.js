import React, { useState } from "react";
import './footerII.css';
import { FaCcVisa,FaCcMastercard,FaCcStripe,FaApplePay} from "react-icons/fa";
import {SiAmericanexpress } from "react-icons/si";

const FooterII = () => {
  
  return (
    <div className="footerContainerII">
      {/* ... Le reste de votre contenu */}
      <div className="footerII">
        <div className="footerSectionII firstSectionII">
        <FaCcVisa className="social-iconII"  size={35}/>
        <FaCcMastercard className="social-iconII"  size={35}/>
        <SiAmericanexpress className="social-iconII"  size={35}/>
        <FaApplePay className="social-iconII"  size={35}/>
        </div>
        <br/>
        <div className="footerSectionII firstSectionIII">
          <h5 className="txtPayment">par</h5>
          
        </div>
        <div className="footerSectionII">
        
          <FaCcStripe className="social-iconII"  size={35}/>
        </div>
        </div>

        <div className="footerII">
        <div className="footerSectionIIII ">
        <img src="/logoPage.jpg" alt="logo" className="LogoFooter" />
        <h1 className="TitreFooter">AGAJETS
        <p5 className="txtPayment posPayment">© 2023</p5>
        </h1>
        
        </div>
        </div>
</div>
  );
};

export default FooterII;
