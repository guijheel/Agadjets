import React, { useState } from "react";
import styles from "../../style/stylesNav";
import { AiOutlineUser, AiOutlineShopping, AiOutlineSearch, AiOutlineClose, AiOutlineMenu, AiOutlineCloseSquare, AiOutlineIssuesClose } from "react-icons/ai";
import SearchBar from "./SearchBar";
import './Navbar.css'; 
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaSnapchat, FaTiktok,FaWhatsapp,FaTelegram,FaTwitter } from "react-icons/fa";


function Navbar() {


 
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [showMenu, setshowMenu] =  useState(false);
    const [burger, setBurger] =  useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth<767){
                setshowMenu(true);
            }
            else
            {
                setshowMenu(false);
            }
        };
window.addEventListener('resize',handleResize);
handleResize();
return() =>{
    window.removeEventListener('resize',handleResize)
}
    })

    const onIphone = () => {
        console.log('iphone')
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleToggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };
    const handleToggleSearch2 = () => {
        
      };
    const handleDropdownClose = () => {
        setIsDropdownVisible(false);
      };
      const clickMenu = () => {
        console.log('clikcs')
        setBurger(!burger)
        
      };
      const handleSearch = (query) => {
        // Traitement de la recherche
        console.log("Recherche effectuée avec le terme :", query);
      };
      
    return (
        <div style={styles.navbarContainer} className="navbarContain">

            <div style={styles.navbarPromo}>
                LIVRAISON OFFERTE POUR 50$
                <meta name="description" content=" LIVRAISON OFFERTE POUR 50$ " />
            </div>

            {showMenu && (
                
                    <AiOutlineMenu size={25} className="iconsMenu" onClick={clickMenu}/>
                
            )}
            <div style={styles.navbarHeader} className="navbarContainer">

                <div style={styles.navbarLogo}>
                    <img src="/logoPage.jpg" alt="logo" style={styles.ImageLogo} className="logoNav"/>
                </div>

                <div style={styles.navbarHeaderProfile} className="navbarIcons">

                    <AiOutlineSearch style={styles.iconNav} size={35}  onClick={handleToggleSearch}/>
                    <AiOutlineUser style={styles.iconNav} size={35} />
                    <AiOutlineShopping style={styles.iconNav} size={35} />

                </div>

            </div>
            <div style={styles.navbarText} className="navbarText">
                <ul style={styles.navUl}>
                    <li style={styles.navLi}>
                        <a
                            onMouseOver={onIphone}
                            style={styles.navbarTitle}>
                            Accessoires Iphone
                        </a>


                    </li>

                    <li style={styles.navLi}>
                        <a style={styles.navbarTitle}>Accessoires AirPods</a>
                    </li>

                    <li style={styles.navLi}>
                        <a style={styles.navbarTitle}>Accessoires Apple Watch</a>
                    </li>

                    <li style={styles.navLi}>
                        <a style={styles.navbarTitle}>Divers</a>
                    </li>

                    <li style={styles.navLi}>
                        <a style={styles.navbarTitle}>Promo</a>
                    </li>

                </ul>

            </div>
            {isSearchVisible && <SearchBar  onSearch={handleSearch} />}
            {isDropdownVisible && (
          <div className="dropdown"
          onMouseEnter={onIphone} 
         
          >
            hi
          </div>
        )}
         {burger && (   
         

                 
             <div className={`navbarMobile ${burger ? 'active' : ''}`}>
            <div className="containeurMobile">
            <div className="btn_container">
               
               <AiOutlineClose size={40} className="closebtn" onClick={clickMenu}/>
               <div>
               <div className="btnMenuRecherche">
                     <AiOutlineSearch style={styles.iconNav} size={27}  onClick={handleToggleSearch2} className="colorIcons"/>
                       <AiOutlineUser style={styles.iconNav} size={27} className="colorIcons"/>
                       <AiOutlineShopping style={styles.iconNav} size={27} className="colorIcons"/>
               </div>
             </div>
              </div> 
            <div className="endMenu">
            <ul className="listItem">
               <li className="navbarMobileTitle" style={styles.navbarTitle}>
               Accessoires Iphone
               </li>
               <li className="navbarMobileTitle" style={styles.navbarTitle}>
               Accessoires AirPods
               </li>
               <li className="navbarMobileTitle" style={styles.navbarTitle}>
               Accessoires Apple Watch
               </li>
               <li className="navbarMobileTitle" style={styles.navbarTitle}>
               Divers
               </li>
               <li className="navbarMobileTitle" style={styles.navbarTitle}>
               Promo
               </li>
              
             </ul>
           
          
           <div className="social-icons">
         <a href="https://snapchat.com"><FaSnapchat className="social-icon"  size={30}/></a>
         <a href="https://twitter.com"><FaWhatsapp className="social-icon" size={30}/></a>
         <a href="https://instagram.com"><FaInstagram className="social-icon" size={30}/></a>
         <a href="https://linkedin.com"><FaTelegram className="social-icon" size={30}/></a>
         <a href="https://pinterest.com"><FaTwitter className="social-icon" size={30}/></a>
         <a href="https://facebook.com"><FaFacebook className="social-icon" size={30}/></a>
         <a href="https://tiktok.com"><FaTiktok className="social-icon" size={30}/></a>
       </div>
            </div>
           
            </div>
            
         </div>
    
            
                                
                        )}
        </div>
    );
}

export default Navbar;
