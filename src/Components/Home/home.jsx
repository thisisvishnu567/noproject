import React from "react";
import "./hOme.css";
import Plan from "../Assets/Recharge/plans";
import Caro from "../Assets/Carousel/caro";
import Footer from "../Assets/Footer/footer";
import Nav from "../Assets/Nav/Navbar";
// import About from "../About/about";

const Home = () => {
  return (
    <div className="home-container">
      <Nav/>
      
      <div className="carousel-container">
        <Caro />
      </div>

      <div className="recharge-part">
        <Plan />
      </div>
{/* 
      <div className="about-part">
        <About />
      </div> */}
      
      <div className="footers">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
