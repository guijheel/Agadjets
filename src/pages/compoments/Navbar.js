import React, { useState } from "react";
import styles from "../../style/stylesNav";
import { AiOutlineUser, AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import SearchBar from "./SearchBar";


function Navbar() {


 
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
      const handleSearch = (query) => {
        // Traitement de la recherche
        console.log("Recherche effectuée avec le terme :", query);
      };
    return (
        <div style={styles.navbarContainer}>

            <div style={styles.navbarPromo}>
                LIVRAISON OFFERTE POUR 50$
                <meta name="description" content=" LIVRAISON OFFERTE POUR 50$ " />
            </div>


            <div style={styles.navbarHeader}>

                <div style={styles.navbarLogo}>
                    <img src="/logoPage.jpg" alt="logo" style={styles.ImageLogo} />
                </div>

                <div style={styles.navbarHeaderProfile}>

                    <AiOutlineSearch style={styles.iconNav} size={27}  onClick={handleToggleSearch}/>
                    <AiOutlineUser style={styles.iconNav} size={27} />
                    <AiOutlineShopping style={styles.iconNav} size={27} />

                </div>

            </div>
            <div style={styles.navbarText}>
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
        </div>
    );
}

export default Navbar;
