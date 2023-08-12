import React, { useState } from "react";
import styles from "./style/styles";
import './App.css';
import Homepage from "./pages/Homepage";
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <div style={styles.containerFull}>
          <NextUIProvider>
          <Homepage/>
          </NextUIProvider>
        
        
   
  </div>
  );
}

export default App;
