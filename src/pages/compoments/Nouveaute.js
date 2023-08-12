import React, { useState } from "react";
import styles from "../../style/stylesNew.js";
import GridProducts from "./GridProducts.js";
import BoutonDecouvrir from "./BouttonNoir.js";



function Nouveaute() {
  return (
    <div style={styles.newContainer}>
        <h1 style={styles.TitreContainer}>Nos Nouveautés</h1>
        <div style={styles.gridContainer}>
                <GridProducts/>
        </div>
        
       <div style={styles.buttonContainer}>
       <BoutonDecouvrir style={styles.btnDecouvrir}/>
       </div>
  </div>
  );
}

export default Nouveaute;
