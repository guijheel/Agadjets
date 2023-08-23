import React, { useState } from "react";
import styles from "../../style/stylesNav";
import { AiOutlineUser, AiOutlineShopping, AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar";
import './Navbar.css'; 
import { useEffect } from "react";


function Navbar() {


 
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [showMenu, setshowMenu] =  useState(false);
    const [burger, setBurger] =  useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth<700){
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

                    <AiOutlineSearch style={styles.iconNav} size={27}  onClick={handleToggleSearch}/>
                    <AiOutlineUser style={styles.iconNav} size={27} />
                    <AiOutlineShopping style={styles.iconNav} size={27} />

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
         {burger && (           <div className="navbarMobile">
         <ul>
                                    <li>
                            
                                    </li>
                                </ul>
         </div>
                                
                        )}
        </div>
    );
}

export default Navbar;
