import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './abut.css';

const About = () => {
  return (
    <Parallax pages={5} className="parallax-container">
      <ParallaxLayer offset={0} speed={0}>
        <div className="parallax-background"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.5}>
        <section className='info-section'>
          <h1>About Us</h1>
          <p>
            Welcome to our company. We are dedicated to providing the best service products to our customers.<br/>Learn more about our mission, vision, and values below.
          </p>
        </section>
      </ParallaxLayer>
      
      <ParallaxLayer offset={2} speed={0.5}>
        <section className="info-section">
          <div className="parallax-background"></div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver innovative solutions that drive progress and create value for our customers. We aim to be at the forefront of technology and sustainability, ensuring that our products and services contribute positively to society and the environment. By fostering a culture of excellence and collaboration, we strive to exceed our customers' expectations and achieve long-term success.
          </p>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.5}>
        <section className="info-section">
          <div className="parallax-background"></div>
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a global leader in our industry, known for our commitment to innovation, quality, and customer satisfaction. We envision a future where our solutions make a significant impact on the world, enhancing the lives of people and communities. Through continuous improvement and embracing new challenges, we aspire to shape the future and set new standards of excellence in our field.
          </p>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.5}>
        <section className="info-section">
          <div className="parallax-background"></div>
          <h2>Our Values</h2>
          <p>Integrity: We uphold the highest standards of honesty and transparency in all our dealings.</p>
          <p>Excellence: We are dedicated to achieving the highest quality in everything we do.</p>
          <p>Innovation: We encourage creativity and seek out new ways to solve problems and improve our offerings.</p>
          <p>Respect: We value and respect our employees, customers, and partners, fostering a positive and inclusive environment.</p>
          <p>Sustainability: We are committed to making responsible choices that contribute to the well-being of our planet and future generations.</p>
        </section>
      </ParallaxLayer>

      <ParallaxLayer offset={5} speed={0.5}>
        <section className="info-section team-section">
          <h2>Our Team</h2>
          <div className="team-container">
            <div className="team-member">
              <img src="/path/to/your/image1.jpg" alt="Team Member 1" className="team-image" />
              <p>John Doe</p>
              <p>CEO</p>
            </div>
            <div className="team-member">
              <img src="/path/to/your/image2.jpg" alt="Team Member 2" className="team-image" />
              <p>Jane Smith</p>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src="/path/to/your/image3.jpg" alt="Team Member 3" className="team-image" />
              <p>Emily Johnson</p>
              <p>CFO</p>
            </div> 
          </div>
        </section>
      </ParallaxLayer>
    </Parallax>
  );
};

export default About;