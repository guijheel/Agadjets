import React, { useState } from "react";
import Navbar from "./compoments/Navbar";
import Video from "./compoments/Video";
import Nouveaute from "./compoments/Nouveaute";
import Iphone from "./compoments/Iphone";
import Trait from "./compoments/trait";
import Footer from "./compoments/Footer";
import Satisfation from "./compoments/satisfation";
import FooterII from "./compoments/FooterII";
import AppleStyleCard from "./compoments/GridApple";

const Homepage = () => {
  
  return (
    <div>
        <Navbar/>
        <Video/>
        <Nouveaute/>
        <Iphone/>
        <Trait/>
        <Iphone/>
        <Iphone/>
        <Satisfation/>
        <Footer/>
        <FooterII/>
    </div>
  );
};

export default Homepage;
