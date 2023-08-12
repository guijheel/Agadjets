import React from 'react';
import Stylesheet from "reactjs-stylesheet";

const BoutonDecouvrir = () => {
  return (
    <button style={styles.button}>
      <h1 style={styles.buttonText}>Découvrir nos Nouveautés</h1>
    </button>
  );
};

const styles = Stylesheet.create({
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily:"Montserrat,sans-serif",
		textAlign:"center",
		padding:"11px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    
        
  },
});

export default BoutonDecouvrir;
