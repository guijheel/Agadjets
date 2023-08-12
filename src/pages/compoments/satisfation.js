import React from 'react';
import './satisfcation.css'; // Importez votre feuille de styles CSS
import { AiOutlineCreditCard,AiOutlineLike,AiOutlineStar } from 'react-icons/ai';
import { HiOutlineTruck } from "react-icons/hi2";
import Flag from 'react-flagkit';


const Satisfation = () => {
  return (
   <div className='containerSatis'>
        <div className='containIcon'>
        <Flag country="FR" size={32} className='iconZ'/>

            
            <h3 className="textT3">
                SERVICE CLIENT FRANÇAIS

            </h3>
        </div>
        <div className='containIcon'>
        <AiOutlineLike  size={35} className='iconY'/>
        <h3 className="textT3">
                SATISFACTION GARANTIE

                </h3>
        </div>
        <div className='containIcon'>
        <HiOutlineTruck  size={35} className='iconY'/>
        <h3 className="textT3">
        LIVRAISON RAPIDE

                </h3>
        </div>
        <div className='containIcon'>
        <AiOutlineCreditCard  size={35} className='iconY'/>
        <h3 className="textT3">
        PAIEMENT 100% SÉCURISÉ

                </h3>
        </div>
        
   </div>
  );
};


export default Satisfation;