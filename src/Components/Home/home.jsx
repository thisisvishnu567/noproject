import React from "react";
import "./hOme.css";
import Nav from "../Assets/Nav/Navbar";
import Caro from "../Assets/Carousel/caro";
import Footer from "../Assets/Footer/footer";

const Home = () => {
  return (
    <div className="home-container">
      <Nav />
      <div className="carousel-container">
        <Caro />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
