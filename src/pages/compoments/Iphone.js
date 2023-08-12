import React, { useState } from "react";
import styles from "../../style/stylesNew.js";
import GridProducts from "./GridProductsIphone.js";
import BoutonDecouvrir from "./BouttonNoir.js";



function Iphone() {
  return (
    <div style={styles.newContainer}>
        <h1 style={styles.TitreContainer}>TOUS NOS ACCESSOIRES D'IPHONE</h1>
        <div style={styles.gridContainer}>
        <GridProducts/>
        </div>
       <div style={styles.buttonContainer}>
       <BoutonDecouvrir style={styles.btnDecouvrir}/>
       </div>
  </div>
  );
}

export default Iphone;
