import React from 'react';
import './footer.css'; // Importez votre feuille de styles CSS
import ReseauSociaux from './ReseauSociaux';
import Cardpayment from './Cardpayment';

const Footer = () => {
  return (
    <div className="footerContainer">
      {/* ... Le reste de votre contenu */}
      <div className="footer">
        <div className="footerSection firstSection">
            <h5 className="footerTitre espaceTemps"> QUI SOMMES-NOUS ?</h5>
            <p3 className='footerText espaceTempsTxt'>
            <span className="highlight">Agadjets</span> est une marque française d'accessoires de mode pour produits technologiques, <span className="emphasis">née à Paris en 2023</span>.
            </p3>
            <p3 className='footerText espaceTempsTxt'>
            Pour toute question, notre service client est joignable par <a   className="footerLink" href="mailto:contact@example.com">email</a> ou par téléphone au <strong>+123456789</strong>.
            </p3>
            <ReseauSociaux/>
            <Cardpayment/>
    
        </div>
        <div className="footerSection">
        <h5 className="footerTitre espaceTemps"> MENU PRINCIPAL</h5>
        <p3 className='footerText espaceTempsTxt'>
             <a href='/iphone' className="footerLink">
             Accessoires Iphone
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/airpods' className="footerLink">
             Accessoires AirPods
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/applewatch' className="footerLink">
             Accessoires Apple Watch
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/divers' className="footerLink">
             Divers
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/promo' className="footerLink">
             Promo
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/about' className="footerLink">
             A propos
             </a>
            </p3>

        </div>
        <div className="footerSection">
        <h5 className="footerTitre espaceTemps"> SERVICE CLIENT</h5>
        <p3 className='footerText espaceTempsTxt'>
             <a href='/faq' className="footerLink">
             FAQ
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/legales' className="footerLink">
             Mentions légales
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/gen' className="footerLink">
             Conditions générales
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/refund' className="footerLink">
             Politique de remboursement
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/conf' className="footerLink">
             Politique de confidentialité
             </a>
            </p3>
            <p3 className='footerText espaceTempsTxt'>
             <a href='/contact' className="footerLink">
             Contact
             </a>
            </p3>
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;